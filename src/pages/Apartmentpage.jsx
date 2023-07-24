import DescriptionPanel from '../components/DescriptionPanel/DescriptionPanel.jsx'
import './Apartmentpage.css'
import ImageBanner from '../components/ImageBanner/ImageBanner.jsx'
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader.jsx'
import { useApartment } from '../hooks/useApartmentPage.jsx'



function Apartmentpage() {
  const flat = useApartment()
if (flat == null) return <div>...Loading</div>


  return (
    <div className='apartment-page'>
        <ImageBanner pictures={flat.pictures}/>
        <ApartmentHeader flat={flat} />
        <div className='apartment__description__area'>
        <DescriptionPanel title='Description' content={flat.description}/>
        <DescriptionPanel 
          title='Equipements' 
          content={flat.equipments.map((equipment, i) => (
          <li key={i}>{equipment}</li>
        ))}
        />
        </div>
    </div>
  )
}

export default Apartmentpage