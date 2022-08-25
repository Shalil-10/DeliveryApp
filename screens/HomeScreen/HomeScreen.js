import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';
import sanityClient from '../../sanity'
import Header from './Header';

const HomeScreen = () => {
    const [featuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            //     `*[_type == "featured"]{
            //     ...,
            //     restaurants[]->{
            //       ...,
            //       dishes[]->
            //     }
            //   }`
            `*[_type == "featured"]{
            ...
            }`
        ).then((data) => { setFeaturedCategories(data) })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-4">
            {/* Header */}
            <Header />

            {/* Body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 130,
                }}
            >

                {/* Categories */}
                <Categories />

                {/* Featured */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen