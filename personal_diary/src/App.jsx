import { useState } from 'react';

import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import RightPanel from './components/layouts/RightPanel/RightPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';

import './App.css';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
	const [data, setData] = useState([]);

	const addElement = (newData) => {
		setData(oldData => [...oldData, {...newData, id: oldData.length > 0 ? Math.max(...oldData.map(i => i.id)) + 1 : 1}]);
	};

	return (
		<div className='app'>

			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList data={data}/>
			</LeftPanel>

			<RightPanel>
				<JournalForm addElement={addElement}/>
			</RightPanel>
			
		</div>
	);
}

export default App;
