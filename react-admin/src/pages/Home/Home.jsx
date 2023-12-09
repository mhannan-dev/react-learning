import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <Navbar/>
            </div>
        </div>
    );
};

export default Home;


