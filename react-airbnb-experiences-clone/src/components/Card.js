import star from '../star.png'

function Card(props) {
    let image=props.img
    return ( 
        <div className="container">
            <div className="card">
                <div className="card-image-container">
                    <img src={image} alt="katie" className='card-image'/>
                </div>
                <div className="card-content">
                    <div className="rating">
                        <img src={star} alt="star" className='star'/>
                        <p className="rating">{props.rating} </p>
                        <p className="review-count"> ({props.reviewCount}) | USA</p>
                    </div>
                    <p className='card-text'>
                        {props.title}
                    </p>
                    <p className="card-price">
                        <strong>From ${props.price} </strong>/ person
                    </p>
                </div>
            </div>
        </div>
        
     );
}

export default Card;