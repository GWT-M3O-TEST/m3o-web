
import Client from '../../client/index.js';

window.placeNearby = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let keyword = document.getElementById("keyword").value;
	let location = document.getElementById("location").value;
	let name = document.getElementById("name").value;
	let open_now = document.getElementById("open_now").value;
	let radius = document.getElementById("radius").value;
	let type = document.getElementById("type").value;
	let obj = new Object();
	obj.keyword = keyword;
	
	obj.location = location;
	
	obj.name = name;
	
	obj.open_now = open_now;
	
	obj.radius = radius;
	
	obj.type = type;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}