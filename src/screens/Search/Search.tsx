import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import DropdownComponent from '../../components/Dropdown';
import {
  EXERCISE_DIFFICULTY,
  EXERCISE_TYPES,
  EXERCISE_MUSCLES,
} from '../../constants';
import { fetchData } from '../../store/search';
import { AppDispatch } from '../../store';
import { RootStackParamList } from '../../App';
import styles from './styles';

export default function Search({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [type, setType] = useState<string | null>(null);
  const [muscle, setMuscle] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const isSearchActive = name || type || muscle || difficulty;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Exercise search</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
          placeholder="Search by name, for example: Barbell Curl"
        />

        <DropdownComponent
          label="Exercise type"
          options={EXERCISE_TYPES}
          selectedValue={type}
          onValueChange={setType}
        />

        <DropdownComponent
          label="Muscle"
          options={EXERCISE_MUSCLES}
          selectedValue={muscle}
          onValueChange={setMuscle}
        />

        <Text style={styles.label}>Difficulty</Text>
        <View style={styles.difficultyContainer}>
          {EXERCISE_DIFFICULTY.map(item => (
            <TouchableOpacity
              onPress={() =>
                setDifficulty(difficulty === item.value ? null : item.value)
              }
              key={item.value}
              style={[
                styles.difficultyItem,
                difficulty === item.value && styles.difficultyActive,
                {
                  backgroundColor: item.color,
                },
              ]}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          disabled={!isSearchActive}
          style={[
            styles.searchButton,
            !isSearchActive && styles.buttonInactive,
          ]}
          onPress={() => {
            dispatch(
              fetchData({
                name,
                type,
                muscle,
                difficulty,
              }),
            );
            navigation.navigate('SearchResult');
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
