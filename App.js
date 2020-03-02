import { createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from "./components/Screen1"
import Screen2 from "./components/Screen2"
import Edit from "./components/Edit"

const Root = createStackNavigator({
  s1: { screen: Screen1 },
  s2: { screen: Screen2 },
  s3: { screen: Edit}
});

const App = createAppContainer(Root);

export default App;
