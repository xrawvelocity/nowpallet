import { Collapse, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'
import { Question } from './Question'

export const FAQ = () => {
	const questions = [
		{ title: 'Question 1', answer: 'Answer 1 for the question' },
		{ title: 'Question 2', answer: 'Answer 2 for the question' },
		{ title: 'Question 3', answer: 'Answer 3 for the question' },
		{ title: 'Question 4', answer: 'Answer 4 for the question' },
		{ title: 'Question 5', answer: 'Answer 5 for the question' },
	]

	const showQuestions = () => {
		return questions.map((each) => {
			return <Question each={each} />
		})
	}

	return (
		<Flex
			direction="column"
			align="center"
			style={{ width: '100%' }}
			sx={{ '& > *': { padding: { xs: '0 5%', sm: '0 15%' } } }}
		>
			<Title style={{ marginTop: '4rem' }}>Frequently Asked Questions</Title>
			{showQuestions()}
		</Flex>
	)
}
