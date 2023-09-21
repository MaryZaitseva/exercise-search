import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { clearData } from '../../store/search';
import { valueToDisplay } from '../../utils';
import { RootStackParamList } from '../../App';
import IExercise from '../../interfaces/IExercise';
import styles from './styles';

export default function SearchResult({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SearchResult'>;
}) {
  const { data, error, loading } = useSelector((state: any) => state.search);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          dispatch(clearData());
        }}
        style={styles.backButton}>
        <Image
          source={require('../../assets/icons/arrow.png')}
          style={styles.backIcon}
        />
        <Text style={styles.backText}>Back to search</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {data?.length ? (
        <ScrollView style={styles.scrollView}>
          {data.map((item: IExercise, i: number) => (
            <View key={i} style={[styles.exerciseItem]}>
              <Text style={styles.exerciseName}>{item.name}</Text>

              <View style={styles.propertyView}>
                <Text style={styles.propertyTitle}>Type: </Text>
                <Text style={styles.propertyValue}>
                  {valueToDisplay(item.type)}
                </Text>
              </View>
              <View style={styles.propertyView}>
                <Text style={styles.propertyTitle}>Muscle: </Text>
                <Text style={styles.propertyValue}>
                  {valueToDisplay(item.muscle)}
                </Text>
              </View>
              <View style={styles.propertyView}>
                <Text style={styles.propertyTitle}>Difficulty: </Text>
                <Text style={styles.propertyValue}>
                  {valueToDisplay(item.difficulty)}
                </Text>
              </View>
              <View style={styles.propertyView}>
                <Text style={styles.propertyTitle}>Equipment: </Text>
                <Text style={styles.propertyValue}>
                  {valueToDisplay(item.equipment)}
                </Text>
              </View>

              <Text style={styles.instructions}>{item.instructions}</Text>
            </View>
          ))}
        </ScrollView>
      ) : loading ? null : (
        <Text style={styles.noResult}>No result, try a different search</Text>
      )}
    </SafeAreaView>
  );
}
