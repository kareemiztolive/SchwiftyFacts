import React from 'react';
import { StyleSheet, Text, ScrollView, Image,TouchableOpacity } from 'react-native';

function Jerry(props) {

const characters = props.route.params.data

const jerry = characters[4]

return (

<ScrollView contentContainerStyle={styles.container}>
<Image source={{uri: jerry.image}}style={styles.image1}/>

<TouchableOpacity style={styles.button1}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Character Biography</Text>
</TouchableOpacity>
 <Text style={styles.text1}>
 Gerald "Jerry" Smith is one of the main characters of the American animated television series Rick and Morty and resulting franchise. Created by Justin Roiland and Dan Harmon.He is the son-in-law of the scientist Rick Sanchez, father of Morty and Summer Smith and husband of Beth Smith.
 </Text>
 <TouchableOpacity style={styles.button2}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Gallery</Text>
</TouchableOpacity>

<Image source={{uri: "https://upload.wikimedia.org/wikipedia/en/a/a6/Jerry_Smith_%28Rick_and_Morty%29.png" }}style={styles.image3}/>
<Image source={{uri: "https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111"}} style={styles.image4} />
<Image source={{uri: "https://static.wikia.nocookie.net/ricksanchez/images/f/f6/Jerry_Smith.jpg/revision/latest?cb=20160609043244" }}style={styles.image5}/>
<Image source={{uri: "https://www.looper.com/img/gallery/the-wild-rick-and-morty-theory-that-explains-everything-about-jerry/l-intro-1638241022.jpg" }}style={styles.image6}/>















 </ScrollView>

    );



}



export default Jerry

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
    borderRadius: 140,
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
