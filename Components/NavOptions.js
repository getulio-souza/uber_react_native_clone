import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import tw from 'twrnc'; //tailwind
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://i.pinimg.com/originals/c3/d2/38/c3d238dcef304d8e602c59884aa85a78.png",
    screen: "MapScreen",
  },
  
  {
    id: "456",
    title: "Order food",
    image: "https://i.pinimg.com/originals/8e/c7/0d/8ec70dc4806d0d7580008057bd607a05.jpg",
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
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
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

