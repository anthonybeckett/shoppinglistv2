import "reflect-metadata";
import { DataSource } from "typeorm";
import { HomeListEntity } from "../entities/HomeListEntity";
import { ShoppingItemEntity } from "../entities/ShoppingItemEntity";
import {NavigationProp, StackActions} from "@react-navigation/native";

export const dataSource = new DataSource({
	type: "react-native",
	database: "shopping_list.sql",
	location: "default",
	logging: ["error", "query", "schema"], //"error", "query", "schema"
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

export const runMigrations = async (navigation: NavigationProp<object>) => {
	// await dataSource.manager.query(`DROP TABLE homelist`);
	// await dataSource.manager.query(`DROP TABLE shopping_items`);

	await dataSource.manager.query(`CREATE TABLE IF NOT EXISTS homelist (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		name VARCHAR(100) NOT NULL,
		created_at DATETIME DEFAULT (datetime('now','localtime'))
	);`);

	await dataSource.manager.query(`CREATE TABLE IF NOT EXISTS shopping_items (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		list_id INTEGER NOT NULL,
		name VARCHAR(100) NOT NULL,
		complete INTEGER NOT NULL DEFAULT (0),
		item_order INTEGER NOT NULL,
		created_at DATETIME DEFAULT (datetime('now','localtime'))
	);`);

	await dataSource.manager.query(`
		CREATE INDEX IF NOT EXISTS 'idx_listid' ON shopping_items (list_id ASC);
	`);

	await dataSource.manager.query(`
		CREATE INDEX IF NOT EXISTS 'idx_complete' ON shopping_items (complete ASC);
	`);

	await dataSource.manager.query(`
		CREATE INDEX IF NOT EXISTS 'idx_itemOrder' ON shopping_items (item_order ASC);
	`);

	await navigation.dispatch(StackActions.replace("Home"));
};
