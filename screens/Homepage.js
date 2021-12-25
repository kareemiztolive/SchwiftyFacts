import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';




function Homepage() {

   const navigation = useNavigation();


    return (
    <View style={styles.container} >  
      <Image source={require("../images/schwiftyfactstitle2.png")} style={styles.image}/>
       <Image source={require("../images/rickandmortyportal2.png")} style={styles.image2}/>
       <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Characters')}>
          <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Characters</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Episodes')}>
          <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Episodes</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Locations')}>
          <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Locations</Text>
       </TouchableOpacity>
       </View>
    );
  }


  export default Homepage

  const styles = StyleSheet.create({
  
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },

    image: {
        flex: 1,
        width: 350,
        height: null,
        resizeMode: 'contain',
        marginBottom:-240,   
    },
    image2: {
        flex: 4,
        width: null,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 130
        
    },
    button1: {
     backgroundColor: "#e627bc",
     paddingVertical: 10,
     paddingHorizontal: 50,
     borderRadius: 30,
     width: 250,
     textAlign: "center",
     marginTop: 400,
     position: "absolute",
     right: 50
    },
    button2: {
        backgroundColor: "#18de77",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 30,
        width: 250,
        textAlign: "center",
        marginTop: 480,
        position: "absolute",
        right: 50
       },
       button3: {
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 30,
        width: 250,
        textAlign: "center",
        marginTop: 560,
        position: "absolute",
        right: 50
       },
  });