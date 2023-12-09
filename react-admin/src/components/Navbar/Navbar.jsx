import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CommentIcon from '@mui/icons-material/Comment';
import ListIcon from '@mui/icons-material/List';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type="text" name="search" />
                    <SearchIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageIcon />
                        English
                    </div>
                    <div className='item'>
                        <DarkModeIcon />
                    </div>
                    <div className='item'>
                        <NotificationsNoneIcon />
                    </div>
                    <div className='item'>
                        <ZoomOutMapIcon />
                    </div>
                    <div className='item'>
                        <CommentIcon />
                    </div>
                    <div className='item'>
                        <ListIcon />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;


