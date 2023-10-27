import { View, Text } from 'react-native';
import React from 'react';
import { Reports } from '../../modules/Reports';
import dayjs from 'dayjs';

import styles from './Reports.style';

type Props = {
  report: Reports;
  showTagsOnly: boolean;
};

const ReportItem: React.FC<Props> = ({ report, showTagsOnly }) => {
  console.log('ReportItem');
  return (
    <View style={styles.reportItem}>
      <Text style={{ fontStyle: 'italic', fontSize: 18 }}>
        {dayjs(report?.date).format('YYYY/MM/DD')} {' - '}
        {report.reporter}
      </Text>
      {showTagsOnly ? (
        <Text style={{ fontSize: 12 }}>{report?.summary}</Text>
      ) : (
        <Text style={{ fontSize: 12 }}>{report?.report}</Text>
      )}
      <Text style={{ fontSize: 20 }}> </Text>
    </View>
  );
};

export default ReportItem;
