import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '../Themed';

type Hero = {
    name?: string;
    image_URL: string[]; 
}

const HeroCard: React.FC<Hero> = ({name, image_URL}) => {
  const uriImage = "https://firebasestorage.googleapis.com/v0/b/dota2-bab31.appspot.com/o/Abaddon_icon.png?alt=media&token=18adc081-96b5-4b96-a5ff-65151b00cca5"; 

  return (
      <View style={styles.container}>
          <Text style={styles.title}> {name} </Text> 
          <Image style={styles.logo} source={{uri: image_URL[0]}} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid', 
    height: 140, 
    width: 120,
    alignContent: 'center',
    justifyContent: 'center', 
    flexDirection: 'column',   alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700'
  },
  logo: {
    height: 50, 
    width: 118
  },
});

export default HeroCard; 
