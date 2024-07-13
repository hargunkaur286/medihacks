import React, { useEffect, useState } from 'react';
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
  ParticipantView,
} from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiV2VkZ2VfQW50aWxsZXMiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1dlZGdlX0FudGlsbGVzIiwiaWF0IjoxNzIwNTQzODQ3LCJleHAiOjE3MjExNDg2NTJ9.EdQlc_Cfk-5xWSkJf0GAX3k3yHXmAJOnoPz2G0q7QW4';
const userId = 'Wedge_Antilles';
const callId = 'pVQOyMQM7eUQ';

// set up the user object
const user = {
  id: userId,
  name: 'Hargun',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};

const Call = () => {
  const [client, setClient] = useState(null);
  const [call, setCall] = useState(null);

  useEffect(() => {
    const initializeClient = async () => {
      try {
        const clientInstance = new StreamVideoClient({ apiKey });
        await clientInstance.connectUser(user, token);
        const callInstance = clientInstance.call('default', callId);
        await callInstance.join({ create: true });
        setClient(clientInstance);
        setCall(callInstance);
        console.log('Connected to the call:', callInstance);
      } catch (error) {
        console.error('Failed to initialize client:', error);
      }
    };

    initializeClient();

    return () => {
      if (call) {
        call.leave().then(() => console.log('Left the call'));
      }
      if (client) {
        client.disconnectUser().then(() => console.log('Disconnected the client'));
      }
    };
  }, []);

  return (
    client && call ? (
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <MyUILayout />
        </StreamCall>
      </StreamVideo>
    ) : (
      <div style={styles.loadingContainer}>
        Loading...
      </div>
    )
  );
};

export const MyUILayout = () => {
  const call = useCall();
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <div style={styles.loadingFullScreen}>Loading...</div>;
  }

  return (
    <StreamTheme style={styles.streamTheme}>
      <SpeakerLayout participantsBarPosition='bottom' />
      <CallControls />
    </StreamTheme>
  );
};

export const MyParticipantList = (props) => {
  const { participants } = props;
  return (
    <div style={styles.participantList}>
      {participants.map((participant) => (
        <div key={participant.sessionId} style={styles.participantView}>
          <ParticipantView 
            muteAudio
            participant={participant}
          />
        </div>
      ))}
    </div>
  );
};

export const MyFloatingLocalParticipant = (props) => {
  const { participant } = props;
  return (
    <div style={styles.floatingParticipant}>
      {participant && <ParticipantView muteAudio participant={participant} />}
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  loadingFullScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  streamTheme: {
    position: 'relative',
    backgroundColor: '#272a30',
    color: '#ffffff',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  participantList: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    width: '100%',
  },
  participantView: {
    width: '100%',
    aspectRatio: '3 / 2',
  },
  floatingParticipant: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    width: '240px',
    height: '135px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 3px',
    borderRadius: '12px',
  },
};

export default Call;
