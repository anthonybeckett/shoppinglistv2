import { StyleSheet, Text, View } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Button } from "@rneui/base";

import ShoppingItemService from "../../services/ShoppingItemService";

const ShoppingListNavigationIcons = ({ navigation, route }) => {
	const shoppingItemService = new ShoppingItemService();

	return (
		<View style={styles.btnContainer}>
			<Button
				onPress={() =>
					navigation.navigate("ImportTextList", {
						id: route.params.id,
						//itemQty: itemQty,
					})
				}
				icon={{ name: "article", color: "grey", size: 28 }}
				buttonStyle={styles.addBtn}
			/>
		</View>
	);
};

export default ShoppingListNavigationIcons;

const styles = StyleSheet.create({
	addBtn: {
		backgroundColor: "#fff",
	},
});
