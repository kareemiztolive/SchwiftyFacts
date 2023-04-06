import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


function Episodes() {
   
const [episodes, setEpisodes] = useState([])

const getEpisodes= () => {
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
      fontSize: 30,
      marginTop: 5,
      borderTopWidth: 0.5,
      fontWeight: "700",
      color: "#e627bc"
      
    },
    text2: {
      padding: 5,
      fontSize: 26,
      marginTop: 8,
      fontWeight: "700",
      color: "#18de77"
       
    }
  });