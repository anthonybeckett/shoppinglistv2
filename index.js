import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import MainRoutes from "./src/routes/MainRoutes";
import { connectDataSource, runMigrations } from "./src/config/database";

connectDataSource();
// setTimeout(runMigrations, 1000);

AppRegistry.registerComponent(appName, () => MainRoutes);
