import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import { Formik } from "formik";

const createShoppingList = (navigation, name) => {
	shoppingList.create(name);
	navigation.goBack();
};

const AddShoppingList = ({ navigation }) => {
	return (
		<Formik
			initialValues={{ name: "" }}
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
