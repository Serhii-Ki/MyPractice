import { useState } from 'react';
import cn from 'classnames';

import Button from '../Button/Button';

import styles from './JournalForm.module.css';

function JournalForm({addElement}) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.target));
		let isFormValid = true;
		if(!formData.title?.trim().length){
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, title: true}));
		}
		if(!formData.text?.trim().length){
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, text: true}));
		}
		if(!formData.date){
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, date: true}));
		}
		if(!isFormValid){
			return;
		}
		addElement(formData);
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input 
					type="text" 
					name='title'
					placeholder='Title' 
					className={cn(styles['input-title'] , {
						[styles['invalid']]: !formValidState.title
					})}/>
			</div>
			<input 
				type='date' 
				name='date'
				className={cn(styles['input-form'] , {
					[styles['invalid']]: !formValidState.date
				})}
			/>
			<input 
				type='text' 
				name='tag'
				placeholder='theme' 
				className={styles['input-form']}
			/>
			<textarea name='text' className={cn(styles['form-textarea'] , {
				[styles['invalid']]: !formValidState.date
			})}></textarea>
			<Button text='Сохранить'/>
		</form>
	);
}

export default JournalForm;
