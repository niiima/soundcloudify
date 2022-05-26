import { PropsWithChildren, useRef } from "react";
export type ReactChildrenType = PropsWithChildren<{
    array: any,
    size?: any,
    color?: any,
    setPlayUrl: React.Dispatch<React.SetStateAction<string>>
}>;
export const Playlist = (props: ReactChildrenType) => {
    //const songRef = useRef({});

    return (<section className=" text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-22">
            <div className="flex flex-wrap -m-1 md:-m-2">

                {[...props.array].map((item: any) => {
                    return <div key={item.title} className="flex flex-wrap w-1/3">
                        <div className="w-full h-48 p-1 md:p-2 ">
                            <a
                                href={`https://soundcloud.com${item.address}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    // console.log(songRef.current.getAttribute('href'))
                                    props.setPlayUrl(`https://soundcloud.com${item.address}`)
                                }}
                            // rel="noreferrer"
                            // target="_blank"
                            >
                                <span
                                    className="block object-cover object-center w-full h-full rounded-lg"
                                    style={{
                                        backgroundImage: `url(${item.url})`,
                                        backgroundPosition: "center",
                                        backgroundSize: props.size ? props.size : "200px"
                                    }}>
                                    <span className="bg-${slate}-200/40 z-index-100 text-xs text-white">{item.title}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    </section >
    )

};
// window.addEventListener('resize', () => {
//   console.log(window.innerWidth);
//   if (window.innerWidth > 400) size = '400px';
//   else size = '100px';
//   render();
// });

