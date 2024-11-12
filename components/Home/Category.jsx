import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme } from '../../constants/theme'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../../config/config'
import { FlatList } from 'react-native'

const Category = () => {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        GetCategories();
    }, []);

    const GetCategories = async() => {
        const snapshot = await getDocs(collection(db,'Category'));
        snapshot.forEach((doc) => {
            console.log(doc.data());
            setCategoryList(categoryList=>[...categoryList, doc.data()]);
        })
    }


  return (
    <View style = {{marginTop: 20}}>
      <Text style = {styles.title}>Pet's Food</Text>
      <FlatList
        data={categoryList}
        renderItem={({item, index}) => (
            <View>
                <View>
                    <Image source={{uri:item?.imageUrl}}
                        style={{width: '40', height: 40}}
                    />
                </View>
            </View>
        )}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({

    title: {
        fontWeight: theme.fonts.bold,
        fontSize: 20,
    }

})