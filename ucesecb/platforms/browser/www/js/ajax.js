var xhrNode;

function callDivNodeJSChange() {
	xhrNode = new XMLHttpRequest();
	var url = "http://developer.cege.ucl.ac.uk:"+31267;
	xhrNode.open("GET",url, true);
	xhrNode.onreadystatechange = processDivNodeJSChange;
	try {
	xhrNode.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
	}
	catch (e) {
	}
	xhrNode.send();
}

function processDivNodeJSChange() {
	if (xhrNode.readyState < 4) // while waiting response fromserver
	document.getElementById('ajaxtext').innerHTML = "Loading...";
	else if (xhrNode.readyState === 4) { // 4 = Response from server has been completely loaded.
	if (xhrNode.status == 200 && xhrNode.status < 300)
	document.getElementById('ajaxtext').innerHTML = xhrNode.responseText;
	}
	}