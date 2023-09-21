import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from './screens/Search';
import SearchResult from './screens/SearchResult';
import { store } from './store';

export type RootStackParamList = {
  Search: undefined;
  SearchResult: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
