
import Client from '../../client/index.js';

window.weatherForecast = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let days = document.getElementById("days").value;
	let location = document.getElementById("location").value;
	let obj = new Object();
	obj.days = days;
	
	obj.location = location;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">country</th>
			
			<th scope="col">forecast</th>
			
			<th scope="col">latitude</th>
			
			<th scope="col">local_time</th>
			
			<th scope="col">location</th>
			
			<th scope="col">longitude</th>
			
			<th scope="col">region</th>
			
			<th scope="col">timezone</th>
			
		  </tr>
		</thead>
		<tbody>
		  <tr>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
		  </tr>
		  <tr>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
		  </tr>
		  <tr>
			<td colspan="2">Larry the Bird</td>
			<td>@twitter</td>
		  </tr>
		</tbody>
	  </table>`
		document.getElementById("restable").innerHTML = res;
	});
}
