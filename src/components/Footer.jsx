import logo from '../logo.png';
import whatsapp from '../assets/contact/whatsapp.svg';
import gmail from '../assets/contact/gmail.svg';
import linkedin from '../assets/contact/linkedin.svg';
import cv from '../cv.pdf';
import cvimg from '../assets/contact/cv.svg';
import './Footer.css';
const Footer = () => {
	return (
		<footer className='footer'>
			<a href='#'>
				<img
					src={logo}
					alt='Hendrick Frontend Developer'
					className='logo-footer'
				/>
			</a>

			<address className='contact'>
				<h2 className='work-title'>Let's work together!</h2>
				<div className='contact-there'>
					<a href={cv} download='Galarza Hernandez Hendrick Adelaido'>
						<img
							src={cvimg}
							alt='Download my cv and see my goals and achievements'
							className='icon-contact'
						/>
					</a>
					<a href='tel:+527721698485'>
						<img
							src={whatsapp}
							alt='Connect up with whatsapp here!'
							className='icon-contact'
						/>
					</a>
					<a href='mailto:hendrickghxd@gmail.com'>
						<img
							src={gmail}
							alt='Connect up with gmail here!'
							className='icon-contact'
						/>
					</a>
					<a href='https://www.linkedin.com/in/hendrick-galarza/'>
						<img
							src={linkedin}
							alt='Connect up with LinkedIn!'
							className='icon-contact'
						/>
					</a>
				</div>
			</address>
			<p className='extra'>Made with ♥ in Mexico</p>
		</footer>
	);
};

export default Footer;
