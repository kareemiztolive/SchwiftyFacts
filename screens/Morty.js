import React from 'react';
import { StyleSheet, Text, ScrollView, Image,TouchableOpacity } from 'react-native';

function Morty(props) {

const characters = props.route.params.data

const morty = characters[1]

return (

<ScrollView  >
<Image source={{uri: morty.image}}style={styles.image1}/>

<Image source={{uri: morty.image}}style={styles.image1}/>

<Image source={{uri: morty.image}}style={styles.image1}/>

<Image source={{uri: morty.image}}style={styles.image1}/>

 </ScrollView>

    );



}



export default Morty

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "85%",
      paddingRight: 5,
      flexWrap: "wrap",
      paddingBottom: 50
      },
    header: {
        left: 20,
        fontSize: 40,
        top: 40,
        fontWeight: "700",
      }, 
      image1: {
        flex: 1,
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 350,
        borderRadius: 50,
        // marginLeft: 80,
       

        
    },
  });
