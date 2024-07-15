import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface cart{
    id:string;
    title:string;
    image:string;
    price:string;
    description:string;
    category:string;
    count:string;
    rating:string;
    rate:string;
}
const Cart = () => {
    const [data, setData] = useState([])
  
    const fetchData =async()=>{
       try{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setData(res.data)
            console.log(res.data);
        })
       }catch(error){
        console.log("error");
       }
    }
    useEffect(()=>{
        fetchData();
    })
  return (
    <ScrollView>
      {
        data.map(( item:cart)=>(
            <View key={item.id}  style={styles.container}>
                <Image style={styles.images} source={{uri:item.image}}/>
               <Text style={styles.text} ><Text style={styles.title}>Title: </Text> {item.title}</Text>
               <Text  style={styles.text}><Text style={styles.title}>Price: </Text>{item.price}</Text>
               <Text style={styles.text} ><Text style={styles.title}>Description: </Text>{item.description}</Text>
               <Text style={styles.text} ><Text style={styles.title}>Category: </Text>{item.category}</Text>
              


            </View>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
   container:{
    padding:10,
    borderColor:"black",
    borderWidth:4,
    margin:20,
    borderRadius:20,
   },
   text:{
    fontSize:18,
    color:"black"
   },
   images:{
    width:300,
    height:400,
   },
   title:{
    color:"black",
    fontWeight:"bold",
   }
})

export default Cart