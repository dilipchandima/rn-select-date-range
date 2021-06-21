import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {DateRangePicker} from 'rn-date-range-picker';
// import DatePicker from './DatePicker/DatePicker';

const App = () => {
  return (
    <SafeAreaView>
      {/* <DatePicker /> */}
      <DateRangePicker />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
