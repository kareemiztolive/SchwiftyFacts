import React from 'react';
import { StyleSheet, Text, ScrollView, Image,TouchableOpacity } from 'react-native';

function Beth(props) {

const characters = props.route.params.data

const beth = characters[3]

return (

<ScrollView contentContainerStyle={styles.container}>
<Image source={{uri: beth.image}}style={styles.image1}/>
<TouchableOpacity style={styles.button1}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Character Biography</Text>
</TouchableOpacity>
 <Text style={styles.text1}>
 Bethany "Beth" Smith (née Sanchez) is one of the main characters of the American animated television series Rick and Morty. Created by Justin Roiland and Dan Harmon, Beth is a veterinarian who specializes in horse surgery. 
 </Text>
 <TouchableOpacity style={styles.button2}>
    <Text style={{fontSize:30, color:"white",fontWeight:"bold"}}>Gallery</Text>
</TouchableOpacity>

<Image source={{uri: "https://upload.wikimedia.org/wikipedia/en/5/58/Beth_Smith.png" }}style={styles.image3}/>
<Image source={{uri: "https://static.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest?cb=20191122063320"}} style={styles.image4} />
<Image source={{uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beth-in-rick-and-morty-1589538798.png?crop=0.7087087087087087xw:1xh;center,top&resize=1200:*" }}style={styles.image5}/>
<Image source={{uri: "https://static.wikia.nocookie.net/p__/images/5/58/Beth_Smith.png/revision/latest?cb=20160610044942&path-prefix=protagonist" }}style={styles.image6}/>




 </ScrollView>

    );



}



export default Beth

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
