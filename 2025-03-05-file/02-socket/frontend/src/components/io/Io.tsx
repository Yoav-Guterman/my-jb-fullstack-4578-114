import { PropsWithChildren, useEffect } from "react";
import { io } from "socket.io-client"
import { useAppDispatch } from "../../redux/hooks";
import { newPost } from "../../redux/profileSlice";
import Post from "../../models/post/Post";

export default function Io(props: PropsWithChildren): JSX.Element {

    const { children } = props

    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_TO_SERVER_URL)

        socket.onAny((eventName, payload) => {
            switch (eventName) {
                case 'newPost':
                    {
                        const newPostPyaload = payload as Post
                        dispatch(newPost(newPostPyaload))
                        break;
                    }
            }
        })
    }, [])

    return (
        <>
            {children}
        </>
    )
}