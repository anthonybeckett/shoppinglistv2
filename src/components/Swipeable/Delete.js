import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Delete = ({ title = "Delete", onPress = null }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: "red",
				width: 70,
				alignItems: "center",
				justifyContent: "center",
			}}
			onPress={() => onPress}
		>
			<Text>{title}</Text>
		</TouchableOpacity>
	);
};

export default Delete;
