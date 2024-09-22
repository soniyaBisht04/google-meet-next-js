import cx from "classnames";
import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";

import styles from "@/component/Bottom/index.module.css";

const Bottom = (props) => {
    const { muted, playing, toggleAudio, toggleVideo,leaveRoom } = props;
    return (
        <div className={styles.bottomMenu}>
            {muted ? (
                <MicOff
                    className={cx(styles.icon, styles.active)}
                    onClick={toggleAudio}
                    size={55}
                ></MicOff>
            ) : (
                <Mic className={styles.icon} onClick={toggleAudio} size={55}></Mic>
            )}
            {playing ? (
                <Video className={styles.icon} size={55} onClick={toggleVideo} />
            ) : (
                <VideoOff
                    className={cx(styles.icon, styles.active)}
                    onClick={toggleVideo}
                    size={55}
                />
            )}

            <PhoneOff size={55} className={cx(styles.icon)} onClick={leaveRoom} />
        </div>
    );
};

export default Bottom;
