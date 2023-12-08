import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import RightPanel from './components/layouts/RightPanel/RightPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';

import './App.css';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

function App() {

	return (
		<div className='app'>

			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem/>
					</CardButton>
				</JournalList>
			</LeftPanel>

			<RightPanel>
				RightPanel
			</RightPanel>
			
		</div>
	);
}

export default App;
