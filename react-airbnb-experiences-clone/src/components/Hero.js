import main from '../main.png'
function Hero() {
    return ( 
        <div className="container">
            <div className="main">
                <img src={main} alt="pictures" className='main-image'/>
            </div>
            
            <div>
                <h1 className='heading'>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
     );
}

export default Hero;