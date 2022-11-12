import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import HomeNavigationIcons from "../components/Routes/HomeNavigationIcons";
import AddShoppingList from "../screens/AddShoppingList";
import ShoppingListNavigationIcons from "../components/Routes/ShoppingListNavigationIcons";
import ImportTextList from "../screens/ImportTextList";
import ShoppingList from "../screens/ShoppingList";
import Initialisation from "../screens/Initialisation";

import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Initialisation"
				headerMode="screen"
			>
				<Stack.Screen
					name="Initialisation"
					component={Initialisation}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={options.home}
				/>
				<Stack.Screen
					name="AddShoppingList"
					component={AddShoppingList}
					options={{ title: "New List" }}
				/>
				<Stack.Screen
					name="ShoppingList"
					component={ShoppingList}
					options={options.shoppingList}
					listeners={{ focus: (e) => {} }}
				/>
				<Stack.Screen
					name="ImportTextList"
					component={ImportTextList}
					options={{ title: "Import List" }}
				/>
				{/* <Stack.Screen
					name="Settings"
					component={Settings}
					options={{ title: "Settings" }}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const options = {
	home: ({ navigation, route }) => ({
		title: "Shopping Lists",
		headerBackVisible: false,
		headerRight: () => <HomeNavigationIcons navigation={navigation} />,
	}),
	shoppingList: ({ navigation, route }) => ({
		title: "Shopping List",
		headerRight: () => <ShoppingListNavigationIcons />,
	}),
};

export default MainRoutes;
