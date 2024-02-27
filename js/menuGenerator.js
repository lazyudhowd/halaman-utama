/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function createMenu1(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let divCol = document.createElement("div");
	divCol.setAttribute("class","col-lg-6 col-xxl-4 mb-5");

	let divCard = document.createElement("div");
	divCard.setAttribute("class","card bg-light border-0 h-100");

	let divCardBody = document.createElement("div");
	divCardBody.setAttribute("class","card-body text-center p-4 p-lg-5 pt-0 pt-lg-0");

	let divFeature = document.createElement("div");
	divFeature.setAttribute("class","feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4");

	let icon = document.createElement("i");
	icon.setAttribute("class",fObject.icon.bootstrap);

	let header2 = document.createElement("h2");
	header2.setAttribute("class","fs-4 fw-bold");
	header2.innerText = fObject.judul;

	let paragraph = document.createElement("p");
	paragraph.setAttribute("class","mb-0");
	paragraph.innerText = fObject.deskripsi;

	divFeature.appendChild(icon);

	divCardBody.appendChild(divFeature);
	divCardBody.appendChild(header2);
	divCardBody.appendChild(paragraph);

	divCard.appendChild(divCardBody);
	divCol.appendChild(divCard);

	target.appendChild(divCol);
}