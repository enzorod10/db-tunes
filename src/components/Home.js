import musicItem from '../assets/images/musicIcon.png'
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className='homeSection'>
            <div className='musicIcon'>
                <img src={musicItem}/>                
            </div>
            <div>
                Tune into the world of sound
            </div>
            <Link className='shopLinkFromHome' to="/shop">
                SHOP
            </Link>
        </div>
       
    )
}

export default Home;