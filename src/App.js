import logo from './logo.svg';
import './App.css';
import Blogentry from "./Blogentry";
import {SuperFancyButton} from "./SuperFancyButton";
import {useState, useEffect} from "react";
import AddBlogForm from "./AddBlogForm";
import axios from "axios";
import {loadUserApi} from "./user-service";



function App() {
    const [blogentries, setBlogentries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadUserApi()
;    },[]);

    function loadUser(){
        setLoading(true);
        loadUserApi().then(result => setBlogentries(result.data))
            .then(() => setLoading(false));
    }

    return (
        <>
            {loading && <div>Loading User</div>}
            <button onClick={loadUser}>
                Load Recent User
            </button>
            <div className="App">
                <div className="users">
                    {blogentries.map(blogentry => <Blogentry key={blogentry.id}
                                                             username={" Username : " + blogentry.username}
                                                             website={"Website: " + blogentry.website}
                                                             email={" Email: " + blogentry.email}
                                                             phone={" Phone: " + blogentry.phone}
                                                             onDelete={() => {
                    const updatedList = blogentries.filter(item => item.id !== blogentries.id);
                    setBlogentries(updatedList)

                }}/>)}
                </div>
            </div>
            <AddBlogForm onAdd={newBlogentry =>
                setBlogentries([...blogentries, newBlogentry])}/>
        </>
    );
}

export default App;
