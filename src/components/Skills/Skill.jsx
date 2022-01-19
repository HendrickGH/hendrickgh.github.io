import './Skill.css';
const Skill = props => {
	const [techSrc] = Object.values(props.tech);
	const nameTech = Object.keys(props.tech).toString();
	return (
		<figure className={`${props.className} figure-item`}>
			<p className='technologie'>{nameTech}</p>
			<img src={techSrc.slice(1)} alt={`${nameTech} tech`} className='icon' />
		</figure>
	);
};

export default Skill;
