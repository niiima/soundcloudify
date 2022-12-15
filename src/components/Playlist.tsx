import { PropsWithChildren } from "react";
import { TPlaylistItem } from '../global/Types';
import Card from './partials/Card'
export type ReactChildrenType = PropsWithChildren<{
    playlist: any,
    size?: any,
    color?: any,
    setPlayUrl: React.Dispatch<React.SetStateAction<TPlaylistItem | any>>
    playing: boolean
}>;
export const Playlist = (props: ReactChildrenType) => {
    // console.log(props)
    return (<section className=" text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-22">
            <div className="flex flex-wrap -m-1 md:-m-2">
                {[...props.playlist].map((item: TPlaylistItem) => {
                    return <Card item={item} {...props} key={item.title} />
                })
                }
            </div>
        </div>
    </section >
    )
};

