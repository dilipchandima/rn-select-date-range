import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Moment from "moment";
import { extendMoment } from "moment-range";
import Month from "./Month";
import Button from "./Button";

const moment = extendMoment(Moment);

export default ({
  onSelectDateRange,
  responseFormat,
  maxDate,
  minDate,
  font,
}) => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const [firstDate, setFirstDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);

  const lastMonth = selectedDate.clone().subtract(1, "months");
  const lastYear = selectedDate.clone().subtract(1, "years");
  const nextMonth = selectedDate.clone().add(1, "months");
  const nextYear = selectedDate.clone().add(1, "years");

  const returnSelectedRange = (fd, ld) => {
    const isWrongSide = ld?.isBefore(fd);

    if (responseFormat) {
      onSelectDateRange({
        firstDate: isWrongSide
          ? ld.format(responseFormat)
          : fd.format(responseFormat),
        secondDate: isWrongSide
          ? fd.format(responseFormat)
          : ld.format(responseFormat),
      });
    } else {
      onSelectDateRange({
        firstDate: isWrongSide ? ld : fd,
        secondDate: isWrongSide ? fd : ld,
      });
    }
  };

  const onSelectDate = (date) => {
    if (!firstDate) {
      setFirstDate(date);
    } else {
      if (!secondDate) {
        setSecondDate(date);
        returnSelectedRange(firstDate, date);
      } else {
        setFirstDate(secondDate);
        setSecondDate(date);
        returnSelectedRange(secondDate, date);
      }
    }
  };

  return (
    <View>
      <View style={styles.titleRow}>
        <Button
          disabled={minDate ? lastYear.isBefore(minDate, "months") : false}
          lable={`< ${lastYear.format("YYYY")}`}
          onPress={() => setSelectedDate(lastYear)}
        />
        <Text style={styles.title}>{selectedDate.format("YYYY")}</Text>
        <Button
          disabled={maxDate ? nextYear.isAfter(maxDate, "months") : false}
          lable={`${nextYear.format("YYYY")} >`}
          onPress={() => setSelectedDate(nextYear)}
          align="right"
        />
      </View>

      <View style={styles.titleRow}>
        <Button
          disabled={minDate ? lastMonth.isBefore(minDate, "months") : false}
          lable={`< ${lastMonth.format("MMM")}`}
          onPress={() => setSelectedDate(lastMonth)}
        />
        <Text style={styles.title}>{selectedDate.format("MMMM")}</Text>
        <Button
          disabled={maxDate ? nextMonth.isAfter(maxDate, "months") : false}
          lable={`${nextMonth.format("MMM")} >`}
          onPress={() => setSelectedDate(nextMonth)}
          align="right"
        />
      </View>
      <Month
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        firstDate={firstDate}
        secondDate={secondDate}
        maxDate={maxDate}
        minDate={minDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEE",
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
  },
  date: {
    textAlign: "center",
  },
  dayNameContainer: {
    flex: 1,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    margin: 3,
  },
  sideButton: {
    height: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
  },
});
