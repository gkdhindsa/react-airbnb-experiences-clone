import star from '../star.png'

function Card({img, rating, reviewCount, title, price, country}) {
    
    return ( 
      
            <div className="card">
                <div className="card-image-container">
                    <img src={`./images/${img}`} alt="katie" className='card-image'/>
                </div>
                <div className="card-content">
                    <div className="rating">
                        <img src={star} alt="star" className='star'/>
                        <p className="rating">{rating} </p>
                        <p className="review-count"> ({reviewCount}) | {country}</p>
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