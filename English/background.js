var GOOGLE_SHEET_API = "https://sheets.googleapis.com/";

chrome.alarms.onAlarm.addListener(function(alarm) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", GOOGLE_SHEET_API, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var resp = JSON.parse(xhr.responseText);

	    var minRowCount = 2; // Colume index는 제외한다.
	    var maxRowCount = resp.values.length;
	    var rowData = resp.values[randomIndex(minRowCount, maxRowCount)];

	    notiCall(rowData[0], rowData[1]);
	  }
	}
	xhr.send();
});

function randomIndex(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function notiCall(title, message) {
	var options = {
		type: "basic",
		title: title,
		message: message,
		iconUrl: "icon.png",
        priority: 5
	};

	chrome.notifications.create(options, callback);
}

function callback() {
	// notification callback을 정의한다.
	// 현재는 없으니 무시
}