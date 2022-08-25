import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
    
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type-> {
                name
              }
            }
          }[0]
        `, { id }).then(data => setRestaurants(data?.restaurants))
    }, [])

    return (
        <View>
            <View className="flex-row mt-4 items-center justify-between mx-3">
                
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 mx-3">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >

                {/* Restaurant Cards */}
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow