# rn-select-date-range

A simple React Native date range picker component

---

<br/><br/>

## Installing

```
npm install rn-select-date-range
```

or

```
yarn add rn-select-date-range
```

---

<br/><br/>

## Screenshot

<p align="center">
  <img src="https://media.giphy.com/media/qvl9TQCBdaMh116zk1/giphy.gif">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/dilipchandima/rnv-date-range-picker/master/screen.png">
  <img src="https://raw.githubusercontent.com/dilipchandima/rnv-date-range-picker/master/screen2.png">
</p>

---

<br/><br/>

## Prerequisites

CalendarPicker requires Moment JS.

```
npm install --save moment
```

---

<br/><br/>

## Example React Native App

```js
import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import DateRangePicker from "rn-select-date-range";

const App = () => {
  const [selectedRange, setRange] = useState({});
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="YYYY-MM-DD"
          maxDate={moment()}
          minDate={moment().subtract(100, "days")}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
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
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
});

export default App;
```

---

<br/><br/>

## CalendarPicker Props

| Prop                             | Type          | Required   | Description                                                                                                   |
| :------------------------------- | :------------ | :--------- | :------------------------------------------------------------------------------------------------------------ |
| **`onSelectDateRange`**          | `Method`      | `Required` | This will return a object with firstDate and lastDate                                                         |
| **`maxDate`**                    | `Moment Date` | `Optional` | If you need to pass Max Date user can select, set this prop as a moment date                                  |
| **`minDate`**                    | `Moment Date` | `Optional` | If you need to pass Min Date user can select, set this prop as a moment date                                  |
| **`responseFormat`**             | `String`      | `Optional` | Please refere the date formats here [Moment Date Formats](https://momentjs.com/docs/#/parsing/string-format/) |
| **`blockSingleDateSelection`**   | `boolean`     | `Optional` | This will block the user to click single date without date range                                              |
| **`font`**                       | `String`      | `Optional` | Name of the font you are using in your theme                                                                  |
| **`selectedDateContainerStyle`** | `Style`       | `Optional` | Style of the selected date container                                                                          |
| **`selectedDateStyle`**          | `Style`       | `Optional` | Style of the selected date                                                                                    |

---

<br/><br/>

## onSelectDateRange response

```
{
    firstDate: if you pass responseFormat it will be a formatted date, if not it will be a moment date
    lastDate: if you pass responseFormat it will be a formatted date, if not it will be a moment date
}
```

---

<br/><br/>

## Run the sample app

```
cd example
npm install
npx react-native run-ios
```

---

<br/><br/>

## Suggestions?

Open Issues. Submit PRs.
