import { useSocket } from "@/context/socket";
import { cloneDeep } from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";

const usePlayer = (myId, roomId, peer) => {
    
    const [players, setPlayers] = useState({});
    const socket = useSocket();
    const router = useRouter();
    const playersCopy = cloneDeep(players);

    const playerHighlighted = playersCopy[myId];
    delete playersCopy[myId];

    const nonHighlighted = playersCopy;

    const leaveRoom = () => {
        socket.emit('user-leave', myId, roomId)
        console.log("leaving room", roomId)
        peer?.disconnect();
        router.push('/')
    }
    const toggleAudio = () => {
        console.log("I toggle audio");
        setPlayers((prev) => {
            const copy = cloneDeep(prev)
            copy[myId].muted = !copy[myId].muted
            return {...copy}
        })
        socket.emit('user-toggle-audio', myId, roomId)
    }

    const toggleVideo = () => {
        console.log("I toggle video");
        setPlayers((prev) => {
            const copy = cloneDeep(prev)
            copy[myId].playing = !copy[myId].playing
            return {...copy}
        })
        socket.emit('user-toggle-video', myId, roomId)
    }

    return [players, setPlayers, playerHighlighted, nonHighlighted, toggleAudio, toggleVideo, leaveRoom];
}

export default usePlayer