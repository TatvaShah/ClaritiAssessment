import { Text } from "react-native";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// Set maxFontSizeMultiplier globally for accessibility
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1.5; // Value can be adjusted according to layout

AppRegistry.registerComponent(appName, () => App);
