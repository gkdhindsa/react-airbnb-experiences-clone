import logo from '../airbnb.png'
function Navbar() {
    return ( 
        <nav  className='nav'>
            <img src={logo} alt="airbnb logo" className="logo" />
        </nav>
     );
}

export default Navbar;