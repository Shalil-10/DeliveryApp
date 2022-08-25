import { View, Text, Image, TextInput } from 'react-native'
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from "react-native-heroicons/outline"

const Header = () => {
    return (
        <>
            <View className="flex-row pb-3 items-center mx-3 space-x-2">
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className="h-7 w-7 bg-gray-300 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            <View className="flex-row items-center space-x-2 pb-2 mx-3">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
                    <SearchIcon color="gray" size={20} />
                    <TextInput placeholder='Restaurants and Cuisines' />
                </View>
                <AdjustmentsIcon color="#00CCBB" />
            </View>
        </>
    )
}

export default Header