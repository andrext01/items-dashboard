import { useSession, signIn, signOut } from "next-auth/react"
import Button  from "@mui/material/Button";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button variant={'contained'} color={'error'} onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      Please log in <br />
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>Sign in</Button>
    </>
  )
}