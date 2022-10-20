import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const HomeScreen = () => {
	return (
		<NavigationContainer>
			<SafeAreaView>
				<Text className="text-4xl font-bold text-blue-400">
					Working
				</Text>
			</SafeAreaView>
		</NavigationContainer>
	);
};

export default HomeScreen;
