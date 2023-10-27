import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import EventActionHandler from './src/components/agenda/EventActionsHandler';
import Agenda from './src/components/agenda/Agenda';
import TitleBar from './src/components/TitleBar';
import ReportAddItem from './src/components/repo/ReportAddItem';
import {Events} from './src/modules/Events';

const Stack = createStackNavigator();

const contactoTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    background: 'white',
  },
};

export type ParamList = {
  EventActionHandler: {event: Events};
  Agenda: undefined;
  ReportAddItem: {idEvent: number; idUser: number};
};

export default function App() {
  return (
    <NavigationContainer theme={contactoTheme}>
      <Stack.Navigator
        initialRouteName="agenda"
        screenOptions={{headerLeft: () => null}}>
        <Stack.Screen
          name="Agenda"
          options={{headerTitle: () => <TitleBar functionName={'Agenda'} />}}
          component={Agenda}
        />

        <Stack.Screen
          name="EventActionHandler"
          options={{headerTitle: () => <TitleBar functionName={'Azioni'} />}}
          component={EventActionHandler}
        />

        <Stack.Screen
          name="ReportAddItem"
          component={ReportAddItem}
          options={{
            headerTitle: () => <TitleBar functionName={'Azioni'} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
