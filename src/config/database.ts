import "reflect-metadata";
import { DataSource } from "typeorm";
import { HomeListEntity } from "../entities/HomeListEntity";
import { ShoppingItemEntity } from "../entities/ShoppingItemEntity";
import { StackActions } from "@react-navigation/native";

export const dataSource = new DataSource({
	type: "react-native",
	database: "shopping_list.sql",
	location: "default",
	logging: ["error", "query", "schema"],
	entities: [HomeListEntity, ShoppingItemEntity],
});

export const connectDataSource = () => {
	dataSource
		.initialize()
		.then(() => true)
		.catch((err) =>
			console.error(`Data source initialisation failed: ${err}`)
		);
};

export const runMigrations = async (navigation: { navigation: object }) => {
	await dataSource.manager.query(`CREATE TABLE IF NOT EXISTS homelist (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name VARCHAR(100) NOT NULL,
		created_at DATETIME DEFAULT (datetime('now','localtime'))
	);`);

	await dataSource.manager.query(`CREATE TABLE IF NOT EXISTS shopping_items (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		list_id INTEGER NOT NULL,
		name VARCHAR(100) NOT NULL,
		complete INTEGER NOT NULL DEFAULT (0),
		item_order INTEGER NOT NULL,
		created_at DATETIME DEFAULT (datetime('now','localtime'))
	);`);

	await navigation.dispatch(StackActions.replace("Home"));
};
