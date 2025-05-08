import React, { useEffect, useState } from 'react';
import { SafeAreaView, Platform, Button, Text, PermissionsAndroid, TouchableOpacity, Image, View } from 'react-native';
import Voice, { SpeechResultsEvent, SpeechEndEvent } from '@react-native-community/voice';
import { TextInput } from 'react-native-gesture-handler';
import styles from './Reports.style';
import emitter from '../../services/EventManager';

interface SpeechToTextProps {
  initValue: string;
}

const ReportAddItem: React.FC<SpeechToTextProps> = ({ initValue }) => {
  const [shouldRestartSpeechSession, setShouldRestartSpeechSession] = useState(false);
  const [note, setNote] = useState<string>(initValue ? initValue : "");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    requestPermission();

    console.log("In ReportAddItem, initValue '" + initValue + "'");
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechResults = onSpeechResults; // Listen for final results as well
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechEnd = (e: SpeechEndEvent) => {
    console.log("onSpeechEnd called. shouldRestartSpeechSession is ",
      shouldRestartSpeechSession);
  };

  const onSpeechError = (error: any) => {
    console.log("onSpeechError called", error);
    // if (shouldRestartSpeechSession) { // Implement logic to decide when to restart
    //   startSpeechToText();
    // }
  };

  const onSpeechPartialResults = (e: SpeechResultsEvent) => {
    const results: string[] = e.value ? e.value : [];
    // console.log("onSpeechPartialResults called, ", results.join(" "));
  };

  const updateParentInput = (newValue: string) => {
    emitter.emit('updateInput', newValue);
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log("onSpeeconSpeechResults called. shouldRestartSpeechSession is ", shouldRestartSpeechSession);
    const results: string[] = e.value ? e.value : [];
    if (results.length > 0) {
      // Append new results to the existing inputValue

      updateParentInput(results[results.length - 1]);
      console.log(results[results.length - 1]);
      setNote(note + "\n" + results[results.length - 1]);
      if (shouldRestartSpeechSession) { // Implement logic to decide when to restart
        startSpeechToText();
      }

    }
  };

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message: 'This app requires access to your microphone.',
            buttonPositive: 'OK',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const startSpeechToText = async () => {
    console.log("Start");
    setShouldRestartSpeechSession(true);
    try {
      await Voice.start('it-IT');
      setIsListening(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopSpeechToText = async () => {
    setShouldRestartSpeechSession(false);
    console.log("Stop");
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={[styles.mainContainer, { backgroundColor: '#DCF8C6' }]}>
      <TextInput
        style={[styles.reportItem, { backgroundColor: '#DCF8C6', height: '15%' }]}
        value={String(shouldRestartSpeechSession)}
        multiline={true}
      />
      <TextInput
        style={[styles.reportItem, { backgroundColor: '#DCF8C6', height: '70%' }]}
        value={note}
        multiline={true}
      />
      {isListening ? (
        <View style={[styles.iconContainer, { width: '100%', height: '10%', alignItems: 'center', backgroundColor: '#DCF8C6' }]}>
          <TouchableOpacity
            onPress={stopSpeechToText} >
            <Image
              style={styles.iconContainer}
              source={require('../../../assets/images/voiceLoading.gif')} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.iconContainer, { width: '100%', height: '10%', alignItems: 'center', backgroundColor: '#DCF8C6' }]}>
          <TouchableOpacity
            onPress={startSpeechToText} >
            <Image
              style={styles.iconContainer}
              source={require('../../../assets/images/startRecording.png')} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ReportAddItem;








/*
const ReportAddItem = () => {
  // console.log('ReportAddItem');

  // const route = useRoute<RouteProp<ParamList, 'ReportAddItem'>>();
  // const idEvent: number = route.params.idEvent;
  // const idUser: number = route.params.idUser;

  const [recording, setRecording] = useState(false);
  const [recordingResult, setRecordingResult] = useState("");

  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
  };

  const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
  };

  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    setRecordingResult("");
    var rsltStrings: string[] | undefined = e.value;
    rsltStrings?.forEach((item) => {
      setRecordingResult(recordingResult + "\n" + item);
    })
    console.log('onSpeechResults: ', recordingResult);
  };

  const onSpeechPartialResults = (e: SpeechResultsEvent) => {
    var rsltStrings: string[] | undefined = e.value;
    rsltStrings?.forEach((item) => {
      setRecordingResult(recordingResult + "\n" + item);
    })
    console.log('onSpeechResults: ', recordingResult);
  };

  const onSpeechVolumeChanged = (e: any) => {
    console.log('onSpeechVolumeChanged: ', e);
  };

  useEffect(() => {
    // voice handler events
    console.log('Voice listners eval');
    console.log(Voice.isAvailable());
    console.log(Voice.getSpeechRecognitionServices());
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
      console.log('Voice listeners destroyed');
    };
  }, []);

  // --- Start / Stop Speech Recognition ---

  const startSpeechToText = async () => {
    setRecording(true);
    console.log('Starting Voice recognition');
    try {
      await Voice.start('en-US');
      console.log("Voice started");
    }
    catch (e) {
      console.error('Got error while starting', e);
    }
  };

  const stopSpeechToText = async () => {
    setRecording(false);
    try {
      console.log('Stopping Voice recognition');
      await Voice.stop();
      console.log("Voice stopped");
    }
    catch (error) {
      console.error('Got error while ending', error);
    }
  };

  const handleSave = () => {
    console.log('Saving report:\n', recordingResult);
    // Here you can implement your actual save logic
  };

  const handleClear = () => {
    setRecordingResult('');
    setPartialText('');
  };

  const toggleEditable = () => {
    setEditable(prev => !prev);
  };

  // --- Render ---

  return (
    <SafeAreaView style={[styles.mainContainer, { backgroundColor: '#DCF8C6', borderWidth: 1 }]}>
      <TextInput
        style={[styles.reportItem, { backgroundColor: '#DCF8C6', height: '85%' }]}
        value={recordingResult}
        multiline={true}
      />
      {recording ? (
        <View style={[styles.iconContainer, { width: '100%', height: '10%', alignItems: 'center', backgroundColor: '#DCF8C6' }]}>
          <TouchableOpacity
            onPress={stopSpeechToText} >
            <Image
              style={styles.iconContainer}
              source={require('../../../assets/images/voiceLoading.gif')} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.iconContainer, { width: '100%', height: '10%', alignItems: 'center', backgroundColor: '#DCF8C6' }]}>
          <TouchableOpacity
            onPress={startSpeechToText} >
            <Image
              style={styles.iconContainer}
              source={require('../../../assets/images/startRecording.png')} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ReportAddItem

      <Button title="Start" onPress={startSpeechToText} />
      <Button title="Stop" onPress={stopSpeechToText} />
      <Text>{recording ? 'Recording' : 'Not Recording'}</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCF8C6',
  },
  inputContainer: {
    flex: 1,
    padding: 3,
    paddingBottom: 60,
  },
  textInput: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    backgroundColor: '#DCF8C6',
    color: '#111111',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#DCF8C6',
    paddingHorizontal: 10,
  },
  bottomBand: {
    height: 40,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  disabledIcon: {
    opacity: 0.3
  },
});

export default ReportAddItem;
