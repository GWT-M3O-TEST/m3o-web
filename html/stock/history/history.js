
import Client from '../../client/index.js';

window.stockHistory = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let date = document.getElementById("date").value;
	let stock = document.getElementById("stock").value;
	let obj = new Object();
	obj.date = date;
	
	obj.stock = stock;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">close</th>
			
			<th scope="col">date</th>
			
			<th scope="col">high</th>
			
			<th scope="col">low</th>
			
			<th scope="col">open</th>
			
			<th scope="col">symbol</th>
			
			<th scope="col">volume</th>
			
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
