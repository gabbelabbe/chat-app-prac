import React from 'react';

import { useHistory } from 'react-router-dom';

export default function RoomCard({room}) {

  const history = useHistory();

  return (
    <article className='card' onClick={() => history.push(`/rooms/${room.id}`)}>
      <header className='cardHeader'>
        <h2>{room.roomName}</h2>
        <p>{room.description}</p>
      </header>
    </article>
  )
}