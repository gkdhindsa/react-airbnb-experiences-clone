import star from '../star.png'
import katie from '../katie.png'
function Card() {
    return ( 
        <div className="container">
            <div className="card">
                <div className="card-image-container">
                    <img src={katie} alt="katie" className='card-image'/>
                </div>
                <div className="card-content">
                    <div className="rating">
                        <img src={star} alt="star" className='star'/>
                        <p className="rating">5.0</p>
                        <p className="review-count">(30) | USA</p>
                    </div>
                    <p className='card-text'>
                        Life lessons with Katie Zaferes
                    </p>
                    <p className="card-price">
                        <strong>From $136 </strong>/ person
                    </p>
                </div>
            </div>
        </div>
        
     );
}

export default Card;