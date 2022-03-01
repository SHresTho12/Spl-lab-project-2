import { AspectRatio } from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'
import '../Css/TutorialPlayer.css'
import {Box} from '@chakra-ui/react'
function Player(props) {
    const {url} = props;
  return (
    <Box className="player-wrapper" maxW="100%" maxH="70%" >
    <ReactPlayer
      url={url}
      className="react-player"
      light="true"
      width="100%"
      height="100%"
      config={{
        youtube: {
          playerVars: {
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            fs: 0,
            disablekb: 1,
            host: "http://www.youtube.com",
          },
        },
      }}
    />


  </Box>
  )
}

export default Player