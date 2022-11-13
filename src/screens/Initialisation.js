import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { dataSource, runMigrations } from "../config/database";

const Initialisation = ({ navigation }) => {
	const initialiseApp = () => {
		!dataSource.isInitialized
			? setTimeout(() => initialiseApp(), 500)
			: runMigrations(navigation);
	};

	initialiseApp();

	return (
		<View style={styles.container}>
			<Text style={styles.loading}>Loading...</Text>
		</View>
	);
};

export default Initialisation;

const styles = StyleSheet.create({
	container: {
		height: "100%",
	},
	loading: {
		textAlign: "center",
		textAlignVertical: "center",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
