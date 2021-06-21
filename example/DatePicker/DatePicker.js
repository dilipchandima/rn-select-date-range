import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);

export default () => {
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
    let dateObject = moment();
    let firstDay = dateObject.startOf('month').format('d');
    return firstDay;
  };

  //   let rows = [];
  //   let cells = [];

  //   const daysinmonth = rows.map((d, i) => {
  //     return <tr>{d}</tr>;
  //   });

  const blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<View style={styles.dayNameContainer}></View>);
  }

  //   const daysInMonth = [];
  //   for (let d = 1; d <= daysinmonth(); d++) {
  //     daysInMonth.push(<View style={styles.dayNameContainer}>{d}</View>);
  //   }

  return (
    <View>
      <View style={styles.weekRow}>{weekdayshortname}</View>
      <Text>{firstDayOfMonth()}</Text>
      <View style={styles.weekRow}>{blanks}</View>
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
});
