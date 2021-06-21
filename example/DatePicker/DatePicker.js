import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Moment from 'moment';
import {extendMoment} from 'moment-range';
import Month from './Month';

const moment = extendMoment(Moment);

export default () => {
  const [selectedDate, setSelectedDate] = useState(
    moment().subtract(1, 'months'),
  );

  const lastMonth = selectedDate.clone().subtract(1, 'months');
  const lastYear = selectedDate.clone().subtract(1, 'years');
  const nextMonth = selectedDate.clone().add(1, 'months');
  const nextYear = selectedDate.clone().add(1, 'years');

  return (
    <View>
      <View style={styles.weekRow}>
        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => {
            setSelectedDate(lastYear);
          }}>
          <Text>
            {'< '}
            {lastYear.format('YYYY')}
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>{selectedDate.format('YYYY')}</Text>

        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => {
            setSelectedDate(nextYear);
          }}>
          <Text>
            {nextYear.format('YYYY')}
            {' >'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => {
            setSelectedDate(lastMonth);
          }}>
          <Text>
            {'< '}
            {lastMonth.format('MMM')}
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>{selectedDate.format('MMMM')}</Text>

        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => {
            setSelectedDate(nextMonth);
          }}>
          <Text>
            {nextMonth.format('MMM')}
            {' >'}
          </Text>
        </TouchableOpacity>
      </View>
      <Month selectedDate={selectedDate} />
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
  sideButton: {
    height: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 5,
  },
});
