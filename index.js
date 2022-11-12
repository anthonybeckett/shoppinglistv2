import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { connectDataSource } from "./src/config/database";
import MainRoutes from "./src/routes/MainRoutes";

connectDataSource();

AppRegistry.registerComponent(appName, () => MainRoutes);
