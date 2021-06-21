# rnv-date-range-picker

A simple React Native date range picker component

---

### Installing:

```
npm install rnv-date-range-picker
yarn add rnv-date-range-picker
```

![screen shot](https://raw.githubusercontent.com/dilipchandima/rnv-date-range-picker/master/screen.png)

---

## Sample React Native Code

```js
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { DateRangePicker } from "rn-date-range-picker";

const App = () => {
  const [selectedRange, setRange] = useState({});
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DateRangePicker
          onSelectDateRange={(range) => {
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
```
