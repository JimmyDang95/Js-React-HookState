import styled from 'styled-components/macro'
import {css} from 'styled-components'
import {useState} from "react";


export const SuperFancyBlogEntry = styled.article`
color: white;
background-color: #EA5455;
h3  {
background-color: #2D4059;
}
button {
border-radius: 12px;
}
button:hover{
background-color: #FFB400;
}
.grow:hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
}

`

function Blogentry({phone, username, email, website, onDelete}) {
    return (
        <SuperFancyBlogEntry>
            <h3 className="websiteHeading">{website}</h3>
            <p>
                {username}
                <br/>
                {email}
                <br/>
                {phone}
            </p>
            <button className={"grow"} onClick={onDelete}>Delete User</button>
            <button className={"grow"}>Edit User</button>
            <button className={"grow"}>Report User</button>
        </SuperFancyBlogEntry>)
}

export default Blogentry;