import logo from '../logo.png';
import './Header.css';
const Header = () => {
	return (
		<header className='header'>
			<div className='header-container'>
				<a href='#' className='header-logo'>
					<img src={logo} alt='logo duck' className='logo' />
				</a>
				<div className='user'>
					<h2 className='user-title'>Hendrick Adelaido Galarza Hernández</h2>
					<p className='user-work'>Frontend developer</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
