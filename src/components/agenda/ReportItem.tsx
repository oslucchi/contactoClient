import { View, Text } from "react-native";
import React from "react";
import { Reports } from "../modules/Reports";
import dayjs from "dayjs";
type Props = {
  report: Reports;
};

const ReportItem: React.FC<Props> = ({ report }) => {
  return (
    <View key={report?.idReport}>
      <Text style={{ fontStyle: "italic", fontSize: 18 }}>
        {dayjs(report?.date).format("YYYY/MM/DD")}
      </Text>
      <Text style={{ fontSize: 10 }}>{report?.report}</Text>
      <Text> </Text>
    </View>
  );
};

export default ReportItem;
