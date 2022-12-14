import { PropsWithChildren } from "react";
import { PlaylistItem } from '../../global/Types';
export type ReactChildrenType = PropsWithChildren<{
    item: PlaylistItem,
    playlist: any,
    size?: any,
    color?: any,
    setPlayUrl: React.Dispatch<React.SetStateAction<PlaylistItem | any>>
    playing: boolean
}>;
const Card = (props: ReactChildrenType) => {
    const { item } = props;
    return <div className="flex flex-wrap w-1/3 lg:w-1/4">
        <div className="w-full h-48 p-1 md:p-2 ">
            <a
                href={`https://soundcloud.com${item.address}`}
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    props.setPlayUrl(item)
                }}
                rel="noreferrer"
                target="_blank"
            >
                <span
                    className="block object-cover object-center w-full h-full rounded-lg"
                    style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundPosition: "center",
                        backgroundSize: props.size ? props.size : "200px"
                    }}>
                    <span className="bg-slate-200/40 z-index-100 text-xs text-white text-center">{item.title}</span>
                </span>
            </a>
        </div>
    </div>
}

export default Card;