// import mountfuji from './images/mount-fuji.jpg'
import locationicon from './assets/icon-location.svg'

const Journal = (props) => {
    const {title, location, googleMapsUrl, startdate, endDate, description, imageUrl} = props
    return (
        <article className='journal'>
            <div className='journal-img'>
                <img src={`./images/${imageUrl}`} alt="" />
            </div>
            <section className='info'>
                <div className='location-info'>
                    <div className='country'>
                        <img src={locationicon} alt="" /> 
                        <p>{location}</p>
                    </div>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className='location'>{title}</h2>
                <p className='date'>{startdate} - {endDate}</p>
                <p className='desc'>
                    {description}
                </p>
            </section>
        </article>
    )
}

export default Journal