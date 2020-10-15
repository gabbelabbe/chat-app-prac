import React from 'react';

import FirebaseFunctions from '../FirebaseInit';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import RoomCard from './RoomCard';

const {firestore} = FirebaseFunctions;

export default function Landing() {

  const roomsRef = firestore.collection('rooms');
  const query = roomsRef;

  const [rooms] = useCollectionData(query, { idField: 'id' });

  return (
    <section className='cardList'>
      {rooms && rooms.map(room => <RoomCard key={room.id} room={room} />)}
    </section>
  )
}