import { getProviders, signIn } from 'next-auth/react'
import { useEffect } from 'react'

function Login() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img className="mb-5 w-52" src="https://links.papareact.com/9xl" alt="" />
      <div>
        <button
          className="rounded-lg bg-[#18D860] p-2 text-white"
          onClick={() => signIn('spotify', { callbackUrl: '/' })}
        >
          Login
        </button>
      </div>
    </div>
  )
}
export default Login
