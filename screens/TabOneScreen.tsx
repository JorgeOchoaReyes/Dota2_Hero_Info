import * as React from 'react';
import { StyleSheet, TouchableOpacity, VirtualizedList, FlatList } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps, Hero_Data } from '../types';
import Hero from '../components/Cards/hero'; 
import HeroData from '../assets/characters/hero.json';
import { Button } from 'react-native-paper';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const renderItem = ({item}: {item:Hero_Data[]}) => (
    <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>

      {item[0] ?  
      <TouchableOpacity style={{padding: 2}} onPress={() => navigation.navigate("HeroScreen", {HeroInfo: item[0]}) }>
        <Hero name={item[0].name} image_URL={item[0].image_URL}  /> 
      </TouchableOpacity>
      : null
      }

      {item[1] ?
      <TouchableOpacity style={{padding: 2}} onPress={() => navigation.navigate("HeroScreen", {HeroInfo: item[1]}) }>
        <Hero name={item[1].name} image_URL={item[1].image_URL}  /> 
      </TouchableOpacity>
      : null
      }

      {item[2] ? 
      <TouchableOpacity style={{padding: 2}} onPress={() => navigation.navigate("HeroScreen", {HeroInfo: item[2]}) }>
        <Hero name={item[2].name} image_URL={item[2].image_URL}  /> 
      </TouchableOpacity>
      : null
      }
      
    </View>
  ); 
  return (

    <View style={styles.container}>
          {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            <Hero name={HeroData[2].name} image_URL={HeroData[2].image_URL}  /> 
          </Button> */}
          <VirtualizedList
            data={HeroData} 
            renderItem={renderItem} 
            getItem={(data, index) => {
                let items = []
                for (let i = 0; i < 3; i++) {
                  const item = data[index * 3 + i]
                  items.push(item)
                }
                return items;
              }
            }
            getItemCount={(data) => {return (data.length) }}
          />         
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap", 

  },
  inner: {
    flex: 1,
    flexWrap: "wrap", 
    alignContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
