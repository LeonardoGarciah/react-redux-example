import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../store';
import { decrement, increment } from '../store/stock/Stock.actions';

const Home = ()=>{ 
  const dispatch = useDispatch();
  const result = useSelector((state: RootState)=>state.stock)

  return(
    <View style={styles.container}>
      <Text>{result}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={()=>  dispatch(decrement())} style={styles.btn}>-</TouchableOpacity>
        <TouchableOpacity onPress={()=>  dispatch(increment())} style={styles.btn}>+</TouchableOpacity>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    display:"flex",
    flexDirection:"row",
    gap:10,
  },
  btn:{
    backgroundColor:"blue",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    width:40,
    height:40,
    color:"white",
    fontWeight:"bold",
  }
});

export default Home;