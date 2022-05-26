import React from 'react'
import { SpeakerOffIcon, SpeakerOnIcon, NextIcon, PlayIcon, PauseIcon } from './Icons';

type Props = {}

export const PlayerController = (props: Props) => {
    return (
        <div className='flex'> <PlayIcon /> <PauseIcon /><NextIcon /> </div>
    )
}