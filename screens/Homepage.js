import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function Homepage() {
    return (
    <View >  
      <Image source={require("../images/schwiftyfactstitle2.png")} style={styles.image}/>
       <Image source={require("../images/rickandmortyportal2.png")} style={styles.image2}/>
       <TouchableOpacity style={styles.button1}>
          <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Characters</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button2}>
          <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Episodes</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button3}>
          <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Locations</Text>
       </TouchableOpacity>
       </View>
    );
  }


  export default Homepage

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 350,
        height: null,
        resizeMode: 'contain',
        marginBottom:-140
        
    },
    image2: {
        flex: 2,
        width: null,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 250
        
    },
    button1: {
     backgroundColor: "#e627bc",
     paddingVertical: 10,
     paddingHorizontal: 50,
     borderRadius: 30,
     width: 250,
     textAlign: "center",
     marginTop: 430,
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
        marginTop: 510,
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
        marginTop: 590,
        position: "absolute",
        right: 50
       },
       button4: {
        backgroundColor: "#4287f5",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
       },
  });