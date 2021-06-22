# rnv-date-range-picker

A simple React Native date range picker component

---

### Installing:

```
npm install rnv-date-range-picker
```

or

```
yarn add rnv-date-range-picker
```

### Screenshot

![screen gif](https://media.giphy.com/media/qvl9TQCBdaMh116zk1/giphy.gif)

![screen shot](https://raw.githubusercontent.com/dilipchandima/rnv-date-range-picker/master/screen.png)

# Prerequisites

CalendarPicker requires Moment JS.

```
npm install --save moment
```

# Example

```js
import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import DateRangePicker from "rnv-date-range-picker";

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
          maxDate={moment()}
          minDate={moment().subtract(100, "days")}
        />
        <View style={styles.container}>
          <Text>first date: {selectedRange.firstDate}</Text>
          <Text>second date: {selectedRange.secondDate}</Text>
        </View>
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

## CalendarPicker Props

| Prop                    | Type       | Description                                                                                                             |
| :---------------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------- |
| **`maxDate`**           | `Moment()` | Optional. If you need to pass Max Date user can select, set this prop as a moment date                                  |
| **`minDate`**           | `Moment()` | Optional. If you need to pass Min Date user can select, set this prop as a moment date                                  |
| **`responseFormat`**    | `String`   | Optional. Please refere the date formats here [Moment Date Formats](https://momentjs.com/docs/#/parsing/string-format/) |
| **`onSelectDateRange`** | `Method`   | This will return a object with firstDate and lastDate                                                                   |

### onSelectDateRange response

```
{
    firstDate: if you pass responseFormat it will be a formatted date, if not it will be a moment date
    lastDate: if you pass responseFormat it will be a formatted date, if not it will be a moment date
}
```

### Run the sample app

```
cd example
npm install
npx react-native run-ios
```

# Suggestions?

Open Issues. Submit PRs.
