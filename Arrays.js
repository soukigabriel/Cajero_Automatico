var imagenes = [];
imagenes["Billete1"] = "Billetes/Billete1.png";
imagenes["Billete5"] = "Billetes/Billete5.png";
imagenes["Billete10"] = "Billetes/Billete10.png";
imagenes["Billete20"] = "Billetes/Billete20.png";
imagenes["Billete50"] = "Billetes/Billete50.png";
imagenes["Billete100"] = "Billetes/Billete100.png";
imagenes["Billete500"] = "Billetes/Billete500.png";

var box = [];
box.push(new Billete("Billete500", 500, 1));
box.push(new Billete("Billete100", 100, 5));
box.push(new Billete("Billete50", 50, 5));
box.push(new Billete("Billete20", 20, 5));
box.push(new Billete("Billete10", 10, 5));
box.push(new Billete("Billete5", 5, 10));
box.push(new Billete("Billete1", 1, 10));