import CSS from '../../assets/technologies/css3.svg';
import HTML from '../../assets/technologies/html.svg';
import Javascript from '../../assets/technologies/javascript.svg';
import React from '../../assets/technologies/react.svg';
import Windows from '../../assets/technologies/another/windows.svg';
import Git from '../../assets/technologies/another/git.svg';
import Github from '../../assets/technologies/another/github.svg';
import NPM from '../../assets/technologies/another/npm.svg';
import Skill from './Skill';
import './Items.css';
const Items = ({ prefix }) => {
	const another = [{ Git }, { Github }, { NPM }, { Windows }];
	const arrSkills = [{ HTML }, { CSS }, { Javascript }, { React }];
	const itemsSkills = arrSkills.map((item, i) => (
		<Skill tech={item} key={i} className='skill' />
	));
	const itemsAnother = another.map((item, i) => (
		<Skill tech={item} key={i} className='another' />
	));
	return (
		<article className='hero-skills'>
			<h2 className='title-skills'>{prefix} skills</h2>
			<div className='container-skills'>
				{prefix === 'Another' ? itemsAnother : itemsSkills}
			</div>
		</article>
	);
};

export default Items;
