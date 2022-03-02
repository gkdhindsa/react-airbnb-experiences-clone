import star from '../star.png'

function Card({coverImg, rating, reviewCount, title, price, location, openSpots}) {
    let badgeText
    if(openSpots===0)
    {
        badgeText="SOLD OUT"
    }
    else if(location==="Online")
    {
        badgeText="ONLINE"
    }
    return ( 
    
            <div className="card">
                {badgeText && <div className="badge">{badgeText}</div>}
                
                <div className="card-image-container">
                    <img src={`./images/${coverImg}`} alt="katie" className='card-image'/>
                </div>
                <div className="card-content">
                    <div className="rating">
                        <img src={star} alt="star" className='star'/>
                        <p className="rating">{rating} </p>
                        <p className="review-count"> ({reviewCount}) | {location}</p>
                    </div>
                    <p className='card-text'>
                        {title}
                    </p>
                    <p className="card-price">
                        <strong>From ${price} </strong>/ person
                    </p>
                </div>
            </div>
      
        
     );
}

export default Card;