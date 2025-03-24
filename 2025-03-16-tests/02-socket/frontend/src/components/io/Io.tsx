import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "../../redux/hooks";
import { addComment, newPost, remove, update } from "../../redux/profileSlice";
import Post from "../../models/post/Post";
import { v4 } from "uuid";
import Comment from "../../models/comment/Comment";
import SocketMessages from "02-socket-enums-yoavguterman";
import User from "../../models/user/User";
import { follow, unfollow } from "../../redux/followingSlice";
import useUserId from "../../hooks/useUserId";

interface SocketContextInterface {
    xClientId: string
}

export const SocketContext = createContext<SocketContextInterface>({
    xClientId: ''
})

export default function Io(props: PropsWithChildren): JSX.Element {

    const { children } = props

    const [xClientId] = useState<string>(v4())
    const value = { xClientId }

    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_IO_SERVER_URL)

        socket.onAny((eventName, payload) => {
            // should we even respond?
            // in other words:
            // if this event was initiate by "us"
            // then we should ignore it

            console.log(eventName, payload)

            if (payload.from !== xClientId) {
                switch (eventName) {
                    case SocketMessages.NEW_POST:
                        {
                            const newPostPayload = payload.data as Post
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            if (newPostPayload.userId === useUserId())
                                dispatch(newPost(newPostPayload))
                            break;
                        }
                    case SocketMessages.NEW_COMMENT:
                        {
                            const newCommentPayload = payload.data as Comment
                            dispatch(addComment(newCommentPayload))
                            break;
                        }
                    case SocketMessages.FOLLOW:
                        {
                            const newFollowPayload = payload.data as User
                            dispatch(follow(newFollowPayload))
                            break;
                        }
                    case SocketMessages.UNFOLLOW:
                        {
                            const newUnfollowPayload = payload.data as { userId: string }
                            dispatch(unfollow(newUnfollowPayload))
                            break;
                        }
                    case SocketMessages.REMOVE_POST:
                        {
                            const removePostPayload = payload.data as { id: string }
                            dispatch(remove(removePostPayload))
                            break;
                        }
                    case SocketMessages.UPDATE_POST:
                        {
                            const updatePostPayload = payload.data as Post
                            dispatch(update(updatePostPayload))
                            break;
                        }
                }
            }
        })

        return () => {
            socket.disconnect()
        }

    }, [])

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )

}