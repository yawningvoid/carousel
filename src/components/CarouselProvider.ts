import { createContext, useContext } from "react"
import { Album, AlbumWithSongs } from "../types/album"

interface CarouselContextProps {
  albums: Album[]
  currentCoverIndex: number
  currentAlbum: AlbumWithSongs | undefined
  marginLeft: number
  handleLeftArrow: () => void
  handleRightArrow: () => void
}

export const CarouselContext = createContext<CarouselContextProps>(null!)

export const useCarouselContext = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('No Carousel context provided')
  }
  return context
}