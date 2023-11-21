import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


function Episodedetails(props) {

const episodesArray = props.route.params.episodedata

const clickedepisodeId = props.route.params.episodeid

const selectedEpisode = episodesArray.find(episode => episode.id === clickedepisodeId);


if (!selectedEpisode) {
    return (
      <View>
        <Text>Episode not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Here are the details for Rick and morty episode {selectedEpisode.id}</Text>
      <Text>Name: {selectedEpisode.name}</Text>
      <Text>Air date: {selectedEpisode.air_date}</Text>
      <Text>Episode: {selectedEpisode.episode}</Text>
    </View>
  );
};
    
export default Episodedetails 


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
   });

