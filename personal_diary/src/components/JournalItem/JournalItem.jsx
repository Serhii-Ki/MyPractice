import './JournalItem.css';

function JournalItem() {
	const title = 'Some koses';
	const data = new Date();
	const text = 'Some text and demo slogs skopje';

	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>{data.toDateString()}</div>
				<div className='journal-item__text'>{text}</div>
			</h2>
		</>
	);
}

export default JournalItem;