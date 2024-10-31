select = document.getElementById("selectMilik");

select.addEventListener("change", function(){
	target = document.getElementById("targetMenu");
	target.innerHTML = "";
	generateMenu(dataUtama.table.rows, "targetMenu", this.value)
});
