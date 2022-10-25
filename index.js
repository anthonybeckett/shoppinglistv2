import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import MainRoutes from "./src/routes/MainRoutes";
import { connectDataSource } from "./src/config/database";

connectDataSource();

AppRegistry.registerComponent(appName, () => MainRoutes);
