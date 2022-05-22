import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';






function Characters(props) {

const navigation = useNavigation();

const characters = props.route.params.data

  console.log(characters)

  
    return (
       <ScrollView style={styles.container}>
          <Text style={styles.header}>Characters</Text>

          <View style={styles.card}>
          <Image source={{uri: characters[0].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[0].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[0].location.name}</Text>
          <TouchableOpacity  style={styles.button1}  onPress={() => navigation.navigate('Rick', { data: characters })} >
          <Text style={{fontSize:25, color:"white",fontWeight:"bold"}}>Learn More</Text>
          </TouchableOpacity>
          </View>
        
        
          <View style={styles.card}>
          <Image source={{uri: characters[1].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[1].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[1].location.name}</Text>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Morty', { data: characters })}> 
          <Text style={{fontSize:25, color:"white",fontWeight:"bold"}}>Learn More</Text>
          </TouchableOpacity>
          </View>
         
         
          <View style={styles.card}>
          <Image source={{uri: characters[2].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[2].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[2].location.name}</Text>
          <TouchableOpacity style={styles.button1}  onPress={() => navigation.navigate('Summer', { data: characters })}>
          <Text style={{fontSize:25, color:"white",fontWeight:"bold"}}>Learn More</Text>
          </TouchableOpacity>
          </View>
       
          <View style={styles.card}>
          <Image source={{uri: characters[3].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[3].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[3].location.name}</Text>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Beth', { data: characters })}> 
          <Text style={{fontSize:25, color:"white",fontWeight:"bold"}}>Learn More</Text>
          </TouchableOpacity>
          </View>
         
      
          <View style={styles.card}>
          <Image source={{uri: characters[4].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[4].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[4].location.name}</Text>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Jerry', { data: characters })}> 
          <Text style={{fontSize:25, color:"white",fontWeight:"bold"}}>Learn More</Text>
          </TouchableOpacity>
          </View>
        

          </ScrollView>
    );
  }


  export default Characters

  const styles = StyleSheet.create({
    container:{
      width: "100%",
      height: "85%",
      // paddingRight: 5,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingBottom: 50
    },
    header: {
      left: 20,
      fontSize: 40,
      top: 40,
      fontWeight: "700",
    },
    column: {
      flex: 1,
      width: "100%",
      paddingRight: 100,
      paddingBottom: 500  
    },
    card: {
      borderColor: "blue",
      borderRadius: 5,
      borderWidth: 1,
      height: 530,
      width: 300,
      padding: 10,
      marginLeft: 30,
      top: 60,
      marginBottom: 50

    },
    cardimage: {
        height: 300,
        width: 300,
        left: -10,
        top: -10,
        // borderRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
      },
      title:{
        color: "black",
        fontSize: 40,
        fontWeight: "700",
        paddingBottom: 10,
        position: "absolute",
        top: 310,
      },
      title2:{
        color: "black",
        fontSize: 20,
        position: "absolute",
        top: 360
      },
      title3:{
        color: "black",
        fontSize: 20,
        fontWeight: "700",
        position: "absolute",
        top: 390
      },  
      button1: {
        backgroundColor: "#e6209d",
        // backgroundColor: "#e627bc",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 30,
        width: 250,
        textAlign: "center",
        marginTop: 450,
        position: "absolute",
        right: 30
      },
  });