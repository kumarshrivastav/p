import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const MyPlyrVideo = ({path}) => {
  const plyrProps = {
    source: {
      type: "video",
      title: "Example title",

      sources: [
        {
          src: path,
          type: "video/mp4",
          size: 720,
        },
      ],
    },
    options: {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
    },
    loop: true,
    muted: true,
    autoPlay: true,
  };
  return <Plyr {...plyrProps} />;
};

export default MyPlyrVideo;
