import { db } from "../firebase";
import {
    updateDoc,
    doc
} from "firebase/firestore";
import './change.css'
import { useState, useEffect } from 'react';

function ChangeDataView() {
    const [text, setText] = useState("");

    async function setData() {
        try {
            await updateDoc(doc(db, "lora_datas", "6RbQwZG5pUkaRy5qlVlV"), {
                value: text
            }).then(() => {
                alert("Updated data");
                window.location.href = './'
            })
        } catch (err) {
            alert(err)
            window.location.href = './'
        }
    }

    useEffect(
        () => { }
        , []);

    const handleChange = () => {
        console.log('Changing...');
        if (!isNaN(text)) {
            console.log(text);
            setData()
        }
        else {
            alert("Enter a value!")
        }
    }

    return (
        <div className="Change_View">
            {/* <Navbar></Navbar> */}
            <div className="change_content">
                <label htmlFor="change">
                    Enter litre/min: &ensp;
                </label>
                <input type="text" onChange={(e) => setText(e.target.value)} className="input" />
                <button className="btn" onClick={() => handleChange()}>Change data</button>
            </div>
        </div>
    )
}

export default ChangeDataView
