
function generateOption(fData, fTarget){
	let target = document.getElementById(fTarget);

	let listPengurus = [];

	for (xx=1; xx<fData.length; xx++){
		let statusNew = true;
		for (xa=0; xa<listPengurus.length; xa++){
			if (fData[xx].c[3].v == listPengurus[xa]){
				statusNew = false
				break
			}
		}
		if (statusNew){
			listPengurus.push(fData[xx].c[3].v)
		}
	}

	console.log(listPengurus);

	for(xc=0; xc<listPengurus.length; xc++){
		let option = document.createElement("option");

		option.innerText = listPengurus[xc];
		option.value = listPengurus[xc];

		target.appendChild(option)
	}

	document.getElementById("selectMilik").disabled = false;

	generateMenu(fData, "targetMenu", listPengurus[0])
}

function generateMenu(fData, fTarget, fMilik){
	let target = document.getElementById(fTarget);

	console.log(fData);

	for (xx=1; xx<fData.length; xx++){
		console.log(fData[xx].c[4].v)
		
		if(fData[xx].c[3].v == fMilik){
			console.log("xx BUAT "+fData[xx].c[3].v)
			let divCol = document.createElement("div");
			divCol.setAttribute("class","col-lg-6 col-xxl-4 mb-5");

			let divCard = document.createElement("div");
			divCard.setAttribute("class","card bg-light border-0 h-100");

			let divCardBody = document.createElement("div");
			divCardBody.setAttribute("class","card-body text-center p-4 p-lg-5 pt-0 pt-lg-0");

			let divFeature = document.createElement("div");
			divFeature.setAttribute("class","feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4");

			let link = document.createElement("a");
			link.setAttribute("class","iconLink");
			link.setAttribute("target","_blank");
			link.title = fData[xx].c[0].v;
			link.href = fData[xx].c[2].v;

			let elemi = document.createElement("i");
			elemi.setAttribute("class",fData[xx].c[1].v);

			link.appendChild(elemi);

			let h2 = document.createElement("h2");
			h2.setAttribute("class","fs-4 fw-bold");

			let linkH = document.createElement("a");
			linkH.setAttribute("target","_blank");
			linkH.setAttribute("class","headerLink");
			linkH.title = fData[xx].c[0].v;
			linkH.href = fData[xx].c[2].v;
			linkH.innerText = fData[xx].c[0].v;

			let paragraph = document.createElement("p");
			paragraph.setAttribute("class", "mb-0");
			paragraph.innerText = fData[xx].c[4].v;

			h2.appendChild(linkH);

			divFeature.appendChild(link);

			divCardBody.appendChild(divFeature);

			divCardBody.appendChild(h2);

			divCardBody.appendChild(paragraph);

			divCard.appendChild(divCardBody);

			divCol.appendChild(divCard);

			h2.appendChild(linkH);

			target.appendChild(divCol);
		}
		
	}
}
