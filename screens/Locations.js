import React, {useState, useEffect}  from 'react';
import { StyleSheet,  ScrollView, Text, View, TouchableOpacity } from 'react-native';


function Locations() {

const [locations, setLocations] = useState([])

const getLocations = () => {
  fetch('https://rickandmortyapi.com/api/location')
  .then(res => res.json())
  .then(res => setLocations(res));  
}


useEffect(() => {
  getLocations()
  },[]); 

  const locations1 = locations.results

  console.log(locations1)


    return (
     <ScrollView>
     <Text style={styles.header}> Locations </Text>
     {locations1.map((location) => {
        return (
          <View>
            <Text style={styles.text1}>Dimension</Text>
            <Text style={styles.text2}>Location</Text>
            <Text style={styles.text3}>Type</Text>
            <TouchableOpacity style={styles.button1}>
              <Text style={{fontSize:16, color:"white",fontWeight:"bold"}}>{location.dimension}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={{fontSize:16, color:"white",fontWeight:"bold"}}>{location.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <Text style={{fontSize:16, color:"white",fontWeight:"bold"}}>{location.type}</Text>
            </TouchableOpacity>

          </View>
        );
      })}
     </ScrollView>
    );
  }


  export default Locations

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
      // color: "#e627bc"
      
    },
    text2: {
      paddingRight: 120,
      paddingLeft: 20,
      paddingBottom: 10,
      fontSize: 28,
      marginTop: 8,
      marginLeft: -15,
      fontWeight: "700",
      // color: "#18de77"
       
    },
    text3: {
      paddingRight: 120,
      paddingLeft: 20,
      paddingBottom: 10,
      fontSize: 28,
      marginTop: 8,
      marginLeft: -15,
      fontWeight: "700",
      // color: "#18de77"
   
    },
    button1: {
      backgroundColor: "blue",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      width: 200,
      marginTop:10,
      position: "absolute",
      right: 10,
     },
     button2: {
      backgroundColor: "#18de77",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      width: 200,
      marginTop:60,
      position: "absolute",
      right: 10,
     },
     button3: {
      backgroundColor: "#e627bc",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      width: 200,
      marginTop:115,
      position: "absolute",
      right: 10,
     },



  })