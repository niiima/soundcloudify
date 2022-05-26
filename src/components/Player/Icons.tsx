export const SpeakerOffIcon = () => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="26"
        width="26"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"
        ></path>
    </svg>
);

export const SpeakerOnIcon = () => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="26"
        width="26"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z"
        ></path>
    </svg>
);

export const NextIcon = (props: any) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        height={props.size}
        width={props.size}
        viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
        <path fill={props.isHover ? "yellow" : "white"} d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M280.875,269.313l-96,64
	C182.199,335.094,179.102,336,176,336c-2.59,0-5.184-0.625-7.551-1.891C163.246,331.32,160,325.898,160,320V192
	c0-5.898,3.246-11.32,8.449-14.109c5.203-2.773,11.516-2.484,16.426,0.797l96,64C285.328,245.656,288,250.648,288,256
	S285.328,266.344,280.875,269.313z M368,320c0,8.836-7.164,16-16,16h-16c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h16
	c8.836,0,16,7.164,16,16V320z"/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
    </svg>
    // <svg
    //     stroke="currentColor"
    //     fill="currentColor"
    //     strokeWidth="0"
    //     viewBox="0 0 24 24"
    //     height={props.size}
    //     width={props.size}
    //     xmlns="http://www.w3.org/2000/svg"
    // >
    //     <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
    // </svg>
);

export const PreviousIcon = () => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
    </svg>
);

export const PlayIcon = () => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="react-jinke-music-player-play-icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
    </svg>
);

export const PauseIcon = () => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="react-jinke-music-player-pause-icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path>
    </svg>
);

type ShuffleProps = { color: string, size: string, isHover: boolean, isShuffle: boolean }
export const Shuffle = (props: ShuffleProps) => {
    const { color, isShuffle, size } = props
    return (
        <div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size} height={size}
                viewBox="0 0 39.989 39.989" enableBackground="new 0 0 39.989 39.989" >
                <path fill={isShuffle ? color : "pink"} id="XMLID_198_" d="M19.995,0C8.952,0,0,8.952,0,19.995c0,11.043,8.952,19.994,19.995,19.994s19.994-8.952,19.994-19.994
	C39.989,8.952,31.037,0,19.995,0z M30.79,15.841h-1.572c-0.153,3.048-1.781,5.71-4.191,7.282c2.533,1.651,4.215,4.504,4.215,7.747
	c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5c0-3.445-2.803-6.247-6.247-6.247s-6.247,2.802-6.247,6.247
	c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5c0-3.243,1.681-6.096,4.215-7.747c-2.41-1.571-4.038-4.233-4.191-7.282H9.199
	c-0.555,0-0.902-0.601-0.624-1.081l3.048-5.28c0.277-0.481,0.971-0.481,1.249,0l3.048,5.28c0.277,0.481-0.069,1.081-0.624,1.081
	h-1.525c0.24,3.227,2.936,5.782,6.224,5.782s5.984-2.554,6.224-5.782h-1.524c-0.555,0-0.902-0.601-0.624-1.081l3.048-5.28
	c0.277-0.481,0.971-0.481,1.249,0l3.048,5.28C31.691,15.24,31.345,15.841,30.79,15.841z"/>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
            {/* <svg className="transition-colors" version="1.1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px"
                viewBox="0 0 49.7 49.7"
                width={props.size} height={props.size}
                enableBackground="new 0 0 49.7 49.7" >
                <g>
                    <path strokeWidth="3px" fill={color} d="M27,13.85h9v8.964l13.7-9.964L36,2.886v8.964h-9c-7.168,0-13,5.832-13,13c0,6.065-4.935,11-11,11H1c-0.553,0-1,0.447-1,1
       s0.447,1,1,1h2c7.168,0,13-5.832,13-13C16,18.785,20.935,13.85,27,13.85z M38,6.814l8.3,6.036L38,18.886V6.814z"/>
                    <path fill={color} d="M1,13.85h2c2.713,0,5.318,0.994,7.336,2.799c0.191,0.171,0.43,0.255,0.667,0.255c0.274,0,0.548-0.112,0.745-0.333
       c0.368-0.412,0.333-1.044-0.078-1.412C9.285,13.025,6.206,11.85,3,11.85H1c-0.553,0-1,0.447-1,1S0.447,13.85,1,13.85z"/>
                    <path fill={color} d="M36,35.85h-9c-2.685,0-5.27-0.976-7.278-2.748c-0.411-0.365-1.044-0.327-1.411,0.089c-0.365,0.414-0.326,1.046,0.089,1.411
       c2.374,2.095,5.429,3.248,8.601,3.248h9v8.964l13.7-9.964L36,26.886V35.85z M38,30.814l8.3,6.036L38,42.886V30.814z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg> */}
        </div>
    )
}