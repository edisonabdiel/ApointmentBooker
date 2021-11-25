//Antd Components
import { Menu } from 'antd';
// Icons
import { SiHomeadvisor } from 'react-icons/si';


const { Item } = Menu;

const Navbar = () => {
    return (
        <div className="navbar">
            <Menu mode="horizontal">
                    <Item key="logo" icon={<SiHomeadvisor />}>
                        AroundHome Bookings
                    </Item>
            </Menu>
        </div>
    )
}

export default Navbar;
