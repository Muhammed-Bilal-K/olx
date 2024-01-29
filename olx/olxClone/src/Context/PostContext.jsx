import { createContext, useState } from "react";

export const PostContext = createContext(null)

export default function Post({ children }) {
    const [postDetails, setPostDetails] = useState(null)

    return (
        <PostContext.Provider value={{ postDetails: postDetails, setPostDetails: setPostDetails }}>
            {children}
        </PostContext.Provider>
    )
}