import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
	return (
		<NavigationContainer>
			<SafeAreaView>
				<Text className="text-4xl font-bold text-blue-500">Hello</Text>
			</SafeAreaView>
		</NavigationContainer>
	);
};

export default App;
