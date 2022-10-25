import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './Source/Features/focus/Focus';
import { Timer } from './Source/Features/timer/Timer'; 
import { colors } from './Source/utils/colors'; 
import { spacing } from './Source/utils/sizes';
import { FocusHistory } from './Source/Features/FocusHistory'; 

 
export default function App() {
  const [focusSubject, setFocusSubject] = useState();


  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject= {focusSubject} />
      ) : (
        <>
        <Focus addSubject={setFocusSubject} />

          </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ?
    spacing.md : spacing.lg, 
    backgroundColor: colors.darkBlue,
  },
});
