import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Dropdown from 'react-native-input-select';

const styles = StyleSheet.create({
  dropdownStyle: {
    minHeight: 0,
  },
  labelStyle: {
    marginBottom: 6,
    fontSize: 14,
    color: 'black',
  },
  checkbox: {
    height: 35,
    opacity: 0,
    width: 0,
  },
  dropdownIconStyle: {
    right: 50,
  },
  touchable: {
    width: 50,
    height: 52,
  },
  closeContainer: {
    position: 'absolute',
    bottom: 22,
    right: 0,
    width: 50,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    height: 16,
    width: 16,
  },
});

export default function DropdownComponent({
  label,
  options,
  selectedValue,
  onValueChange,
}: {
  label: string;
  options: { label: string; value: string }[];
  selectedValue: string | null;
  onValueChange: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <View>
      <Dropdown
        label={label}
        placeholder="Select an option"
        options={options}
        selectedValue={selectedValue}
        onValueChange={(val: string) => onValueChange(val)}
        dropdownStyle={styles.dropdownStyle}
        labelStyle={styles.labelStyle}
        checkboxComponent={<View />}
        checkboxComponentStyles={{
          checkboxStyle: styles.checkbox,
        }}
        dropdownIconStyle={styles.dropdownIconStyle}
      />
      <TouchableWithoutFeedback
        onPress={() => onValueChange(null)}
        style={styles.touchable}>
        <View style={styles.closeContainer}>
          <Image
            source={require('../assets/icons/close.png')}
            style={styles.closeIcon}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
