
import Client from '../../client/index.js';

window.currencyConvert = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let amount = document.getElementById("amount").value;
	let from = document.getElementById("from").value;
	let to = document.getElementById("to").value;
	let obj = new Object();
	obj.amount = amount;
	
	obj.from = from;
	
	obj.to = to;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">amount</th>
			
			<th scope="col">from</th>
			
			<th scope="col">rate</th>
			
			<th scope="col">to</th>
			
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
