const countEl = document.getElementsByClassName('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/ayou/jtm?amount=-1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}