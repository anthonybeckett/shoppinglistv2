import React, { useState, useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

import Delete from "../components/Swipeable/Delete";
import HomeListService from "../services/HomeListService";

const HomeScreen = ({ navigation }) => {
	const [listItems, setListItems] = useState([]);
	const homeListService = new HomeListService();

	useLayoutEffect(() => {
		const getListItems = async () => {
			const homeListService = new HomeListService();
			setListItems(await homeListService.fetchAll());
		};

		navigation.addListener("focus", () => {
			console.log("Focused");
			getListItems();
		});

		getListItems();
	}, []);

	return (
		<GestureHandlerRootView>
			<ScrollView>
				{listItems.map((item) => (
					<Swipeable
						key={item.id}
						onPress={() =>
							navigation.navigate("ShoppingList", { id: item.id })
						}
						renderRightActions={() => <Delete />}
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
