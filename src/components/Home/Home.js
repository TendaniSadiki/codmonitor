import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';

import { FaShare } from 'react-icons/fa';


export default function App() {
  const [showResults, setShowResults] = useState(false)
  const [data, setData] = useState(null)
  
  const fetchUsers = () => {
    fetch(`https://www.callofduty.com/api/papi-client/leaderboards/v2/title/mw/platform/psn/time/alltime/type/core/mode/career/page/1 `)
    .then(response => response.json())
    .then((data) => setData(data))

    if(data === null) { 
      setShowResults(false)
    }
    else if( data !== null) {
      setShowResults(true)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [data])

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call of Duty: MW Leaderboard</Text>
      {
        showResults ? 
                        <FlatList
                        data={data.data.entries}
                        renderItem={({item}) => <View style={styles.itemContainer}
                        keyExtractor={({item}) =>  item.rank}
                        numColumns={5}>


                          
                            <TouchableOpacity  >
                            <Text style={{ margin: 'auto', padding: 10, color:'#f6f5f3'}}>Player: {item.rank}</Text>
                           <Text style={styles.items}>Username: {item.username}</Text>
                           <Text style={styles.items}>Level: {item.values.level}</Text>
                           <Text style={styles.items}>Deaths: {item.values.deaths}</Text>
                           <Text style={styles.items}>Kills: {item.values.kills}</Text>
                           <Text style={styles.items}>Wins: {item.values.wins}</Text>
                           <Text style={styles.items}>Losses: {item.values.losses}</Text>
                           <Text style={styles.items}>Ratings: {item.rating}</Text>
                           <Text style={styles.items}>Time Played: {item.values.timePlayed}</Text>
                           <Text style={styles.items}>Hits: {item.values.hits}</Text>
                           <Text style={styles.items}>Head Shot: {item.values.headshots}</Text>
                           <Text style={styles.items}>Misses: {item.values.misses}</Text>
                           <Text  style={styles.items}>Share <FaShare/></Text>
                           
                            </TouchableOpacity>
                        </View>
                      }/> : 
                            <Text>Nothing to show</Text>
      }
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52ab98',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  title: {
    paddingVertical: 40,
    borderRadius: 10,
    fontSize: 24,
    backgroundColor: "#f16775",
    color: "#f6f5f3",
    padding:10,
    margin:25
  },
  itemContainer: {
    flex:1, 
    flexDirection: 'row', 
    width:Dimensions.get("window").width-10,
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 5,
    backgroundColor: "#16123f",
    borderRadius: 10,
    borderBottomColor:"black"

    
  },
  items: {
    flex:1,
    padding: 10,
    flexDirection: 'row',
    color: "#f6f5f3",
  },

});
