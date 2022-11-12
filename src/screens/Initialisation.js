import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { runMigrations } from "../config/database";

const Initialisation = ({ navigation }) => {
	runMigrations(navigation);

	return (
		<View>
			<Text>Loading...</Text>
		</View>
	);
};

export default Initialisation;
