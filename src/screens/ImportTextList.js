import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "@rneui/themed";
import { Formik } from "formik";
import ShoppingItemService from "../services/ShoppingItemService";

const ImportTextList = ({ navigation, route }) => {
	const parseListAndAdd = (data, seperator = "\n") => {
		if (data === "") return false;

		let arrData = data.split(seperator);

		if (typeof arrData !== "object") {
			if (seperator === "\n") {
				parseListAndAdd(data, ",");
			}

			return false;
		}

		const shoppingItemService = new ShoppingItemService();

		arrData.forEach(async (item, index) => {
			await shoppingItemService.create(
				route.params.id,
				item.trim(),
				index + route.params.itemQty + 1
			);
		});

		navigation.goBack();
	};

	return (
		<Formik
			initialValues={{ list: "" }}
			onSubmit={(values) => parseListAndAdd(values.list)}
		>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.container}>
					<TextInput
						onChangeText={handleChange("list")}
						onBlur={handleBlur("list")}
						value={values.list}
						style={styles.listInput}
						placeholder="Paste List"
						multiline={true}
						numberOfLines={20}
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

export default ImportTextList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
	},
	listInput: {
		flex: 1,
		justifyContent: "flex-start",
		textAlignVertical: "top",
		borderColor: "grey",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 5,
	},
});
