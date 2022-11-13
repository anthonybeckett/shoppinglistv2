import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
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
			<View style={styles.loadingContainer}>
				<ActivityIndicator
					size="large"
					color="#d3d3d3"
					style={styles.loadingImage}
				/>
				<Text style={styles.loading}>Loading...</Text>
			</View>
		</View>
	);
};

export default Initialisation;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		flex: 1,
	},
	loadingContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	loading: {
		textAlign: "center",
		fontWeight: "bold",
	},
});
