import { useState, useEffect } from 'react'
import './Quize.scss'
import usePagination from '../../hooks/usePagination.hook'
function Quize() {
	const [lenght, setLenght] = useState(12)
	const [pass, setPass] = useState('')
	const [wordList, setWordList] = useState([])
	const [answer, serAnswer] = useState('')
	const [value, setValue] = useState('')
	const [estimate, setEstimate] = useState(false)
	const [correctWords, setCorrectWords] = useState([])
	const [incorrectWords, setIncorrectWords] = useState([])
	const [start, setStart] = useState(false)
	const [stop, setStop] = useState(false)
	const wordsList = [
		{
			firstForm: 'arise',
			secondForm: 'arose',
			thirdForm: 'arisen',
			translate: 'піднімати'
		},
		{
			firstForm: 'be',
			secondForm: 'was',
			thirdForm: 'been',
			translate: 'бути'
		},
		{
			firstForm: 'bear',
			secondForm: 'bore',
			thirdForm: 'born',
			translate: 'народжувати'
		},
		{
			firstForm: 'become',
			secondForm: 'became',
			thirdForm: 'become',
			translate: 'ставати'
		},
		{
			firstForm: 'begin',
			secondForm: 'began',
			thirdForm: 'begun',
			translate: 'починати'
		},
		{
			firstForm: 'bend',
			secondForm: 'bent',
			thirdForm: 'bent',
			translate: 'гнути'
		},
		{
			firstForm: 'bind',
			secondForm: 'bound',
			thirdForm: 'bound',
			translate: 'зв’язувати'
		},
		{
			firstForm: 'bite',
			secondForm: 'bit',
			thirdForm: 'bitten',
			translate: 'кусати'
		},
		{
			firstForm: 'bleed',
			secondForm: 'bled',
			thirdForm: 'bled',
			translate: 'сходити кров’ю'
		},
		{
			firstForm: 'blow',
			secondForm: 'blew',
			thirdForm: 'blown',
			translate: 'дути'
		},
		{
			firstForm: 'break',
			secondForm: 'broke',
			thirdForm: 'broken',
			translate: 'ламати,'
		},
		{
			firstForm: 'breed',
			secondForm: 'bred',
			thirdForm: 'bred',
			translate: 'вирощувати'
		},
		{
			firstForm: 'bring',
			secondForm: 'brought',
			thirdForm: 'brought',
			translate: 'приносити'
		},
		{
			firstForm: 'build',
			secondForm: 'built',
			thirdForm: 'built',
			translate: 'будувати'
		},
		{
			firstForm: 'burn',
			secondForm: 'burnt',
			thirdForm: 'burnt',
			translate: 'горіти'
		},
		{
			firstForm: 'buy',
			secondForm: 'bought',
			thirdForm: 'bought',
			translate: 'купувати'
		},
		{
			firstForm: 'cast',
			secondForm: 'cast',
			thirdForm: 'cast',
			translate: 'розкидати'
		},
		{
			firstForm: 'catch',
			secondForm: 'caught',
			thirdForm: 'caught',
			translate: 'ловити'
		},
		{
			firstForm: 'choose',
			secondForm: 'chose',
			thirdForm: 'chosen',
			translate: 'вибирати'
		},
		{
			firstForm: 'come',
			secondForm: 'came',
			thirdForm: 'come',
			translate: 'приходити'
		},
		{
			firstForm: 'cost',
			secondForm: 'cost',
			thirdForm: 'cost',
			translate: 'коштувати'
		},
		{
			firstForm: 'cut',
			secondForm: 'cut',
			thirdForm: 'cut',
			translate: 'різати'
		},
		{
			firstForm: 'dig',
			secondForm: 'dug',
			thirdForm: 'dug',
			translate: 'копати'
		},
		{
			firstForm: 'do',
			secondForm: 'did',
			thirdForm: 'done',
			translate: 'виконувати'
		},
		{
			firstForm: 'draw',
			secondForm: 'drew',
			thirdForm: 'drawn',
			translate: 'малювати'
		},
		{
			firstForm: 'dream',
			secondForm: 'dreamt',
			thirdForm: 'dreamt',
			translate: 'мріяти'
		},
		{
			firstForm: 'drink',
			secondForm: 'drank',
			thirdForm: 'drunk',
			translate: 'пити'
		},
		{
			firstForm: 'drive',
			secondForm: 'drove',
			thirdForm: 'driven',
			translate: 'керувати авто'
		},
		{
			firstForm: 'eat',
			secondForm: 'ate',
			thirdForm: 'eaten',
			translate: 'їсти'
		},
		{
			firstForm: 'fall',
			secondForm: 'fell',
			thirdForm: 'fallen',
			translate: 'падати'
		},
		{
			firstForm: 'feed',
			secondForm: 'fed',
			thirdForm: 'fed',
			translate: 'годувати'
		},
		{
			firstForm: 'feel',
			secondForm: 'felt',
			thirdForm: 'felt',
			translate: 'почувати'
		},
		{
			firstForm: 'fight',
			secondForm: 'fought',
			thirdForm: 'fought',
			translate: 'битися'
		},
		{
			firstForm: 'find',
			secondForm: 'found',
			thirdForm: 'found',
			translate: 'знаходити'
		},
		{
			firstForm: 'flee',
			secondForm: 'fled',
			thirdForm: 'fled',
			translate: 'тікати, рятуватися'
		},
		{
			firstForm: 'fly',
			secondForm: 'flew',
			thirdForm: 'flown',
			translate: 'літати'
		},
		{
			firstForm: 'forget',
			secondForm: 'forgot',
			thirdForm: 'forgotten',
			translate: 'забувати'
		},
		{
			firstForm: 'get',
			secondForm: 'got',
			thirdForm: 'gotten',
			translate: 'отримувати, розуміти, добиратися'
		},
		{
			firstForm: 'give',
			secondForm: 'gave',
			thirdForm: 'given',
			translate: 'давати'
		},
	]
	const {
		firstContentIndex,
		lastContentIndex,
		nextPage,
		prevPage,
		page,
		setPage,
		totalPages,
	} = usePagination({
		contentPerPage: 5,
		count: incorrectWords.length,
	});
	const onStart = () => {
		setStart(true)
		const random = Math.floor(Math.random() * wordsList.length)
		const newArr = Object.entries(wordsList[random])
		const randomIndex = Math.floor(Math.random() * newArr.length)
		const answerArr = newArr.filter((item, index) => index === randomIndex)
		const answ = answerArr.forEach(([key, value]) => {
			serAnswer(value)
		});
		const filteredArr = newArr.filter((item, index, arr) => {
			return index !== randomIndex
		})
		setWordList(filteredArr)
	}
	const onInput = (e) => {
		e.preventDefault()
		if (answer === value) {
			setCorrectWords([...correctWords, value])
			setEstimate(true)
			onStart()
		} else {
			setEstimate(false)
		}
	}
	const onSkip = () => {
		setIncorrectWords([...incorrectWords, answer])
		onStart()

	}
	const onStop = () => {
		setStart(false)
		setStop(true)
	}
	console.log(correctWords);
	return (
		<section className="quize">
			<div className="quize__container">
				<div className="quize__wrapper">
					<div className="quize__content">
						<div class="quize__control">
							<div onClick={() => { onStart() }} className="quize__start">START</div>
							<div onClick={() => { onStop() }} className="quize__stop">Stop</div>
						</div>
						{start
							?
							<div class="quize__body">
								<ul className="quize__list">
									{wordList.map(([key, value], i) => {
										return (
											<li key={i} className="quize__item">{value}</li>
										)
									})}
								</ul>

								<form className="quize__form from-quize" action="#" onSubmit={(e) => onInput(e)}>
									{estimate ? <div className="quize__win" >Ура</div> : <div className="quize__loze">пробуй еще</div>}
									<input onInput={onInput} value={value} onChange={(e) => {
										setValue(e.target.value)
									}} type="text" className="quize__input" />
									<div className="from-quize__control">
										<button class="quize__check">check</button>
										<button onClick={onSkip} class="quize__skip">skip</button>
									</div>

								</form>
							</div>
							: !stop ?
								<div className="quize__intro intro-quize">
									<h2 className="intro-quize__title">Introduction</h2>
									<div className="intro-quize__ruls">Введите в поле недостающее слово</div>
								</div>
								: <div class="quize__result result-quize">


									{incorrectWords.length ?
										<><h2 class="result-quize__title">
											Упс, кажется нужно подучить</h2>
											<ul className="result-quize__list">

												{incorrectWords.slice(firstContentIndex, lastContentIndex).map((item) => {
													return (
														<li class="result-quize__item" > {item}</li>
													)
												})}
											</ul>
											<div className="pagination">
												<button onClick={prevPage} className="page-arrow">
													&larr;
												</button>
												{[...Array(totalPages).keys()].map((el) => (
													<button
														onClick={() => setPage(el + 1)}
														key={el}
														className={`page ${page === el + 1 ? "active" : ""}`}
													>
														{el + 1}
													</button>
												))}
												<button onClick={nextPage} className="page-arrow">
													&rarr;
												</button>
											</div></>
										:
										<p class="">Пока неверных слов нет, продолжай в том же духе</p>
									}

								</div>
						}
					</div>
				</div>
			</div>
		</section >
	);
}
export default Quize