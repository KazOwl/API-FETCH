const arrowIcon = document.querySelector('.fas')
const arrow = document.querySelector('.dynamic-arrow')
const sectionLeft = document.querySelector('.section-left')
const sectionRight = document.querySelector('.section-right')
const thumbnail = document.querySelectorAll('.thumbnail')
const p = document.querySelector('.dynamic-text')
const button = document.querySelector('.cta')
const images = document.querySelectorAll('img')

const API_KEY = '19455657-04d442a455ff143c2ec0a2823'
const URL =
	'https://pixabay.com/api/?key=' +
	API_KEY +
	'&q=koala&image_type=photo&per_page=100'

async function showKoala() {
	try {
		const res = await fetch(URL)
		const data = await res.json()
		await checkFakeImg()
		p.textContent = `Here you go, you got them`
		images.forEach((img, num) => {
			num = Math.floor(Math.random() * 100)
			img.setAttribute('src', data.hits[num].largeImageURL)
		})
		setTimeout(() => {
			p.textContent = ''
		}, 3000)
	} catch {
		p.textContent = 'Something is wrong.. try again'
	}
}

const checkFakeImg = () => {
	return new Promise((resolve) => {
		p.textContent = 'I`m looking for some koalas...'
		setTimeout(() => {
			p.textContent = 'please wait..'
			resolve()
		}, 2000)
	})
}
const showScreen = () => {
	if (sectionRight.classList.contains('hidden')) {
		rotateArrow()
		setTimeout(() => {
			sectionRight.setAttribute('style', 'width:940px')
		}, 1)
		setTimeout(() => {
			thumbnail.forEach((element) => {
				element.classList.toggle('hidden')
			})
		}, 500)
		sectionRight.classList.toggle('hidden')
	} else {
		rotateArrowBack()

		setTimeout(() => {
			sectionRight.classList.toggle('hidden')
		}, 500)
		sectionRight.setAttribute('style', 'width:0px')

		thumbnail.forEach((element) => {
			element.classList.toggle('hidden')
		})
	}
}

const rotateArrow = () => {
	arrowIcon.style.transform = 'rotate(180deg)'
}

const rotateArrowBack = () => {
	arrowIcon.style.transform = 'rotate(0deg)'
}

arrowIcon.addEventListener('click', showScreen)
button.addEventListener('click', showKoala)
