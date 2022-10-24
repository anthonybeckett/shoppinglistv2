import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShoppingListNavigationIcons = ({ navigation }) => {
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

const styles = StyleSheet.create({});
