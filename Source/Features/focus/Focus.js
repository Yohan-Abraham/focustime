import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../component/RoundedButton';
import { fontSizes, spacing } from "../../utils/sizes"; 
import { colors } from "../../utils/colors"; 

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null)
  return (
    <View style={styles.container}>
      <View stlye={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setTmpItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(tmpItem)
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontweight: 'bold',
    fontsize: fontSizes.lg,
  },
  inputcontainer: {
    paddingtop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
