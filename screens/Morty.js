import React from 'react';
import { StyleSheet, Text, ScrollView, Image,TouchableOpacity } from 'react-native';

function Morty(props) {

const characters = props.route.params.data

const morty = characters[1]

return (

<ScrollView  >
<Image source={{uri: morty.image}}style={styles.image1}/>
<TouchableOpacity style={styles.button1}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Character Biography</Text>
</TouchableOpacity>
 <Text style={styles.text1}>
 Mortimer Chauncey "Morty" Smith, Sr is one of the eponymous characters from the American animated television series Rick and Morty. Created by Justin Roiland and Dan Harmon, Morty is an anxious 14-year-old, Known for his awkward, anxious, second-guessing, doubtful personality, and low sense of self-esteem; the character has been well-received.
 </Text>
 <TouchableOpacity style={styles.button2}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Gallery</Text>
</TouchableOpacity>

<Image source={{uri: "https://static.wikia.nocookie.net/poohadventures/images/c/c3/Morty_Smith.png/revision/latest?cb=20220105163732" }}style={styles.image3}/>
<Image source={{uri: "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-morty-projectacademy-medium-17.png"}} style={styles.image4} />
<Image source={{uri: "https://static.wikia.nocookie.net/characterprofile/images/4/44/Awgeez.png/revision/latest?cb=20180111122528" }}style={styles.image5}/>
<Image source={{uri: "https://vignette.wikia.nocookie.net/rickandmorty/images/c/ce/MortyTransparent.png/revision/latest?cb=20160909031949" }}style={styles.image6}/>




 </ScrollView>

    );



}



export default Morty

const styles = StyleSheet.create({
header: {
    left: 20,
    fontSize: 40,
    top: 40,
    fontWeight: "700",
  }, 
  image1: {
    flex: 1,
    width: 270,
    height: 270,
    resizeMode: 'contain',
    marginBottom: 350,
    marginTop: 20,
    borderRadius: 160,
    marginLeft: 50,
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
    marginTop: 340,
    left: 32,
   },
   text1: {
    fontSize: 18,
    fontWeight: "500",
//    paddingBottom: 50
   marginTop: -160,
   },
   button2: {
    backgroundColor: "#dd61ff",
    // #b36df7
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 50,
    width: 300,
    textAlign: "center",
    marginTop: 70,
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
