import ReactPlayer from "react-player";
import styles from "@/component/Player/index.module.css";
import cx from "classnames";
import { MicOff, Mic, UserSquare2 } from "lucide-react";

const Player = (props) => {
  const { url, muted, playing, isActive } = props;
  return (
    <div
      className={cx(styles.playerContainer, {
        [styles.notActive]: !isActive,
        [styles.active]: isActive,
        [styles.notPlaying]: !playing,
      })}
    >

        {playing ? <ReactPlayer
        url={url}
        muted={muted}
        playing={playing}
        height="100%"
        width="100%"
      ></ReactPlayer> : <UserSquare2 className={styles.user} size={isActive? 400: 150}/> }
      

      {!isActive ? (
        muted ? (
          <MicOff className={styles.icon} size={20} />
        ) : (
          <Mic className={styles.icon} size={20} />
        )
      ) : undefined}
    </div>
  );
};

export default Player;
