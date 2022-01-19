import './Section.css';
const Section = ({ children, className = '' }) => {
	return <section className={`section ${className}`}>{children}</section>;
};

export default Section;
