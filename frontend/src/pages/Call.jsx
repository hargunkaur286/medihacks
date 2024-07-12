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
      <div className="flex items-center justify-center h-screen">
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
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <StreamTheme className="relative bg-gray-900 text-white h-full w-full flex flex-col">
      <SpeakerLayout participantsBarPosition='bottom' />
      <CallControls />
    </StreamTheme>
  );
};

export const MyParticipantList = (props) => {
  const { participants } = props;
  return (
    <div className="flex flex-row gap-2 w-full">
      {participants.map((participant) => (
        <div key={participant.sessionId} className="w-full aspect-w-3 aspect-h-2">
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
    <div
      style={{
        position: 'absolute',
        top: '15px',
        left: '15px',
        width: '240px',
        height: '100vw',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 3px',
        borderRadius: '12px',
      }}
    >
      {participant && <ParticipantView muteAudio participant={participant} />}
    </div>
  );
};

export default Call;
