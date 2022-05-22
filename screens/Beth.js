import React from 'react';
import { StyleSheet, Text, ScrollView, Image,TouchableOpacity } from 'react-native';

function Beth(props) {

const characters = props.route.params.data

const beth = characters[3]

return (

<ScrollView contentContainerStyle={styles.container}>
<Image source={{uri: beth.image}}style={styles.image1}/>

 </ScrollView>

    );



}



export default Beth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'space-between',
      },
    header: {
        left: 20,
        fontSize: 40,
        top: 40,
        fontWeight: "700",
      }, 
      image1: {
        flex: 4,
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 350,
        borderRadius: 50,
        marginLeft: 80,

        
    },
  });
