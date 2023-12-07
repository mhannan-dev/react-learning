import Sidebar from '../../components/Sidebar/Sidebar';
import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <h2>Home Container</h2>
            </div>
        </div>
    );
};

export default Home;


