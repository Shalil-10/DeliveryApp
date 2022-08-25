import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import SanityClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    SanityClient.fetch(
    `*[_type == "category"]`
    ).then(data => setCategories(data))
  },[])

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      {categories.map((category) => (
        <CategoryCard 
        key={category._id}
          imgUrl={urlFor(category.image).url()} 
          title={category.name}
        />
      ))}
    
    </ScrollView>
  )
}

export default Categories