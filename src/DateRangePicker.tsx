import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import moment from "moment";
import Month from "./Month";
import Button from "./Button";
require("moment/min/locales.min");

interface IResponse {
  firstDate: string | moment.Moment;
  secondDate: string | moment.Moment;
}

interface IProps {
  onSelectDateRange: (response: IResponse) => void;
  responseFormat?: string;
  maxDate?: moment.Moment;
  minDate?: moment.Moment;
  blockSingleDateSelection?: boolean;
  font?: string;
  selectedDateContainerStyle?: ViewStyle;
  selectedDateStyle?: TextStyle;
  ln?: string;
}

const DateRangePicker = ({
  onSelectDateRange,
  responseFormat,
  maxDate,
  minDate,
  blockSingleDateSelection,
  font,
  selectedDateContainerStyle,
  selectedDateStyle,
  ln = "en",
}: IProps) => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const [firstDate, setFirstDate] = useState<moment.Moment | null>(null);
  const [secondDate, setSecondDate] = useState<moment.Moment | null>(null);

  const lastMonth = selectedDate.clone().subtract(1, "months");
  const lastYear = selectedDate.clone().subtract(1, "years");
  const nextMonth = selectedDate.clone().add(1, "months");
  const nextYear = selectedDate.clone().add(1, "years");

  moment.locale(ln);

  const returnSelectedRange = (fd: moment.Moment, ld: moment.Moment) => {
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

  const onSelectDate = (date: moment.Moment) => {
    if (
      blockSingleDateSelection &&
      (firstDate?.isSame(date, "dates") || secondDate?.isSame(date, "dates"))
    ) {
      return;
    }

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

  const onPressClear = () => {
    setFirstDate(null);
    setSecondDate(null);
    onSelectDateRange({
      firstDate: "",
      secondDate: "",
    });
  };

  const isDateSelected = () => firstDate === null || secondDate === null;

  return (
    <View>
      <View style={styles.titleRow}>
        <Button
          font={font}
          disabled={minDate ? lastYear.isBefore(minDate, "months") : false}
          label={`< ${lastYear.format("YYYY")}`}
          onPress={() => setSelectedDate(lastYear)}
        />
        <Text style={{ ...styles.title, fontFamily: font }}>
          {selectedDate.format("YYYY")}
        </Text>
        <Button
          font={font}
          disabled={maxDate ? nextYear.isAfter(maxDate, "months") : false}
          label={`${nextYear.format("YYYY")} >`}
          onPress={() => setSelectedDate(nextYear)}
          align="right"
        />
      </View>

      <View style={styles.titleRow}>
        <Button
          font={font}
          disabled={minDate ? lastMonth.isBefore(minDate, "months") : false}
          label={`< ${lastMonth.locale(ln).format("MMM")}`}
          onPress={() => setSelectedDate(lastMonth)}
        />
        <Text style={{ ...styles.title, fontFamily: font }}>
          {selectedDate.locale(ln).format("MMMM")}
        </Text>
        <Button
          font={font}
          disabled={maxDate ? nextMonth.isAfter(maxDate, "months") : false}
          label={`${nextMonth.locale(ln).format("MMM")} >`}
          onPress={() => setSelectedDate(nextMonth)}
          align="right"
        />
      </View>
      <Month
        font={font}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        firstDate={firstDate}
        secondDate={secondDate}
        maxDate={maxDate}
        minDate={minDate}
        selectedDateContainerStyle={selectedDateContainerStyle}
        selectedDateStyle={selectedDateStyle}
      />
      <View style={styles.clearContainer}>
        <Pressable
          disabled={isDateSelected()}
          onPress={onPressClear}
          style={[styles.clearBtn, { opacity: isDateSelected() ? 0.3 : 1 }]}
        >
          <Text style={{ fontFamily: font }}>Clear</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DateRangePicker;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEE",
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
  },
  clearBtn: {
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  clearContainer: {
    flexDirection: "row-reverse",
    paddingVertical: 5,
  },
});
