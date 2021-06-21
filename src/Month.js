import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

export default ({ selectedDate, onSelectDate, firstDate, secondDate }) => {
  const weekdayshort = moment.weekdaysShort();

  const weekdayshortname = weekdayshort.map((day) => {
    return (
      <View style={styles.dayNameContainer}>
        <Text key={day} style={styles.date}>
          {day}
        </Text>
      </View>
    );
  });

  const firstDayOfMonth = () => {
    let dateObject = selectedDate;
    let firstDay = dateObject.startOf("month").format("d");
    return firstDay;
  };

  const getRows = () => {
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(<View style={styles.emptyDayNameContainer} />);
    }

    const daysInMonth = [];
    for (let d = 1; d <= selectedDate.daysInMonth(); d++) {
      const date = moment(selectedDate).date(d);
      const isToday = date.isSame(moment(), "day");
      const iddd = secondDate?.isBefore(firstDate);
      const isSelected = iddd
        ? date.isBetween(secondDate, firstDate)
        : date.isBetween(firstDate, secondDate);

      const style =
        isSelected ||
        isToday ||
        date.isSame(firstDate, "day") ||
        date.isSame(secondDate, "day")
          ? styles.todayNameContainer
          : styles.dayNameContainer;
      daysInMonth.push(
        <TouchableOpacity onPress={() => onSelectDate(date)} style={style}>
          <Text>{d}</Text>
        </TouchableOpacity>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(<View style={styles.weekRow}>{cells}</View>);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        const remain = 7 - cells.length;
        for (let i = 0; i < remain; i++) {
          cells.push(<View style={styles.emptyDayNameContainer} />);
        }
        rows.push(<View style={styles.weekRow}>{cells}</View>);
      }
    });
    return rows;
  };

  return (
    <View>
      <View style={styles.weekRow}>{weekdayshortname}</View>
      {getRows()}
    </View>
  );
};

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    textAlign: "center",
  },
  dayNameContainer: {
    flex: 1,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  todayNameContainer: {
    flex: 1,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA4038",
  },
  emptyDayNameContainer: {
    flex: 1,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
