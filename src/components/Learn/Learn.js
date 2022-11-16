import './learn.scss'
function Learn() {
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
			translate: 'отримувати'
		},
		{
			firstForm: 'give',
			secondForm: 'gave',
			thirdForm: 'given',
			translate: 'давати'
		},
	]
	return (
		<section class="learn">
			<div class="learn__container">
				<div class="learn__wrapper">
					<h2 class="learn__title"></h2>
					<div className="learn__body">

						<ul class="learn__list">
							{wordsList.map(({ firstForm }) => {
								return (
									<>
										<li class="learn__item">{firstForm}</li>
									</>

								)
							})}
						</ul>
						<ul class="learn__list">
							{wordsList.map(({ secondForm }) => {
								return (
									<>
										<li class="learn__item">{secondForm}</li>
									</>

								)
							})}
						</ul>
						<ul class="learn__list">
							{wordsList.map(({ thirdForm }) => {
								return (
									<>
										<li class="learn__item">{thirdForm}</li>
									</>

								)
							})}
						</ul>
						<ul class="learn__list">
							{wordsList.map(({ translate }) => {
								return (
									<>
										<li class="learn__item">{translate}</li>
									</>

								)
							})}
						</ul>


					</div>
				</div>
			</div>
		</section>
	)
}
export default Learn