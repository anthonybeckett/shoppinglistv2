import "reflect-metadata";
import { DataSource } from "typeorm";
import { HomeList } from "../entities/HomeList";

const database = new DataSource({
	type: "react-native",
	database: "shopping_list",
	location: "default",
	logging: ["error", "query", "schema"],
	synchronize: true,
	entities: [HomeList],
	migrations: [],
	subscribers: [],
});

export default database;
