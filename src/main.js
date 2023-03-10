import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import Grafic from './grafic';

const Main = ({navigation}) => {
  const [Coin, setCoin] = useState(0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./image/backgrond.png')}
        style={styles.background}
      />
      <View style={styles.top}>
        <Image source={require('./image/cup.png')} style={styles.icon2} />
        <Image source={require('./image/sine.png')} style={styles.icon3} />
        <Image source={require('./image/msg.png')} style={styles.icon2} />
      </View>
      <Grafic
        value={Coin}
        color="#68ff8d"
        radius={100}
        strokeWidth={25}
        styles={styles.grafic}
      />

      <Text style={styles.coin}>ByPi₵ {Coin},00</Text>
      <TouchableOpacity
        onPress={() => {
          setCoin(Coin + 5);
        }}>
        <Image source={require('./image/logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <Text>ByPi-Coin Criptomoeda</Text>
      <View style={styles.food}>
        <TouchableOpacity
          style={styles.reset}
          onPress={() => {
            setCoin(0);
          }}>
          <Text style={styles.buttom}>Reset</Text>
        </TouchableOpacity>

        <Image source={require('./image/client.png')} style={styles.icon} />
        <Image source={require('./image/home.png')} style={styles.icon4} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 100,
    width: 83,
    height: 90,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 30,
  },
  icon2: {
    width: 30,
    height: 30,
  },
  icon3: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  icon4: {
    width: 30,
    height: 30,
    marginTop: 30,
    marginLeft: 10,
  },
  coin: {
    marginTop: -150,
    marginBottom: 30,
    textShadowColor: 'black',
    fontWeight: 'bold',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  reset: {
    marginRight: 100,
  },
  buttom: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: '#68ff8d',
    borderRadius: 10,
  },
  grafic: {
    marginTop: -250,
    marginBottom: 40,
  },
  top: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  food: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,
  },
});
export default Main;
