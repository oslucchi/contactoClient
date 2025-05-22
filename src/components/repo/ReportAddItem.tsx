import React, { useEffect, useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Image,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice';
import styles from '../../styles/Application.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';
import BaseScreen from '../BaseScreen';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'ReportAddItem'>;

const ReportAddItem = () => {
  const navigation = useNavigation<NavigationProp>();

  const [recording, setRecording] = useState(false);
  const [recordingResult, setRecordingResult] = useState('');
  const [partialText, setPartialText] = useState('');
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message: 'This app needs access to your microphone to record speech.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Microphone permission denied');
        }
      }
    };
    requestPermission();
  }, []);

  useEffect(() => {
    Voice.onSpeechStart = () => console.log('Started recording');
    Voice.onSpeechEnd = () => {
      console.log('Ended recording');
      setRecording(false);
      if (partialText.trim().length > 0) {
        setRecordingResult(prev => prev + (prev ? '\n' : '') + partialText);
        setPartialText('');
      }
    };
    Voice.onSpeechError = (e: any) => {
      console.log('Recording error ', e);
      setRecording(false);
    };
    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      const newText = e?.value?.[0];
      if (newText) {
        setRecordingResult(prev => prev + (prev ? '\n' : '') + newText);
        setPartialText('');
      }
    };
    Voice.onSpeechPartialResults = (e: SpeechResultsEvent) => {
      const newText = e?.value?.[0];
      if (newText) setPartialText(newText);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
      console.log('Voice listeners destroyed');
    };
  }, []);

  const startSpeechToText = async () => {
    if (!recording) {
      setRecording(true);
      try {
        await Voice.start('it-IT');
      } catch (error) {
        console.log('Error starting voice', error);
        setRecording(false);
      }
    }
  };

  const stopSpeechToText = async () => {
    if (recording) {
      try {
        await Voice.stop();
      } catch (error) {
        console.log('Error stopping voice', error);
      } finally {
        setRecording(false);
        if (partialText.trim().length > 0) {
          setRecordingResult(prev => prev + (prev ? '\n' : '') + partialText);
          setPartialText('');
        }
      }
    }
  };

  const handleSave = () => {
    console.log('Saving report:\n', recordingResult);
  };

  const handleClear = () => {
    setRecordingResult('');
    setPartialText('');
  };

  const toggleEditable = () => setEditable(prev => !prev);

  const body = (
    <TextInput
      style={[styles.textInput, { paddingBottom: 60 }]}
      value={recordingResult + (partialText ? '\n' + partialText : '')}
      multiline
      placeholder="Press the recording button and start speaking..."
      editable={editable}
      onChangeText={text => {
        if (editable) {
          setRecordingResult(text);
          setPartialText('');
        }
      }}
    />
  );

  const featureIcons = (
    <>
      <TouchableOpacity onPress={recording ? stopSpeechToText : startSpeechToText}>
        <Image
          style={styles.icon}
          source={
            recording
              ? require('../../../assets/images/voiceLoading.gif')
              : require('../../../assets/images/startRecording.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSave}
        disabled={recordingResult.trim().length === 0}
      >
        <Image
          style={styles.icon}
          source={
            recordingResult.trim().length === 0
              ? require('../../../assets/images/saveIconDisabled.png')
              : require('../../../assets/images/saveIconActive.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleClear}
        disabled={recordingResult.trim().length === 0}
      >
        <Image
          style={styles.icon}
          source={
            recordingResult.trim().length === 0
              ? require('../../../assets/images/clearIconDisabled.png')
              : require('../../../assets/images/clearIcon.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleEditable}>
        <Image
          style={styles.icon}
          source={
            editable
              ? require('../../../assets/images/editIconActive.png')
              : require('../../../assets/images/editIcon.png')
          }
        />
      </TouchableOpacity>
    </>
  );

  const footer = (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../../assets/images/back.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );

  return <BaseScreen body={body} featureIcons={featureIcons} footer={footer} />;
};

export default ReportAddItem;
