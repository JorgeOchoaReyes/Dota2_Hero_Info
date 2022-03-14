import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '../Themed';

type Item = {
    name?: string;
    image?: string; 
    primaryAtrribute?: string; 
    lore?: string; 
    attributes?: Object;
}

const ItemCard: React.FC<Item> = ({name, image}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {name} </Text> 
            <Image style={styles.logo} source={require(`../../assets/images/${image}`)} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  },
  logo: {
    height: 100, 
    width: 100
  },
});

export default ItemCard; 
