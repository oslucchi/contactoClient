import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button, Text } from 'react-native';
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice';

const ReportAddItem = () => {
  console.log('ReportAddItem');

  // const route = useRoute<RouteProp<ParamList, 'ReportAddItem'>>();
  // const idEvent: number = route.params.idEvent;
  // const idUser: number = route.params.idUser;

  const [recording, setRecording] = useState(false);
  const [recordingResult, setRecordingResult] = useState('');

  const speechStartHandler = (e: any) => {
    console.log('Started recording', e);
  };
  const speechEndHandler = (e: any) => {
    console.log('Ended recording', e);
  };
  const speechErrorHandler = (e: any) => {
    console.log('Recording error ', e);
  };

  const speechResultsHandler = (e: SpeechResultsEvent) => {
    console.log('Recording result' + JSON.stringify(e));
    if (e.value) {
      setRecordingResult(e.value[0]);
    }
  };

  useEffect(() => {
    // voice handler events
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    return () => {
      // destroy the voice instance after component unmounts
      Voice.destroy().then(Voice.removeAllListeners);
      console.log('Voide listners destroyed');
    };
  }, []);

  const startSpeechToText = async () => {
    setRecording(true);
    try {
      console.log('Starting Voice speech to text');
      await Voice.start('it-IT');
    } catch (error) {
      console.log('Got error while starting', error);
    }
  };

  const stopSpeechToText = async () => {
    setRecording(false);
    try {
      console.log('Ending Voice');
      await Voice.stop();
    } catch (error) {
      console.log('Got error while ending', error);
    }
  };

  return (
    <SafeAreaView>
      <Button title="Start" onPress={startSpeechToText} />
      <Button title="Stop" onPress={stopSpeechToText} />
      <Text>{recording ? 'Recording' : 'Not Recording'}</Text>
      <Text>{recordingResult}</Text>
    </SafeAreaView>
  );
};

export default ReportAddItem;
