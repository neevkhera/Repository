function init() {
	chrome.storage.local.get('web', function(result){
		document.getElementById('p1').innerHTML=result.web;
	});
}    
document.addEventListener('DOMContentLoaded', init);
