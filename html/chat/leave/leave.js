
import Client from '../../client/index.js';

window.chatLeave = function () {
	let token = document.getElementById("token").value;
	let service = document.getElementById("service").value;
	let endpoint = document.getElementById("endpoint").value;
	let room_id = document.getElementById("room_id").value;
	let user_id = document.getElementById("user_id").value;
	let obj = new Object();
	obj.room_id = room_id;
	
	obj.user_id = user_id;
	
	let request = JSON.stringify(obj);

	let m3o = new Client(token);

	m3o.call(service, endpoint, request, function(response) {
		// resObj = JSON.parse(response);
		let res =`<table class="table">
		<thead>
		  <tr>
			<th scope="col">room</th>
			
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
