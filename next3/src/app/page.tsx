import { Button } from '@nextui-org/react'
import * as actions from '@/action'
import { auth } from '@/auth'
import Profile  from '@/components/profile';
export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}><Button type='submit'>SignIn</Button></form>
      <form action={actions.signOut}><Button type='submit'>SignOut</Button></form>
      {session?.user? <div>Sign In</div>:<div>SignOut</div>}
      <Profile />
    </div>
  );
}
