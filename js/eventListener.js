select = document.getElementById("selectMilik");

select.addEventListener("change", function(){
	console.log(this.value);

	target = document.getElementById("myoMenuGrup");

	target.innerHTML = "";

	generateMenu2(dataUtama.table.rows, "myoMenuGrup", this.value)
});
