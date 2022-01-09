import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';



function Characters(props) {



  const characters = props.route.params.data

  console.log(characters)

  // let rick = characters.filter(character => character.name.includes('Rick'))

  let rick = props.route.params.data.filter(data => data.name.includes('Rick'))
  console.log(rick)


  const morty = characters.filter(character => character.name.includes('Morty'))
  // console.log(morty)

  const summer = characters.filter(character => character.name.includes('Summer'))
  // console.log(summer)

  const beth = characters.filter(character => character.name.includes('Beth'))
  // console.log(beth)

  const jerry = characters.filter(character => character.name.includes('Jerry'))
  // console.log(jerry)

    return (
       <ScrollView style={styles.container}>
          <Text style={styles.header}>Characters</Text>
         <TouchableOpacity>
          <View style={styles.card}>
          <Image source={{uri: characters[0].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[0].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[0].location.name}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.card}>
          <Image source={{uri: characters[1].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[1].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[1].location.name}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.card}>
          <Image source={{uri: characters[2].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[2].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[2].location.name}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.card}>
          <Image source={{uri: characters[3].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[3].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[3].location.name}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.card}>
          <Image source={{uri: characters[4].image}}style={styles.cardimage}/>
          <Text style={styles.title}>{characters[4].name}</Text>
          <Text style={styles.title2}>Last Location</Text>
          <Text style={styles.title3}>{characters[4].location.name}</Text>
          </View>
          </TouchableOpacity>

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
      // overflow: 'hidden',
      height: 450,
      width: 300,
      padding: 10,
      marginLeft: 30,
      // position: "absolute",
      top: 60,
      // left: 20
      marginBottom: 50

    },
    cardimage: {
        height: 300,
        width: 300,
        // position: "absolute",
        // top:80,
        left: -10,
        top: -10,
        borderRadius: 5,
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
      }   
  });