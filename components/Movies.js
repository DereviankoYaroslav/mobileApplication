import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const Movies = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/randomword', {headers: {'x-api-key':'1qEmhTfCUSiRTYntd8djqA==Ia7djkoKwNPtB498'}});
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
            <Text>
              {data.word}
            </Text>
      )}
      <Text onPress={getMovies}>New Word</Text>
    </View>
  );
};

export default Movies;