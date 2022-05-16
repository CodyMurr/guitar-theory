import './Header.css';
import Navbar from '../Navbar/Navbar';

export default function Header() {
	return (
		<header className='Header flex'>
			<h1>Guitar Theory Ref.</h1>
			<Navbar />
		</header>
	);
}
