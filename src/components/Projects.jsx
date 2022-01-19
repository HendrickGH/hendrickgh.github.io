import Section from './Section';
import Project from './Project';
import project from '../assets/projects.jpg';
import './Projects.css';
import { Octokit } from '@octokit/core';
const Projects = () => {
	const getProjects = async () => {
		const token = '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';
		const hendrick = new Octokit({ auth: token });
		const response = await hendrick.request('GET /users/hendrickgh/repos', {
			username: 'username',
		});
		const repos = response.data.filter(
			e =>
				e.created_at.slice(5, 7) === '12' || e.created_at.slice(0, 4) === '2022'
		);
		const domains = repos.map(e => `https://hendrickgh.github.io/${e.name}`);
		return { repos, domains };
	};
	//** temporary i don't use this code, i don't know how to use asynchronous data so far / */
	return (
		<Section>
			<div className='projects-container'>
				<h2 className='projects-title'>My projects</h2>
				<select name='level' id='level' className='level'>
					<option value='' selected disabled>
						Level
					</option>
					<option value='newbie'>Newbie</option>
					<option value='junior'>Junior</option>
					<option value='mid'>Mid</option>
					<option value='advanced'>Advanced</option>
					<option value='guru'>Guru</option>
				</select>
				<div className='projects'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 22, 2, 2].map((e, i) => (
						<Project
							key={i}
							name='test'
							domain='soon asynchwderonous data soon asynchronous data soon asynchronous dsata soon asynchronous data kukuku'
							index={i + 1}
						/>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Projects;
