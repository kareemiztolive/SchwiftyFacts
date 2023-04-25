import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function Episodes() {
   
const [episodes, setEpisodes] = useState([])

const getEpisodes = () => {
      fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(res => setEpisodes(res));   
  
  }
  
  useEffect(() => {
    getEpisodes()
    },[]); 
  
  const episodes1 = episodes

  const episodelist = episodes1.results

  console.log(episodelist)
  
  return (
     <ScrollView >
        <Text style={styles.header}>Episodes</Text>
        {episodelist.map((episode) => {
        return (
          <View>
            <Text style={styles.text1}>{episode.episode}</Text>
            <Text style={styles.text2}>{episode.name}</Text>
            <Text style={styles.text3}>Episode</Text>
            <TouchableOpacity style={styles.button1}>
              <Text style={{fontSize:17, color:"white",fontWeight:"bold"}}>{episode.id}</Text>
            </TouchableOpacity>

          </View>
        );
      })}
     </ScrollView>
    );
  }



  export default Episodes

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "85%",
      paddingRight: 5,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingBottom: 50
     
    },
    header: {
      left: 20,
      fontSize: 40,
      top: 10,
      fontWeight: "700",
      paddingBottom: 20
     
    },
    text1: {
      padding: 5,
      fontSize: 28,
      marginTop: 5,
      borderTopWidth: 0.5,
      fontWeight: "700",
      color: "#e627bc"
      
    },
    text2: {
      paddingRight: 120,
      paddingLeft: 20,
      paddingBottom: 10,
      fontSize: 19,
      marginTop: 8,
      marginLeft: -15,
      fontWeight: "700",
      color: "#18de77"
       
    },
    text3: {
      padding: 15,
      fontSize: 20,
      marginTop: -6,
      paddingLeft: 245,
      fontWeight: "700",
      position: "absolute"

   
    },
    button1: {
      backgroundColor: "blue",
      paddingVertical: 10,
      paddingHorizontal: 50,
      borderRadius: 60,
      width: 120,
      textAlign: "center",
      marginTop:50,
      position: "absolute",
      right: 10
     },
  });