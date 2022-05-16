import './Header.css';
import Navbar from '../Navbar/Navbar';

export default function Header() {
	return (
		<header className='Header flex'>
			<h1>Six-String Theory</h1>
			<Navbar />
		</header>
	);
}
