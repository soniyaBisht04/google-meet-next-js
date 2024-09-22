import {v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import styles from '@/styles/home.module.css'
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState('');

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if(roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room ID");
    }
  }

  return (
    <div className={styles.homeContainer}
    >
      <h1> Google meet Clone LOCAL!</h1>
      <div className={styles.enterRoom}>
        <input placeholder='Enter room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <div>
        <span className={styles.separatorText}>-------OR----------</span>
      </div>
      <div>
      <button onClick={createAndJoin}>Create New Room</button>
      </div>
    </div>
  )
}
