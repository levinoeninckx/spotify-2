import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  PlusIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import useSpotify from '../customHooks/useSpotify2'
import { playlistIdState } from '../atoms/playlistAtom'
function Sidebar() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      console.log('getting playlists')
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])
  //console.log(playlists)
  return (
    <div
      className="hidden h-screen overflow-y-scroll border-r border-gray-900 p-5 
        pb-36 text-xs text-gray-500 scrollbar-hide 
        sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-sm"
    >
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1] border-gray-900" />
        {/* playlists */}
        {playlists.map((playlist) => {
          console.log(playlist.tracks)
          return (
            <p
              key={playlist.id}
              onClick={() => setPlaylistId(playlist.id)}
              className="cursor-pointer hover:text-white"
            >
              {playlist.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
