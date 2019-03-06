var earthquakelayer;

function getEarthquakes() {
	client = new XMLHttpRequest();
	client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
	client.onreadystatechange = earthquakeResponse; // note don't use earthquakeResponse() with brackets as that doesn't work
	client.send();
	}

function earthquakeResponse() {
	if (client.readyState == 4) {
	var earthquakedata = client.responseText;
	loadEarthquakelayer(earthquakedata);
	}
	}

function loadEarthquakelayer(earthquakedata) {
	var earthquakejson = JSON.parse(earthquakedata);
	earthquakes = earthquakejson;
	earthquakelayer = L.geoJson(earthquakejson).addTo(mymap);
	mymap.fitBounds(earthquakelayer.getBounds());
	}