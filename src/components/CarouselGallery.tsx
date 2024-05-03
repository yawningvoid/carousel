import { FC, ComponentPropsWithoutRef } from 'react'
import { useCarouselContext } from './CarouselProvider'
import './CarouselGallery.css'

interface CarouselGalleryProps extends ComponentPropsWithoutRef<'div'> {}

const CarouselGallery: FC<CarouselGalleryProps> = ({...rest}) => {
  const { albums, currentCoverIndex, marginLeft, handleLeftArrow, handleRightArrow } = useCarouselContext()

  return (
    <div {...rest} className='gallery'>

      <button className='gallery__arrow' disabled={currentCoverIndex === albums?.length - 1} onClick={handleLeftArrow}>&lArr;</button>

      <div className='gallery__view'>
        <div className="gallery__list" style={{ marginLeft: marginLeft + 'px'}}>
          {albums && 
            albums.map((cover)=> (<div key={cover?.id} className='gallery__item'><img src={`http://demo.subsonic.org/rest/getCoverArt?u=guest&p=guest&v=1.12.0&c=carousel&id=${cover.id}`} /></div>))
          }
        </div>
      </div>

      <button className='gallery__arrow' disabled={currentCoverIndex === 0} onClick={handleRightArrow}>&rArr;</button>
    </div>
  )
}
  
  export default CarouselGallery