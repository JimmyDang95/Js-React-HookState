import logo from './logo.svg';
import './App.css';
import Blogentry from "./Blogentry";
import {SuperFancyButton} from "./SuperFancyButton";
import {useState} from "react";
import AddBlogForm from "./AddBlogForm";

function App() {
    const [blogentries, setBlogentries] = useState([]);
    return (
        <>
            <div className="App">
                <div>
                    {blogentries.map(blogentry => <Blogentry key={blogentry.id}
                                                             blogInput={"Blog " + blogentry.blogInput}
                                                             author={"Author: " + blogentry.author}
                                                             topic={"Topic: " + blogentry.topic}
                                                             onDelete={() => {
                    const updatedList = blogentries.filter(item => item.id !== blogentries.id);
                    setBlogentries(updatedList)

                }}/>)}
                </div>
            </div>
            <SuperFancyButton onClick={() => setBlogentries([
                {
                    blogInput: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" +
                        " tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    id: "1",
                    author: "Jimmy",
                    topic: "Sport"
                },
                {
                    blogInput: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" +
                        " tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    id: "2",
                    author: "Martin",
                    topic: "Weather"
                },
                {
                    blogInput: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" +
                        " tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    id: "3",
                    author: "Maria",
                    topic: "Tech"
                }
            ])}>Load Blogentries</SuperFancyButton>
            <button onClick={() => {
                const updatedList = [...blogentries, {id: "new-id", author: "new b", topic: "super topic"}];
                setBlogentries(updatedList)
            }}>
                Add Blogentry
            </button>

            <AddBlogForm onAdd={newBlogentry =>
                setBlogentries([...blogentries, newBlogentry])}/>
        </>
    );
}

export default App;
