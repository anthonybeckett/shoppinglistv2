import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import { Formik } from "formik";

import HomeListService from "../services/HomeListService";
import moment from "moment";

const AddShoppingList = ({ navigation }) => {
	const createShoppingList = async (navigation, name) => {
		if (name) {
			const homeListService = new HomeListService();
			await homeListService.create(name);
		}

		navigation.goBack();
	};

	return (
		<Formik
			initialValues={{ name: moment().format("Do MMMM YYYY").toString() }}
			onSubmit={(values) => createShoppingList(navigation, values.name)}
		>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.container}>
					<Input
						onChangeText={handleChange("name")}
						onBlur={handleBlur("name")}
						value={values.name}
						style={styles.nameInput}
						placeholder="Name"
					/>

					<Button
						onPress={handleSubmit}
						title="Add Shopping List"
						style={styles.btn}
					/>
				</View>
			)}
		</Formik>
	);
};

export default AddShoppingList;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
	},
	nameInput: {
		marginTop: 10,
	},
	btn: {
		marginTop: 20,
	},
});
