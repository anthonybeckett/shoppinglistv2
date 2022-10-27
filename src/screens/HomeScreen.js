import React, { useState, useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Delete from "../components/Swipeable/Delete";

import HomeListService from "../services/HomeListService";

const HomeScreen = ({ navigation }) => {
	const [listItems, setListItems] = useState(null);
	const homeListService = new HomeListService();

	const deleteItem = async (id) => {
		homeListService.destroy(id);

		const newItems = listItems.filter((item) => item.id !== id);
		setListItems(newItems);
	};

	const getListItems = async () => {
		const homeListService = new HomeListService();
		setListItems(await homeListService.fetchAll());
	};

	useLayoutEffect(() => {
		// This gives a little delay to get the database initalised
		setTimeout(() => {
			navigation.addListener("focus", () => {
				getListItems();
			});

			getListItems();
		}, 250);
	}, []);

	return (
		<GestureHandlerRootView>
			<ScrollView>
				{listItems &&
					listItems.map((item) => (
						<Swipeable
							key={item.id}
							onPress={() =>
								navigation.navigate("ShoppingList", {
									id: item.id,
								})
							}
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
								onPress={() =>
									navigation.navigate("ShoppingList", {
										id: item.id,
									})
								}
							>
								<Icon name="list" />
								<ListItem.Content>
									<ListItem.Title>{item.name}</ListItem.Title>
								</ListItem.Content>
								<ListItem.Chevron />
							</ListItem>
						</Swipeable>
					))}
			</ScrollView>
		</GestureHandlerRootView>
	);
};

export default HomeScreen;
