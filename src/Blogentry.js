import styled from 'styled-components/macro'
import {css} from 'styled-components'


export const SuperFancyBlogEntry = styled.article`
background-color: hotpink;
h3  {
background-color: lightblue;
}
`

function Blogentry({blogId, author, topic, blogInput }) {
    return (
        <SuperFancyBlogEntry>
            <h3>{topic}</h3>
            <p>
                {blogInput}
                {author}
                {blogId}
            </p>
        </SuperFancyBlogEntry>)
}

export default Blogentry;