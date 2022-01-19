import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer';
function App() {
	return (
		<>
			<Header />
			<Main>
				<About />
				<Projects />
				<Skills />
			</Main>
			<Footer />
		</>
	);
}

export default App;
