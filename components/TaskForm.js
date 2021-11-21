import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { db } from '../firebase';

const TaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        detail: ''
    })
    const onSubmit = async() => {
        const collectionRef = collection(db, "tasks")
        const docRef = await addDoc(collectionRef, { ...task, timestamp: serverTimestamp() })
        alert(`Task with id ${docRef.id} is added successfully`)
        setTask({ title: '', detail: ''})
    }
    return (
        <div>
            {/* <pre>{JSON.stringify(task)}</pre> */}
            <TextField 
                fullWidth 
                label="title" 
                margin="normal" 
                value={task.title}
                onChange={ e => setTask({...task, title: e.target.value })}/>
            <TextField 
                fullWidth label="detail" 
                multiline 
                maxRows="{4}" 
                value={task.detail}
                onChange={ e => setTask({...task, detail: e.target.value })}/>
            <Button 
                variant="contained" 
                sx={{ mt:3 }} 
                endIcon={<SendIcon />}
                onClick={onSubmit}>Add Task</Button>
        </div>
    )
}

export default TaskForm
