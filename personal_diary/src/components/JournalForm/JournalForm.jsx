import Button from '../Button/Button';

import './JournalForm.css';

function JournalForm({addElement}) {

	const addJournalItem = (e) => {
		const formData = Object.fromEntries(new FormData(e.target));
		e.preventDefault();
		addElement(formData);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='tag'/>
			<textarea name='text'></textarea>
			<Button text='Сохранить'/>
		</form>
	);
}

export default JournalForm;
