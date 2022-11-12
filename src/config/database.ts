import "reflect-metadata";
import { DataSource } from "typeorm";
import { HomeListEntity } from "../entities/HomeListEntity";

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
	// await dataSource.manager.query(`CREATE TABLE IF NOT EXISTS homelists (
	// 	id INTEGER PRIMARY KEY AUTO INCREMENT,
	// 	name VARCHAR(100) NOT NULL,
	// 	created_at DATETIME DEFAULT (datetime('now','localtime'));
	// )`);

	await navigation.navigate("Home");
};
