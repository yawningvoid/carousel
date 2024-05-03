import { FC, ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import { useCarouselContext } from './CarouselProvider'
import './CarouselAlbum.css'

interface CarouselAlbumProps extends ComponentPropsWithoutRef<'div'> {}

const CarouselGallery: FC<CarouselAlbumProps> = ({className, ...rest}) => {
  const { currentAlbum } = useCarouselContext()

  return (
    <div {...rest} className={classNames('album', className)}>
      {currentAlbum && (
        <>
          <h2 className='album__title'>{currentAlbum?.name}</h2>

          <table className='album__tracks'>
            <thead>
              <tr>
                <th>#</th>
                <th>Track</th>
              </tr>
            </thead>
            <tbody>
              {currentAlbum.song.map((song, index) => (
                <tr key={song.id}>
                  <td>{index + 1}</td>
                  <td>{song.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
  
  export default CarouselGallery