import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);

export default ({selectedDate}) => {
  const weekdayshort = moment.weekdaysShort();
  const weekdayshortname = weekdayshort.map(day => {
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
    let firstDay = dateObject.startOf('month').format('d');
    return firstDay;
  };

  const getRows = () => {
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(<View style={styles.emptyDayNameContainer} />);
    }

    const daysInMonth = [];
    for (let d = 1; d <= selectedDate.daysInMonth(); d++) {
      daysInMonth.push(
        <View style={styles.dayNameContainer}>
          <Text>{d}</Text>
        </View>,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    textAlign: 'center',
  },
  dayNameContainer: {
    flex: 1,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 3,
  },
  emptyDayNameContainer: {
    flex: 1,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
});
