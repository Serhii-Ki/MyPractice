import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

import './JournalList.css';

function JournalList({data}) {
	const sortItems = (a, b) => a.date - b.date;

	if(data.length === 0) {
		return <div>Записей пока нет</div>;
	} else {
		return data.sort(sortItems).map((el) => (
			<CardButton key={el.id}>
				<JournalItem 
					title = {el.title}
					text = {el.text}
					date = {el.date}
				/>
			</CardButton>
		));
	}
	
}

export default JournalList;
