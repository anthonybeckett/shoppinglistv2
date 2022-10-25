import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";

const Delete = ({ name = "delete", onPress = null }) => {
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
			<Icon name={name} color="white" />
		</TouchableOpacity>
	);
};

export default Delete;
