import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function AddStudentForm({onAdd}) { //Erwartet eine Funktion namens onAdd

    const [userName, setUserName] = useState("some username");
    const [email, setEmail] = useState("example@example.com");


    return <form onSubmit={event => {
        event.preven3tDefault()
        onAdd(
            {
                id: uuidv4(),
                username: userName,
                email: email
            })
        setUserName("")
        setEmail("")
    }}>

        <label>
            Username
            <input value={userName} onChange={event => setUserName(event.target.value)}/>
        </label>
        <label>
            Email
            <input value={email} onChange={event => setEmail(event.target.value)}/>
        </label>


        <button>
            Add new User
        </button>
    </form>
}

export default AddStudentForm;
