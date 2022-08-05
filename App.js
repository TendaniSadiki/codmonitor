import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';


// or alternatively





export default function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true)
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
   useEffect(()=>{
    fetch("https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/iShot%2321899/profile/type/mp", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  },[])

  return (
    <View style={styles.container}>
   
    <StatusBar style="auto" />
    {
        loading ? <Text>Loading ...</Text>:
        data.map((post)=>(
          <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.title}</Text>
            <Text style={{fontSize:15, color:'blue'}} >{post.body}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
