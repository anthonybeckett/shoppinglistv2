import React, {useLayoutEffect, useState} from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "@rneui/themed";
import { Formik } from "formik";
import ShoppingItemService from "../services/ShoppingItemService";

const ImportTextList = ({ navigation, route }) => {
	const [itemQty, setItemQty] = useState(0);
	const shoppingItemService = new ShoppingItemService();
	const parseListAndAdd = (data, seperator = "\n") => {
		if (data === "") return false;

		let arrData = data.split(seperator);

		if (typeof arrData !== "object") {
			if (seperator === "\n") {
				parseListAndAdd(data, ",");
			}

			return false;
		}

		// Todo: Refactor this, extract the functionality into a service
		if(arrData.length > 0){
			arrData.forEach(async (item, index) => {
				await shoppingItemService.create(
					route.params.id,
					item.trim(),
					index + itemQty + 1
				);

				if(arrData.length === index + 1){
					return navigation.goBack();
				}
			});
		}else{
			navigation.goBack();
		}
	};

	async function fetchItemsQty() {
		return await shoppingItemService.fetchItemQtyById(route.params.id);
	}

	async function getItemQty() {
		setItemQty(await fetchItemsQty());
	}

	useLayoutEffect(() => {
		getItemQty();
	}, []);

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
		color: "#000000"
	},
});
