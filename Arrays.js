var imagenes = [];
imagenes["Billete1"] = "https://i.imgur.com/OJ773nI.jpg";
imagenes["Billete5"] = "https://i.imgur.com/AjX2OPo.jpg";
imagenes["Billete10"] = "https://i.imgur.com/5Yo6m0H.jpg";
imagenes["Billete20"] = "https://i.imgur.com/B6HBDqo.jpg";
imagenes["Billete50"] = "https://i.imgur.com/i2mLBxk.jpg";
imagenes["Billete100"] = "https://i.imgur.com/g52CU38.jpg";
imagenes["Billete500"] = "https://i.imgur.com/toPa4Jr.jpg";

var box = [];
box.push(new Billete("Billete500", 500, 1));
box.push(new Billete("Billete100", 100, 5));
box.push(new Billete("Billete50", 50, 5));
box.push(new Billete("Billete20", 20, 5));
box.push(new Billete("Billete10", 10, 5));
box.push(new Billete("Billete5", 5, 10));
box.push(new Billete("Billete1", 1, 10));