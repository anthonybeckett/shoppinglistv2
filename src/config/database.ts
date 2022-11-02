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
		.then(() => console.log("Database initialised"))
		.catch((err) =>
			console.error(`Data source initialisation failed: ${err}`)
		);
};

export const runMigrations = async () => {
	// Check migrations table exists
	const migrationsCheck = await dataSource.manager.query(
		"SELECT name FROM sqlite_master WHERE type='table' AND name='migrations';"
	);

	if (migrationsCheck.length === 0) {
		await dataSource.manager.query(
			`CREATE TABLE migrations(
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name varchar(255) NOT NULL,
				created_at DATETIME DEFAULT current_timestamp
			);`
		);
	}

	// Pull previous migrations and list of migration file names
	// Filter migrations
	// Loop through, include, instantiate and call static up function in each class
	// destroy the instance at the end to avoid a memory leak
	// Return status
};
