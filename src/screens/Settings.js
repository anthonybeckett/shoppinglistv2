import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Settings = () => {
	return (
		<View style={styles.container}>
			<Button title="Reset App" onPress={() => setup.resetApp()} />
		</View>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 5,
	},
});
