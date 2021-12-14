import { Alert, Container, Snackbar, Box, Avatar, Typography, IconButton } from '@mui/material'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import Login from '../components/Login'
import Loading from '../components/Loading'
import { useState } from "react"
import { TaskContext } from './TaskContext'
import { useAuth } from '../Auth'
import { auth } from '../firebase'

export default function Home() {
  // Set Data User
  const {currentUser} = useAuth()
  // set open alert
  const [open, setOpen] = useState(false)
  // set alert type
  const [alertType, setAlertType] = useState("success")
  // set alert message
  const [alertMessage, setAlertMessage] = useState("")
  // share state with Context
  const [task, setTask] = useState({
    title: '',
    detail: ''
  })
  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMessage(msg)
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // return <Loading type="spin" color="blue"/>
  return (
    <TaskContext.Provider value={{ showAlert, task, setTask }}>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={3}>
          <IconButton onClick={() => auth.signOut()}>
            <Avatar src={currentUser.photoURL}/>
          </IconButton>
          <Typography variant="h5" mt={1}>
            {currentUser.displayName}
          </Typography>
        </Box>
        <TaskForm/>
        <Snackbar 
          open={open} 
          autoHideDuration={6000} 
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right'}}>
          <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
        <TaskList/>
      </Container>
    </TaskContext.Provider>
  )
}
