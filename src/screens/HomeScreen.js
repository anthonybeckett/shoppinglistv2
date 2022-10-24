import React, { useState, useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Delete from "../components/Swipeable/Delete";

const HomeScreen = ({ navigation }) => {
	return (
		<GestureHandlerRootView>
			<ScrollView>
				<Swipeable
					//key={item.id}
					//onPress={() => navigation.navigate("ShoppingList", { id: 1 })}
					renderRightActions={() => <Delete />}
				>
					<ListItem
					//key={item.id}
					// onPress={() =>
					// 	navigation.navigate("ShoppingList", { id: 1 })
					// }
					>
						<Icon name="list" />
						<ListItem.Content>
							<ListItem.Title>{"Test"}</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</Swipeable>
			</ScrollView>
		</GestureHandlerRootView>
	);
};

export default HomeScreen;
