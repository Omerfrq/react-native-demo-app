import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {usePosts} from '../hooks/usePosts';
import {setMessage, setOpen} from '../store/MessageSlice';
import {Navigation} from 'react-native-navigation';
import {useCart} from './CartProvider/src/';
import tw from 'twrnc';
import {Form} from './Form';

const Message = props => {
  const dispatch = useDispatch();
  const {message} = useSelector(state => state.message);

  const {cartTotal, totalItems, items, setItems, removeItem, totalUniqueItems} =
    useCart();

  console.log(cartTotal, totalItems, items, totalUniqueItems);

  const {data, isLoading, isSuccess} = usePosts();

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
    setItems([
      {
        id: 1,
        name: 'omer',
        quantity: 1,
        price: 10,
      },
      {
        id: 3,
        name: 'shery',
        quantity: 10,
        price: 40,
      },
    ]);
  };

  const remove = () => {
    removeItem(1);
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={remove}>
        {/* <Form /> */}
        <View>
          <Text
            style={tw`p-4 android:pt-2 text-indigo-900 bg-white dark:bg-black`}>
            Remove
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <View>
          <Text>{message}</Text>
        </View>
      </TouchableOpacity>
      {isSuccess && !isLoading && (
        <React.Fragment>
          <Text style={styles.header}>all posts</Text>
          <FlatList
            data={data}
            style={styles.wrapper}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  Navigation.push('Omer', {
                    component: {
                      name: 'Settings',
                      options: {
                        topBar: {
                          title: {
                            text: 'Settings',
                          },
                        },
                      },
                    },
                  })
                }
                style={styles.post}>
                <View style={styles.item}>
                  <Text style={styles.postTitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </React.Fragment>
      )}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'red',
    paddingVertical: 10,
  },
  post: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  postTitle: {color: 'white', textTransform: 'capitalize'},
});
