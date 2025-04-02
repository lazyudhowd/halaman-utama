
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

	for(xc=0; xc<listPengurus.length; xc++){
		let option = document.createElement("option");

		option.innerText = listPengurus[xc];
		option.value = listPengurus[xc];

		target.appendChild(option)
	}

	document.getElementById("selectMilik").disabled = false;

	generateMenu2(fData, "myoMenuGrup", listPengurus[0]);
}

function generateMenu2(fData, fTarget, fMilik){
	let target = document.getElementById(fTarget);

	for (xx=1; xx<fData.length; xx++){
		
		if(fData[xx].c[3].v == fMilik){
			let elemi = document.createElement("i");
			elemi.setAttribute("class",fData[xx].c[1].v);

			let link = document.createElement("a");
			link.setAttribute("class","list-group-item list-group-item-action text-primary");
			link.setAttribute("target","_blank");
			link.title = fData[xx].c[0].v;
			link.href = fData[xx].c[2].v;
			link.appendChild(elemi)
			link.appendChild(document.createTextNode(" "+fData[xx].c[0].v))

			target.appendChild(link);
		}
	}
}
