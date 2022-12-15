import React from 'react'
import { TPlaylistItem } from '../../global/Types';

type Props = { playlist: any, }

const PlayListItems = (props: Props) => {
    return (
        props.playlist.map((item: TPlaylistItem, i: number) => <span
            className="flex text-xxs	items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group">
            <span
                className="w-4 h-4 flex-shrink-0 border border-gray-600 rounded group-hover:border-gray-400 
                transition duration-200">
                <input id="orange-checkbox" value={item.url} type="checkbox" className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

            </span>
            <span>{i}- {item.title}</span>
        </span>)
    )
}

export default PlayListItems