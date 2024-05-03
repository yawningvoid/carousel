export type Album = {
    artist: string
    artistId: string
    coverArt: string
    created: string
    duration: number
    genre: string
    id: string
    name: string
    playCount: number
    songCount: number
    year: number
  }

export type Song = {
  album: string
  albumId: string
  artist: string
  artistId: string
  averageRating: number
  bitRate: number
  contentType: string
  coverArt: string
  created: string
  duration: number
  genre: string
  id: string
  isDir: boolean
  parent: string
  path: string
  playCount: number
  size: number
  starred: string
  suffix: string
  title: string
  track: number
  type: string
  year: number
}

export type AlbumWithSongs = {
  artist: string
  artistId: string
  coverArt: string
  created: string
  duration: number
  genre: string
  id: string
  name: string
  playCount: number
  song: Song[]
  songCount: number
  year: number
}