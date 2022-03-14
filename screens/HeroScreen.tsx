import * as React from 'react';
import { StyleSheet, Image, Button, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View} from '../components/Themed';import { Dimensions } from "react-native";
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
import { Hero_Data } from '../types';
import { RootStackScreenProps } from '../types';


export default function HeroScreen({ route, navigation } : RootStackScreenProps<'HeroScreen'> ) {


  const [images, setImages] = React.useState(route.params.HeroInfo.image_URL); 

  React.useEffect(() => {
    setImages(route.params.HeroInfo.image_URL); 
    console.log("Trigeger")
  }, [route.params.HeroInfo])


  const dataPassed = (
    <>
    <View > 
      <Text style={styles.title}>{route.params.HeroInfo.name}</Text>
      <Image style={styles.logo} source={{uri: images[0]}} />
      <View style={styles.roles}> 
        <Text style={styles.text}> {route.params.HeroInfo.roles[0]} </Text>
        <Text style={styles.text}> {route.params.HeroInfo.roles[1]} </Text>
        <Text style={styles.text}> {route.params.HeroInfo.roles[2]} </Text>
      </View>
    </View>

  <ScrollView > 
    <View style={{paddingBottom: 300}}>

      <View style={styles.abilities}>
        <Text style={styles.section_title}> Abilities: </Text>

        {route.params.HeroInfo.abilities.map((ability, i) => {
          return (
           <View key={i*33333}> 

             <View style={{flexDirection: 'row'}}> 
              <Image style={styles.abil_logo} source={{uri: images[i+1]}} />
              <Text style={{fontSize: 25}}> {ability[0]} </Text>
             </View>
          
             <View style={{paddingLeft: 15}}>
                {ability[1].map((text, i) => {
                  return <Text key ={i*222} style={{fontStyle: 'italic', fontSize: 15}}> {text} </Text>
                })}
              </View>
              
           </View>
         )
        })}
      </View>

    <View style={styles.lvl}>
    <Text style={styles.section_title}>Level Abilities: </Text>

    <View style={styles.center_text}> 
      {route.params.HeroInfo.lvl.map((lvl, i) => {
        return (
          <Text key ={i*2222}>
            {lvl.map((level: String, i) => {
              return <Text key={i*22} style={{fontSize: 10}}> {level} </Text>
            })}
          </Text>
        );
      })}
    </View>

      </View>

      <View style={styles.stats} >
        <Text style={styles.section_title}> Hero Stats: </Text>
        <View style={styles.center_text}>
          {route.params.HeroInfo.stats.map((stats, i) => {
           return (
               <Text key={i*92*2}>
               {stats.map((stat, i) => {
                     if(stat == "") {return}
                   return <Text key={i*2}> {stat} </Text>
                })}
               </Text>
            )
          })}
        </View>
      </View>

      <View style={styles.lore} >
        <Text style={styles.section_title}>Lore: </Text>
        <Text style={styles.text}> {route.params.HeroInfo.Lore} </Text>
      </View>
      
    </View>
  </ScrollView>
  </>
  )

  console.log(images); 

  return (
    <View >
      {route.params.HeroInfo ? dataPassed : <Text> No heroes to display! </Text>}

            
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  buttons: {
    flex: 1, 
    flexDirection: 'row', 
    alignSelf: 'center'
  },
  logo: {
    height: 80, 
    width: 120,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid', 
    borderRadius: 10
  },
  abil_logo: {
    height: 60, 
    width: 100,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid', 
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section_title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#AB2E17", 
    paddingBottom: 20
  },
  sub_title: {
    fontSize: 12, 

  },
  lvl: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  center_text: {
    alignSelf: 'center'
  },
  stats: {
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 15
  },
  abilities: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  roles: {
    flex: 1, 
    flexDirection: 'row',
    alignSelf: 'center'
  },
  lore: {
    flexDirection: 'column'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
