import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList from "react-native-draggable-flatlist";

import ShoppingItemService from "../services/ShoppingItemService";
import Delete from "../components/Swipeable/Delete";

const ShoppingList = ({ route, navigation }) => {
	const [shoppingItems, setShoppingItems] = useState([]);
	const shoppingItemService = new ShoppingItemService();

	const getShoppingItems = async () => {
		const items = await shoppingItemService.fetchByShoppingListId(
			route.params.id
		);
		setShoppingItems(items);
	};

	const updateItemsOrder = (items) => {
		const newOrder = items.map((item, index) => {
			return {...item, item_order: index}
		});

		setShoppingItems(newOrder);

		shoppingItemService.updateItemsOrderCollection(newOrder);
	}

	const updateShoppingItem = async (id) => {
		let itemToUpdate = {};

		// Update database with completed = 1
		let newList = shoppingItems.map(item => {
			if(item.id === id){
				itemToUpdate.id = id;
				itemToUpdate.complete = !item.complete;


				return {...item, complete: !item.complete ? 1 : 0}
			}
			return item;
		});

		//Sort list based on complete status
		newList.sort((a, b) => a.complete - b.complete);

		setShoppingItems(newList);

		//Update order numbers
		let ordered = newList.map((item, index) => {
			return {...item, item_order: index}
		});

		ordered.sort((a, b) => a.item_order > b.item_order);

		// Todo: Switch out for a loop and update order and complete of each item
		shoppingItemService.completeItemById(itemToUpdate.id, itemToUpdate.complete);

		shoppingItemService.updateItemsOrderCollection(ordered);
	}

	const deleteItem = async (id) => {
		shoppingItemService.destroy(id);

		const newItems = shoppingItems.filter((item) => item.id !== id);
		setShoppingItems(newItems);
	};

	useEffect(() => {
		return navigation.addListener("focus", () => {
			getShoppingItems();
		});
	}, []);

	const renderItem = ({ item, index, drag, isActive }) => (
		<Swipeable
			key={item.id}
			onPress={() => navigation.navigate("ShoppingList", { id: item.id })}
			renderRightActions={() => (
				<Delete
					onPress={() => {
						deleteItem(item.id);
					}}
				/>
			)}
		>
			<ListItem
				key={item.id}
				bottomDivider={true}
				onPress={() => updateShoppingItem(item.id)}
			>
				<ListItem.Content style={styles.listItemContainer}>
					<TouchableOpacity onLongPress={drag} delayLongPress={10}>
						<Icon name="sort" style={styles.sortIcon} />
					</TouchableOpacity>
					<ListItem.Title
						style={
							item.complete ? styles.strikeThrough : styles.normal
						}
					>
						{item.name}
					</ListItem.Title>
				</ListItem.Content>
				<ListItem.Chevron />
			</ListItem>
		</Swipeable>
	);

	return (
		<GestureHandlerRootView>
			<Text style={[styles.splitHeaders, styles.splitHeadersIncomplete]}>Items</Text>
			<DraggableFlatList
				data={shoppingItems.filter(item => item.complete !== 1)}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				onDragEnd={({ data }) => updateItemsOrder(data)}
				style={styles.flatListIncomplete}
			/>

			{/*<Text style={[styles.splitHeaders, styles.splitHeadersComplete]}>Completed</Text>*/}
			{/*<DraggableFlatList*/}
			{/*	data={shoppingItems.filter(item => item.complete === 1)}*/}
			{/*	renderItem={renderItem}*/}
			{/*	keyExtractor={(item) => item.id + "_completed"}*/}
			{/*	onDragEnd={({ data }) => updateItemsOrder(data)}*/}
			{/*	style={styles.flatListComplete}*/}
			{/*/>*/}

		</GestureHandlerRootView>
	);
};

export default ShoppingList;

const styles = StyleSheet.create({
	normal: {},
	strikeThrough: {
		textDecorationLine: "line-through",
		textDecorationStyle: "solid",
	},
	listItemContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	sortIcon: {
		marginRight: 20,
	},
	flatListIncomplete: {
		//height: "55%"
		height: "90%"
	},
	flatListComplete: {
		height: "30%",
	},
	splitHeaders: {
		fontWeight: "400",
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		fontSize: 16
	},
	splitHeadersIncomplete: {
		color: "blue"
	},
	splitHeadersComplete: {
		color: "green"
	},
});
