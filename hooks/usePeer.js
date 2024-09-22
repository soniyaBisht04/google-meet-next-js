import { useSocket } from "@/context/socket";
import { useRouter } from "next/router";
import { Socket } from "socket.io-client";

const { useState, useEffect, useRef } = require("react");
// import peer from "peerjs?";


const usePeer = () => {
    const socket = useSocket();
    const roomId = useRouter()?.query?.roomId;

    const [peer, setPeer] = useState(null);
    const [myId, setMyId] = useState('');
    
    
    const isPeerSet = useRef(false);
 
    useEffect(() => {
        if(isPeerSet.current || !roomId || !socket) return;
        isPeerSet.current = true;
        let myPeer;
        (async function initPeer() {
            myPeer = new (await import('peerjs')).default();
            setPeer(myPeer);
            myPeer.on('open', (id) => {
                console.log('on open peer id ', {id})
                setMyId(id);
                socket?.emit('join-room', roomId, id)
            })
        })();
    }, [roomId, socket])

    return {peer, myId};
}

export default usePeer;