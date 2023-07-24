import './ApartmentGrid.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard.jsx'
import { useApartments } from '../../hooks/useApartments'


function ApartmentGrid() {

const apartments = useApartments()

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id} />
      ))}
    </div>
  )
}

export default ApartmentGrid