import React from 'react';
import { StyleSheet, Text, ScrollView, Image,TouchableOpacity,View } from 'react-native';



function Rick(props) {


const characters = props.route.params.data

const rick = characters[0]


return (

 <ScrollView  >
<Image source={{uri: rick.image}}style={styles.image1}/>
<TouchableOpacity style={styles.button1}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Character Biography</Text>
</TouchableOpacity>
 <Text style={styles.text1}>
 Rick Sanchez from Earth (Dimension C-137)Rick Sanchez is one of the two eponymous characters 
 and the main protagonist from the Adult Swim animated television series Rick and Morty. 
 He is suggessted throughout the entire series to be considered the smartest person in the universe. 
 </Text>
 <TouchableOpacity style={styles.button2}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Gallery</Text>
</TouchableOpacity>

<Image source={{uri: "https://static.wikia.nocookie.net/joke-battles/images/d/dd/Rick.png/revision/latest?cb=20170225194355" }}style={styles.image3}/>
<Image source={{uri: "https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png"}} style={styles.image4} />
<Image source={{uri: "https://static.wikia.nocookie.net/poohadventures/images/2/2a/Rick_Sanchez_Full_Body.png/revision/latest?cb=20220105163338" }}style={styles.image5}/>
<Image source={{uri: "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1572526429048-CUZHOPG0NT5E59FZS3AR/Art+of+Rick+and+Morty+%28A2%29+-+1.png" }}style={styles.image6}/>




 
 </ScrollView>

 

    );

}



export default Rick

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'stretch',
        // justifyContent: 'space-between',

      },
    header: {
        left: 20,
        fontSize: 40,
        top: 40,
        fontWeight: "700",
      }, 
      image1: {
        flex: 1,
        width: 230,
        height: 330,
        resizeMode: 'contain',
        marginBottom: 350,
        borderRadius: 280,
        marginLeft: 60,
    },
    button1: {
        backgroundColor: "#4741fa",
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 50,
        width: 300,
        textAlign: "center",
        position: "absolute",
        right: 55,
        marginTop: 310,
        left: 32,
       },
       text1: {
        fontSize: 18,
        fontWeight: "500",
    //    paddingBottom: 50
       marginTop: -260,
       },
       button2: {
        backgroundColor: "#dd61ff",
        // #b36df7
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 50,
        width: 300,
        textAlign: "center",
        marginTop: 45,
        // position: "absolute",
        left: 30,
       marginBottom: 50
       }, 
       image3: {
        flex: 1,
        width: 250,
        height: 520,
        resizeMode: 'contain',
        marginBottom: 50,
        borderRadius: 50,
        marginLeft: 60,
    },
    image4: {
        flex: 1,
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginBottom: 50,
        borderRadius: 50,
        marginLeft: 10,
    },
    image5: {
        flex: 1,
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginBottom: 50,
        borderRadius: 50,
        marginLeft: -60,
    },
    image6: {
        flex: 1,
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginBottom: 50,
        borderRadius: 50,
        marginLeft: -20,
    },
  });
