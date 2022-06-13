/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  Switch,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import tw from 'twrnc';
import Message from './components/Message';
import {QueryClient, QueryClientProvider} from 'react-query';

const App = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const queryClient = new QueryClient({
    defaultOptions: {
      refetchOnWindowFocus: false,
    },
  });

  console.log(props);

  const [value, setValue] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Message />
    </QueryClientProvider>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default App;
