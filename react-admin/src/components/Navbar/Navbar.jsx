
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
                        <LanguageIcon className='icon' />
                        English
                    </div>
                    <div className='item'>
                        <DarkModeIcon className='icon' />
                    </div>
                   
                    <div className='item'>
                        <ZoomOutMapIcon className='icon' />
                    </div>
                    <div className='item'>
                        <NotificationsNoneIcon className='icon' />
                        <div className='counter'>2</div>
                    </div>

                    <div className='item'>
                        <CommentIcon className='icon' />
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <ListIcon className='icon' />
                    </div>
                    
                    <div className='item'>
                        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Avatar" className='avatar'/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;


