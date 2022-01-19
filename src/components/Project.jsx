import './Project.css';
const Project = props => {
	return (
		<article className='project'>
			<span className='number'>
				{props.index < 10 ? `0${props.index}` : props.index}
			</span>
			<a href='#'>
				<h3 className='title-project'>{props.name}</h3>
			</a>
			<p className='domain-project'>{props.domain}</p>
		</article>
	);
};

export default Project;
