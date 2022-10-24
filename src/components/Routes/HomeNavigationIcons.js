import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const NavigationIcons = ({ navigation }) => {
	return (
		<View style={styles.btnContainer}>
			<Button
				onPress={() => navigation.navigate("AddShoppingList")}
				icon={{ name: "add", color: "grey", size: 28 }}
				buttonStyle={styles.addBtn}
			/>
			{/* <Button
				onPress={() => navigation.navigate("Settings")}
				icon={{ name: "settings", color: "grey", size: 28 }}
				buttonStyle={styles.settingsBtn}
			/> */}
		</View>
	);
};

const styles = StyleSheet.create({
	addBtn: {
		backgroundColor: "#ffffff",
	},
	settingsBtn: {
		backgroundColor: "#ffffff",
	},
	btnContainer: {
		flexDirection: "row",
	},
});

export default NavigationIcons;
