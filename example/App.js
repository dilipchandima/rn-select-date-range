import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {DateRangePicker} from 'rn-date-range-picker';

const App = () => {
  const [selectedRange, setRange] = useState({});
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DateRangePicker
          onSelectDateRange={range => {
            setRange(range);
          }}
          responseFormat="YYYY-MM-DD"
        />
        <Text>first date: {selectedRange.firstDate}</Text>
        <Text>second date: {selectedRange.secondDate}</Text>
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
