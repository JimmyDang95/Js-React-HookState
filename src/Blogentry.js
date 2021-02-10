import styled from 'styled-components/macro'
import {css} from 'styled-components'


export const SuperFancyBlogEntry = styled.article`
background-color: hotpink;
h3  {
background-color: lightblue;
margin: 
}
`

function Blogentry({blogId, author, topic, blogInput, onDelete}) {
    return (
        <SuperFancyBlogEntry>
            <h3>{topic}</h3>
            <p>
                {blogInput}
                {author}
                {blogId}
            </p>
            <button onclick={onDelete}>Delete Blogentry</button>
        </SuperFancyBlogEntry>)
}

export default Blogentry;