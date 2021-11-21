import { Container } from '@mui/material'
import TaskList from '../components/TaskList'

export default function Home() {
  return (
    <Container maxWidth="sm">
      <TaskList></TaskList>
    </Container>
  )
}
