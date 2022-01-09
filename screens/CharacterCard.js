import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function Characters() {

   



    return (
      <View style={styles.column}>
          <View style={styles.card}>
          <Image style={styles.image}/>
          <Text style={styles.title} >   </Text>
          <Text style={styles.title2}>   </Text>
          </View>
      
      </View>
    );
  }

  export default Characters

  const styles = StyleSheet.create({
    column: {
      flex: 1,
      width: "25%",
      paddingRight: 10,
      paddingBottom: 50  
    },
    card: {
      borderRadius: 5,
      height: 60,
      width: 40,
    },
    cardimage: {
        height: 40,
        width: 40
      },
      title:{
        color: "black",
        fontSize: 20,
        fontWeight: 500,
        paddingBottom: 10
      },
      title2:{
        color: "black",
        fontSize: 20,
        fontWeight: 300
      }
  });
