import './App.css'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Gallery />
        <Carousel.Album />
      </Carousel>
    </div>
  )
}

export default App
