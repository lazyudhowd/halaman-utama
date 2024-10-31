let dataSpreadSheet = "https://docs.google.com/spreadsheets/d/1v54xtwi8ezIHAMa6I68d3OTiwhCEz-JgDwuuUosS1bw/gviz/tq?";

let dataUtama = {};

fetch(dataSpreadSheet)
.then(res => res.text())
.then(retrieve => {
	// memodifikasi data yang diambil dari spreadsheet menghilangkan bagian "google.visualization.Query.setResponse"
	// serta beberapa tanda kurung
	let parseData = retrieve.substr(47).slice(0,-2);

	// membuat objek json
	let jsonObject = JSON.parse(parseData);

	dataUtama = jsonObject;

	generateOption(jsonObject.table.rows, "selectMilik")
});
