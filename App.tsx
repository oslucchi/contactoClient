import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EventHandler from "./src/components/agenda/EventHandler";
import Agenda from "./src/components/agenda/Agenda";
import TitleBar from "./src/components/TitleBar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="agenda"
        screenOptions={{ headerLeft: () => null }}
      >
        <Stack.Screen
          name="agenda"
          component={Agenda}
          options={{ headerTitle: () => <TitleBar functionName={"Agenda"} /> }}
        />
        <Stack.Screen
          name="eventHandler"
          component={EventHandler}
          options={{
            headerTitle: () => <TitleBar functionName={"Gestione Evento"} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // <View  style={{ backgroundColor: "gray" }}>
  // </View>
}
