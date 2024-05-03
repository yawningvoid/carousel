import { useEffect, useMemo, useState } from "react"
import type { Album, AlbumWithSongs } from "../types/album"

const useAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>(null!)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://demo.subsonic.org/rest/getAlbumList2?u=guest&p=guest&v=1.12.0&c=carousel&type=newest&f=json')
        const result = await response.json()
        setAlbums(() => result['subsonic-response'].albumList2.album)
      } catch (error) {
        console.error(error)
      } 
    }
    fetchData()
  }, [])

  const [currentCoverIndex, setCurrentCoverIndex] = useState(0) 
  const [marginLeft, setMarginLeft] = useState<number>(-69)

  const handleLeftArrow = () => {
    if (albums && currentCoverIndex !== albums?.length - 2) {
      setCurrentCoverIndex(() => currentCoverIndex + 1)
    } else {
      setCurrentCoverIndex(() => currentCoverIndex + 1)
    }

    setMarginLeft(() => marginLeft - 138)
  }

  const handleRightArrow = () => {
    if (albums && currentCoverIndex > 1) {
      setCurrentCoverIndex(() => currentCoverIndex - 1)
    } 
    
    if (albums && currentCoverIndex === 1) {
      setCurrentCoverIndex(() => currentCoverIndex - 1)
    } 
    
    if (albums && currentCoverIndex === albums?.length - 1) {
      setCurrentCoverIndex(() => currentCoverIndex - 1)
    }

    setMarginLeft(() => marginLeft + 138)
  }

  const [albumCollection, setAlbumCollection] = useState<AlbumWithSongs[]>([]!)

  useEffect(() => {
    const albumId = albums?.[currentCoverIndex]?.id

    const fetchAlbum = async (id: string) => {
      try {
        const response = await fetch(`http://demo.subsonic.org/rest/getAlbum?u=guest&p=guest&v=1.12.0&c=carousel&type=newest&f=json&id=${id}`)
        const result = await response.json()
        setAlbumCollection(albumCollection => [...albumCollection, result['subsonic-response']?.album])
      } catch (error) {
        console.error(error)
      } 
    }

    if (!albumCollection.find((item) => item?.id === albumId)) {
      fetchAlbum(albumId)
    }
  }, [albums, currentCoverIndex])

  const currentAlbum = useMemo(() => albumCollection.find(album => album?.id === albums?.[currentCoverIndex]?.id), [albumCollection, albums, currentCoverIndex])

  return { albums, currentCoverIndex, marginLeft, currentAlbum, handleLeftArrow, handleRightArrow }
}

export default useAlbums