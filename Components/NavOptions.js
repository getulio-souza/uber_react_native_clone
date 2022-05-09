import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import tw from 'twrnc'; //tailwind
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://cdn.dribbble.com/users/914217/screenshots/6122089/360-spin.png?compress=1&resize=400x300&vertical=top",
    screen: "MapScreen",
  },
  
  {
    id: "456",
    title: "Order food",
    image: "https://pngset.com/images/uber-eats-uber-eats-logo-2018-word-symbol-trademark-label-transparent-png-2798767.png",
    screen: "EatScreen",
  },

]

const NavOptions = () => {

  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={()=> navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 text-left`}>
            <View>
              <Image
                style={{width:120, height:120, resizeMode:'contain'}}
                source={{uri: item.image}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
              style={tw `p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default NavOptions;

