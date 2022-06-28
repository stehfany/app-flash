import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

 import foto1 from "./src/eco-light-off.png"
 import foto2 from "./src/eco-light.png"
 import foto3 from './src/logo-dio-white.png'
 import foto4 from "./src/logo-dio.png"

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
 
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
 
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });


    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChange}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={
            toggle ? foto1 : foto2}
        />
        <Image
          style={toggle ? style.dio : style.dioblack}
          source={
            toggle ? foto3 : foto4 }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
    tintColor: 'black',
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width:  200,
    height: 200,
    tintColor: 'white',
  },
  dio:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    tintColor: 'black',
    height: 200,
  },
  dioblack:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
 
    height: 200,
  }
});