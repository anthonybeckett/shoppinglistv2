import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import MainRoutes from "./src/routes/MainRoutes";
import "reflect-metadata";

AppRegistry.registerComponent(appName, () => MainRoutes);
