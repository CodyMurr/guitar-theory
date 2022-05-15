import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCog } from 'react-icons/fa';

export default function Navbar() {
	return (
		<nav className='Navbar flex'>
			<ul className='links flex'>
				<li className='flex'>
					<NavLink to='/' className='link flex col'>
						<FaHome color='#d8d8d8' size={30} />
						Home
					</NavLink>
				</li>
				<li className='link'>
					<NavLink to='/about' className='link flex col'>
						<FaInfoCircle size={30} />
						About
					</NavLink>
				</li>
				<li className='flex'>
					<NavLink to='/settings' className='link flex col'>
						<FaCog size={30} />
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
