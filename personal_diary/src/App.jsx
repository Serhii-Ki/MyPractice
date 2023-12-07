import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

import './App.css';

function App() {

	return (
		<>
			<h1>Title</h1>
			<p>Text text text</p>
			<Button/>
			<CardButton>
				<JournalItem/>
			</CardButton>
			
		</>
	);
}

export default App;
