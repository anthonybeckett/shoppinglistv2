import "reflect-metadata";
import { DataSource } from "typeorm";
import { HomeListEntity } from "../entities/HomeListEntity";

const dataSource = new DataSource({
	type: "react-native",
	database: "shopping_list",
	location: "default",
	logging: ["error", "query", "schema"],
	synchronize: true,
	entities: [HomeListEntity],
	migrations: [],
	subscribers: [],
});

export const connectDataSource = () => {
	dataSource
		.initialize()
		.then(() => console.log("Data source has been initialised"))
		.catch((err) =>
			console.error(`Data source initialisation failed: ${err}`)
		);
};
