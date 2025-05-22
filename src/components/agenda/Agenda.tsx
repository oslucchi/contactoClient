import React from 'react';
import EventsUpcoming from './EventsUpcoming';
import BaseScreen from '../BaseScreen';

const Agenda: React.FC = () => {
  return (
    <BaseScreen
      header={null}
      body={<EventsUpcoming />}
      featureIcons={null}
      footer={null}
    />
  );
};

export default Agenda;
