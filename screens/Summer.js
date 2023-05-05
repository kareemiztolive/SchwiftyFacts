import React from 'react';
import { StyleSheet, Text, ScrollView, Image,TouchableOpacity } from 'react-native';

function Summer(props) {

const characters = props.route.params.data

const summer = characters[2]

return (

<ScrollView contentContainerStyle={styles.container}>
<Image source={{uri: summer.image}}style={styles.image1}/>
<TouchableOpacity style={styles.button1}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Character Biography</Text>
</TouchableOpacity>
 <Text style={styles.text1}>
 Summer Smith is one of the main characters of the American animated television series Rick and Morty. Created by Justin Roiland and Dan Harmon and voiced by Spencer Grammer, Summer is a conventional and often superficial 17-year-old teenager, who is obsessed with improving her social status among her peers. Known for her smart and humorous personality and for her high dexterity, the character has been well-received.
 </Text>
 <TouchableOpacity style={styles.button2}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Gallery</Text>
</TouchableOpacity>

<Image source={{uri: "https://upload.wikimedia.org/wikipedia/en/9/9f/Summer_Smith.png" }}style={styles.image3}/>
<Image source={{uri: "https://static.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest?cb=20160919183158"}} style={styles.image4} />
<Image source={{uri: "https://decider.com/wp-content/uploads/2021/08/rick-and-morty-9.jpg?quality=75&strip=all" }}style={styles.image5}/>
<Image source={{uri: "https://cdn.costumewall.com/wp-content/uploads/2017/10/summer-smith.jpg" }}style={styles.image6}/>











 </ScrollView>

    );



}



export default Summer

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
