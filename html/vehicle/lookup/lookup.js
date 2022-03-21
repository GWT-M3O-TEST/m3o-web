
import Client from '../../client/index.js';

window.vehicleLookup = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let registration = document.getElementById("registration").value;
	let obj = new Object();
	obj.registration = registration;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		document.getElementById("json").innerText = response;
	});
}