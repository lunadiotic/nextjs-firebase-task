import { ListItem, ListItemText } from "@mui/material"
import moment from "moment"
import DeleteIcon from '@mui/icons-material/Delete'
import MorevertIcon from '@mui/icons-material/Morevert'
import IconButton from '@mui/material/IconButton';
import { useContext } from "react";
import { TaskContext } from '../pages/TaskContext';
import { db } from "../firebase"
import { deleteDoc, doc } from "@firebase/firestore";

const Task = ({id, title, detail, timestamp}) => {
    const {showAlert} = useContext(TaskContext)
    const deleteTask = async(id, e) => {
        e.stopPropagation();
        const docRef = doc(db, "tasks", id);
        await deleteDoc(docRef)
        showAlert('error', `Task with id ${id} deleted successfully`);
    }
    return (
        <ListItem 
            sx={{mt:3, boxShadow: 3}}
            style={{backgroundColor: '#FAFAFA'}}
            secondaryAction={
                <>
                    <IconButton onClick={e => deleteTask(id, e)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MorevertIcon />
                    </IconButton>
                </>
            }
        >
            <ListItemText primary={title} secondary={moment(timestamp).format("dddd, D/M/Y")}/>

        </ListItem>
    )
}

export default Task
