function showDialog(){
	chrome.storage.local.set({'web': document.f.website.value});
	chrome.windows.create({
        url: 'dialog.html',
        width: 200,
        height: 120,
        type: 'popup'
    });
}    
function init() {
	document.f.b.addEventListener('click', showDialog, false);
}    
document.addEventListener('DOMContentLoaded', init);
