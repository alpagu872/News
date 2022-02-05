import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  View
} from 'react-native';

import NewsCard from './components/NewsCard'
import news_data from './news_data.json'


function App() {
  return (
    <SafeAreaView>
      <View><Text>
        <FlatList
          data={news_data}
          renderItem={({ item }) => <NewsCard news={item} />} />
      </Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },



})
export default App;
