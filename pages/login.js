import { getProviders, signIn } from 'next-auth/react'
import { useEffect } from 'react'

function Login({ providers }) {
  useEffect(async (_) => {
    providers = await getProviders()
  })
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img className="mb-5 w-52" src="https://links.papareact.com/9xl" alt="" />

      {Object.values(providers ?? {}).map((provider) => (
        <div>
          <button
            key={provider.id}
            className="rounded-lg bg-[#18D860] p-2 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}
export default Login

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
