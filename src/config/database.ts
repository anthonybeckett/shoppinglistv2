import "reflect-metadata";
import { DataSource } from "typeorm";
import { HomeListEntity } from "../entities/HomeListEntity";
import { StackActions } from "@react-navigation/native";

export const dataSource = new DataSource({
	type: "react-native",
	database: "shopping_list.sql",
	location: "default",
	logging: ["error", "query", "schema"],
	entities: [HomeListEntity],
});

export const connectDataSource = () => {
	dataSource
		.initialize()
		.then(() => true)
		.catch((err) =>
			console.error(`Data source initialisation failed: ${err}`)
		);
};

export const runMigrations = async (navigation) => {
	await dataSource.manager.query(`CREATE TABLE IF NOT EXISTS homelists (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name VARCHAR(100) NOT NULL,
		created_at DATETIME DEFAULT (datetime('now','localtime'))
	);`);

	await navigation.dispatch(StackActions.replace("Home"));
};
