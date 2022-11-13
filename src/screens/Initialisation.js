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
		<View>
			<Text>Loading...</Text>
		</View>
	);
};

export default Initialisation;
