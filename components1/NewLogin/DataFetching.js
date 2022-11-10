import React, { useState, useEffect } from "react";
import Axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        Axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])


return(
    <div>
        <button type="button">Clear Data</button><br/>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch Data</button>
        <div>{post.title}</div>
    </div>
)
}
export default DataFetching
/*
*/