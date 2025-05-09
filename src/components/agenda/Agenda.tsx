import React from 'react';
import { SafeAreaView, View } from 'react-native';
import EventsUpcoming from './EventsUpcoming';
import styles from '../../styles/Application.styles';

const Agenda: React.FC = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerArea}>
        { 
        // You can add a title or icons here if needed 
        }
      </View>

      <View style={styles.bodyContainer}>
        <EventsUpcoming />
      </View>

      <View style={styles.featureIconsArea}>
        { 
        // No feature icons in Agenda, but layout reserved 
        }
      </View>

      <View style={styles.systemButtonsBand}>
        {
        //  Optional footer actions or BACK button 
        }
      </View>
    </SafeAreaView>
  );
};

export default Agenda;
