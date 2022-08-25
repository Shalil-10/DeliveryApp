import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../../features/restaurantSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker } from 'react-native-maps';
import * as Progress from 'react-native-progress';
import { XCircleIcon } from 'react-native-heroicons/solid';

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  return (
    <SafeAreaView className='bg-[#00ccbb] flex-1'>
      <View className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className='rounded-full bg-gray-100 '
          >
            <XCircleIcon color={'#00ccbb'} size={40} />
          </TouchableOpacity>
          <Text className=' text-white text-lg'>Order Help</Text>
        </View>

        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
          }}                                                    //https://ethercreative.github.io/react-native-shadow-generator/
          className='bg-white mx-5 my-2 rounded-md p-6 z-50'
        >
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: 'https://links.papareact.com/fLs' }}
              className='h-20 w-20'
            />
          </View>
          <Progress.Bar size={30} color='#00ccbb' indeterminate={true} />
          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant?.title} is being prepared
          </Text>
        </View>

      </View>

      <MapView
        initialRegion={{
          latitude: restaurant?.lat,
          longitude: restaurant?.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat,
            longitude: restaurant?.long,
          }}
          title={restaurant?.title}
          description={restaurant?.short_description}
          pinColor='#00ccbb'
        />
      </MapView>

      <View className='bg-white flex-row items-center space-x-5 h-28'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>Shaz</Text>
          <Text className='text-gray-400'>Your ride</Text>
        </View>
        <Text className='text-[#00ccbb] text-lg mr-5 cursor-pointer'>Call</Text>
      </View> 
    </SafeAreaView>
  )
}

export default DeliveryScreen