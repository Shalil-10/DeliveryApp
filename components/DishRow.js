import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice'

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)

    // const basketItems = useSelector((state) => state.basket.basketItems.filter((item) => item.id === id))
    const basketItems = useSelector((state) => selectBasketItemsWithId(state, id))

    const dispatch = useDispatch()

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            ₹{price}
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={{ uri: urlFor(image).url() }}
                            className="h-20 w-20 bg-gray-300"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className='bg-white flex-row items-center space-x-2 pb-3 px-3'>
                    <TouchableOpacity
                        disabled={!basketItems.length}
                        onPress={() => dispatch(removeFromBasket({ id }))}
                    >
                        <MinusCircleIcon
                            color={basketItems.length > 0 ? "#00CCBB" : "gray"}
                            size={40}
                        />
                    </TouchableOpacity>
                    <Text>{basketItems.length}</Text>

                    <TouchableOpacity
                        onPress={() => dispatch(addToBasket({ id, name, description, price, image }))}
                    >
                        <PlusCircleIcon
                            color="#00CCBB"
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

export default DishRow