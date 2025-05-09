import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Reports } from '../../modules/Reports';
import dayjs from 'dayjs';

type ReportDetailsParamList = {
  ReportDetails: { report: Reports };
};

type ReportDetailsRouteProp = RouteProp<ReportDetailsParamList, 'ReportDetails'>;

const ReportDetails: React.FC = () => {
  const route = useRoute<ReportDetailsRouteProp>();
  const navigation = useNavigation();
  const { report } = route.params;

  const [reporter, setReporter] = useState(report.reporter);
  const [date, setDate] = useState(dayjs(report.date).format('DD/MM/YYYY'));

  const [body, setBody] = useState(report.report);

  const handleSave = () => {
    console.log('Saving updated report...');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerFields}>
        <TextInput
          style={styles.title}
          value={reporter}
          onChangeText={setReporter}
          placeholder="Reporter Name"
        />
        <TextInput
          style={styles.date}
          value={date}
          editable={false}
          placeholder="Date"
        />
      </View>

      <View style={styles.greenContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TextInput
            style={styles.body}
            value={body}
            onChangeText={setBody}
            multiline
            placeholder="Report Text"
          />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}>
          <Text style={styles.footerButtonText}>BACK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handleSave}>
          <Text style={styles.footerButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerFields: {
    padding: 16,
  },
  greenContainer: {
    flex: 1,
    backgroundColor: '#DCF8C6',
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  scrollContent: {
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  date: {
    fontSize: 16,
    marginBottom: 16,
    color: '#666',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  body: {
    fontSize: 16,
    minHeight: 300,
    textAlignVertical: 'top',
    backgroundColor: 'transparent',  // because greenContainer already green
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#312651',
    borderRadius: 8,
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReportDetails;