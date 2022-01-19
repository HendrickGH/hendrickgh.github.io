import Items from './Items';
import Section from '../Section';
const Skills = () => {
	return (
		<Section className='skills'>
			<Items prefix='My' />
			<Items prefix='Another' />
		</Section>
	);
};

export default Skills;
