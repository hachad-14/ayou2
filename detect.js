const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/ayou/jtm?amount=2')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}