function createMenu1(fObject, fTarget){
	if(fObject.url){
		let target = document.getElementById(fTarget);

		let divCol = document.createElement("div");
		divCol.setAttribute("class","col-lg-6 col-xxl-4 mb-5");

		let divCard = document.createElement("div");
		divCard.setAttribute("class","card bg-light border-0 h-100");

		let divCardBody = document.createElement("div");
		divCardBody.setAttribute("class","card-body text-center p-4 p-lg-5 pt-0 pt-lg-0");

		let divFeature = document.createElement("div");
		divFeature.setAttribute("class","feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4");

		let linkInIcon = document.createElement("a");
		linkInIcon.setAttribute("class","iconLink");
		linkInIcon.target = "_blank";
		linkInIcon.title = fObject.judul;
		linkInIcon.href = fObject.url;

		let icon = document.createElement("i");
		icon.setAttribute("class",fObject.icon.bootstrap);

		let header2 = document.createElement("h2");
		header2.setAttribute("class","fs-4 fw-bold");

		let linkInHeader = document.createElement("a");
		let textInLinkHeader = document.createTextNode(fObject.judul);
		linkInHeader.target = "_blank";
		linkInHeader.setAttribute("class","headerLink");
		linkInHeader.title = fObject.judul;
		linkInHeader.href = fObject.url;

		let paragraph = document.createElement("p");
		paragraph.setAttribute("class","mb-0");
		paragraph.innerText = fObject.deskripsi;

		linkInIcon.appendChild(icon);

		linkInHeader.appendChild(textInLinkHeader);
		header2.appendChild(linkInHeader);

		divFeature.appendChild(linkInIcon);

		divCardBody.appendChild(divFeature);
		divCardBody.appendChild(header2);
		divCardBody.appendChild(paragraph);

		divCard.appendChild(divCardBody);
		divCol.appendChild(divCard);

		target.appendChild(divCol);
	} else {
		console.log("cant create menu because not have url");
	}
}
