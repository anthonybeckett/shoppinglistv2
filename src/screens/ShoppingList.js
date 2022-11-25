import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList from "react-native-draggable-flatlist";

import ShoppingItemService from "../services/ShoppingItemService";

const ShoppingList = ({ route, navigation }) => {
	const [shoppingItems, setShoppingItems] = useState([]);
	const shoppingItemService = new ShoppingItemService();

	const getShoppingItems = async () => {
		const items = await shoppingItemService.fetchByShoppingListId(
			route.params.id
		);
		setShoppingItems(items);
	};

	const deleteItem = async (id) => {
		shoppingItemService.destroy(id);

		const newItems = shoppingItems.filter((item) => item.id !== id);
		setShoppingItems(newItems);
	};

	useLayoutEffect(() => {
		navigation.addListener("focus", () => {
			getShoppingItems();
		});
	}, []);

	const renderItem = ({ item, index, drag, isActive }) => (
		<Swipeable
			key={item.id}
			onPress={() => navigation.navigate("ShoppingList", { id: item.id })}
			renderRightActions={() => (
				<TouchableOpacity
					style={{
						backgroundColor: "red",
						width: 70,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => deleteItem(item.id)}
				>
					<Text style={{ color: "white" }}>Delete</Text>
				</TouchableOpacity>
			)}
		>
			<ListItem
				key={item.id}
				bottomDivider={true}
				//onPress={() => updateShoppingList(item.id)}
				onPress={() => console.log(item)}
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
			<DraggableFlatList
				data={shoppingItems}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
				//onDragEnd={({ data }) => updateShoppingItems(data)}
			/>
		</GestureHandlerRootView>
	);
};

export default ShoppingList;

const styles = StyleSheet.create({
	deleteButton: {
		minHeight: "100%",
		backgroundColor: "red",
	},
	normal: {},
	strikeThrough: {
		textDecorationLine: "line-through",
		textDecorationStyle: "solid",
	},
	listItemContainer: {
		//flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	sortIcon: {
		marginRight: 20,
	},
});
