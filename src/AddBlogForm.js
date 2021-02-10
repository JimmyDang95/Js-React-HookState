import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function AddStudentForm({onAdd}) { //Erwartet eine Funktion namens onAdd

    const [author, setAuthor] = useState("some author name");
    const [topic, setTopic] = useState("");


    return <form onSubmit={event => {
        event.preven3tDefault()
        onAdd(
            {
                id: uuidv4(),
                author: author,
                topic: topic
            })
        setAuthor("")
        setTopic("")
    }}>

        <label>
            Author
            <input value={author} onChange={event => setAuthor(event.target.value)}/>
        </label>
        <label>
            Topic
            <input value={topic} onChange={event => setTopic(event.target.value)}/>
        </label>


        <button>
            Add Student
        </button>
    </form>
}

export default AddStudentForm;
