import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
// import {DateRangePicker} from 'rn-date-range-picker';
import DateRangePicker from './DatePicker/DatePicker';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DateRangePicker />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
});

export default App;
