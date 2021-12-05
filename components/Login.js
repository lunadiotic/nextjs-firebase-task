import { Button, Grid } from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"
import { signInWithPopup } from "@firebase/auth"
import { auth, provider } from "../firebase"
const Login = () => {
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider);
    }
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
                <Button variant="contained" startIcon={<GoogleIcon/>}
                    onClick={loginWithGoogle}>Sign In with Google</Button>
        </Grid>
    )
}

export default Login
