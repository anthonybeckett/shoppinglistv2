import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/HomeScreen";

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={options.home}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const options = {
	home: ({ navigation, route }) => ({
		title: "Shopping List",
	}),
	shoppingList: ({ navigation, route }) => ({
		title: "Shopping List",
	}),
};

export default MainRoutes;
