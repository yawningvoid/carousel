import { FC, ComponentPropsWithoutRef } from 'react'
import { CarouselContext } from './CarouselProvider'
import useAlbums from '../hooks/useAlbums'
import CarouselGallery from './CarouselGallery'
import CarouselAlbum from './CarouselAlbum'

interface CarouselProps extends ComponentPropsWithoutRef<'div'> {}

const CarouselComponent: FC<CarouselProps> = ({className, children, ...rest}) => {
  const context = useAlbums()

  return (
    <CarouselContext.Provider value={context}>
      <div {...rest} className={className}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

const Carousel = Object.assign(CarouselComponent, {
  Gallery: CarouselGallery,
  Album: CarouselAlbum
})

export default Carousel