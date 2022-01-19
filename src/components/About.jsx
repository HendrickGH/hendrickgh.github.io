import Section from './Section';
import about from '../assets/about.jpg';
import './About.css';
const About = () => {
	return (
		<Section>
			<div className='about'>
				<h2 className='about-title'>About me</h2>
				<p className='about-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore
					labore quasi tempora nihil fuga odio molestias rerum soluta? Earum
					neque magnam nisi cum eveniet quam temporibus minus, animi laborum.
				</p>
				<a href='#' className='started'>
					Let's get started!
				</a>
			</div>
			<img src={about} alt='We grow together' className='about-img' />
		</Section>
	);
};

export default About;
