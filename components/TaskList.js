import { collection, onSnapshot, orderBy, query, where } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import Task from "./Task"
import Box from '@mui/material/Box';
import { useAuth } from "../Auth";

const TaskList = () => {
    const [task, setTask] = useState([])
    const {currentUser} = useAuth()
    useEffect(() => {
        const collectionRef = collection(db, "tasks")
        const q = query(collectionRef, where("email", "==", currentUser?.email), orderBy("timestamp", "desc"))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setTask(
                querySnapshot.docs.map(doc => (
                    {...doc.data(), 
                        id: doc.id, 
                        timestamp: doc.data().timestamp?.toDate().getTime() 
                    }
                ))
            )
        })
        return unsubscribe
    }, [])
    return (
        <Box sx={{ pb: 5}}>
            { 
                task.map((task) => 
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        detail={task.detail}
                        timestamp={task.timestamp}
                    />
                ) 
            }
        </Box>
    )
}

export default TaskList
