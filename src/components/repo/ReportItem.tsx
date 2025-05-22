import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Reports } from '../../modules/Reports';
import dayjs from 'dayjs';
import styles from '../../styles/Application.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  report: Reports;
  showTagsOnly: boolean;
  fontSize: number;
};

const ReportItem: React.FC<Props> = ({ report, showTagsOnly, fontSize }) => {
  const [showTagOnly, setShowTagOnly] = useState(report.showTagOnly);

  const toggleShowTagOnly = () => {
    report.showTagOnly = !report.showTagOnly;
    setShowTagOnly(report.showTagOnly);
  };

  return (
    <TouchableOpacity onPress={toggleShowTagOnly}>
      <View style={styles.reportItemContainer}>
        <Text style={styles.reportDate}>
          {dayjs(report?.date).format('YYYY/MM/DD')} — {report.reporter}
        </Text>

        {showTagsOnly || showTagOnly ? (
          <Text style={styles.reportSummary}>{report?.summary}</Text>
        ) : (
          <Text style={[styles.reportFullText, { fontSize }]}>{report?.report}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ReportItem;
