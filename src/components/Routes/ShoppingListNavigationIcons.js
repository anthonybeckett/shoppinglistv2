import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const ShoppingListNavigationIcons = ({ navigation, route }) => {
	return (
		<View style={styles.btnContainer}>
			<Button
				onPress={() =>
					navigation.navigate("ImportTextList", {
						id: route.params.id,
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
