import React from "react"

// JSX
function MyInfo() {
	let firstName = "Erick"
	let LastName = "Saunders de Farias"
	return(
		<div class="MyInfo">
			<h1>{`${firstName} ${LastName}`}</h1>
			<p>I'm a very successful and handsome man</p>
			<ol>
				<li>Hawaii</li>
				<li>Rockie mountains</li>
				<li>Greece</li>
			</ol>
		</div>
		)
}

export default MyInfo