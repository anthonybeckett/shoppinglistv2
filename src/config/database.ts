import "reflect-metadata";
import { DataSource } from "typeorm";
import { HomeListEntity } from "../entities/HomeListEntity";

export const dataSource = new DataSource({
	type: "react-native",
	database: "shopping_list.sql",
	location: "default",
	logging: ["error", "query", "schema"],
	entities: [HomeListEntity],
	migrations: [],
	subscribers: [],
});

export const connectDataSource = () => {
	dataSource
		.initialize()
		.then(() => console.log("Database initialised"))
		.catch((err) =>
			console.error(`Data source initialisation failed: ${err}`)
		);
};

export const cdb2 = async () => {
	await dataSource.initialize();
};
