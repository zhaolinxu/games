var shopHelmets = [
	new Helmet("新手头盔",				0,		1,		15,		"img/C_Hat03.png"),
	new Helmet("青铜头盔",				2500,	5,		100,	"img/C_Elm01.png"),
	new Helmet("钢铁头盔",				12500,	15,		250,	"img/C_Elm02.png"),
	new Helmet("骑士头盔",				22000,	25,		600,	"img/C_Elm03.png")
];
var shopArmours = [
	new Armour("新手",				0,		1,		40,		"img/A_Clothing02.png"),
	new Armour("青铜盔甲",				3500,	5,		150,	"img/A_Armour01.png"),
	new Armour("钢铁盔甲",				17000,	15,		375,	"img/A_Armour02.png"),
	new Armour("铜盔甲",				35000,	25,		950,	"img/A_Armor05.png")
];
var shopGloves = [
	new Gloves("新手手套",				0,		1,		10,		"img/Ac_Gloves02.png"),
	new Gloves("皮革手套",			2500,	5,		70,		"img/Ac_Gloves01.png"),
	new Gloves("强化皮革手套",	12500,	15,		175,	"img/Ac_Gloves04.png"),
	new Gloves("钢铁手套",				19000,	25,		500,	"img/Ac_Gloves05.png")
];
var shopBoots = [
	new Boots("新手靴子",				0,		1,		30,		"img/A_Shoes01.png"),
	new Boots("加强型靴子",			2000,	5,		90,		"img/A_Shoes03.png"),
	new Boots("钢铁靴子",					15000,	15,		200,	"img/A_Shoes07.png"),
	new Boots("强化铁靴子",		20000,	25,		550,	"img/A_Shoes04.png")
];
var shopSwords = [
	new Sword("新手剑",				0,		1,		5,		"img/W_Sword001.png"),
	new Sword("加强型剑",			3500,	5,		15,		"img/W_Sword005.png"),
	new Sword("钢铁剑",					15000,	15,		40,		"img/W_Sword007.png"),
	new Sword("神秘之剑",				30000,	25,		200,	"img/W_Sword009.png")
];

var helmetsOwned = []; var armoursOwned = []; var glovesOwned = []; var bootsOwned = []; var amuletsOwned = []; var swordOwned = [];

// helmets
function Helmet(name, price, reqLevel, armorPts, img) {
	this.name = name;
	this.price = price;
	this.reqLevel = reqLevel;
	this.armorPts = armorPts
	this.img = img;
};
// armours
function Armour(name, price, reqLevel, armorPts, img) {
	this.name = name;
	this.price = price;
	this.reqLevel = reqLevel;
	this.armorPts = armorPts
	this.img = img;
};
// gloves
function Gloves(name, price, reqLevel, armorPts, img) {
	this.name = name;
	this.price = price;
	this.reqLevel = reqLevel;
	this.armorPts = armorPts
	this.img = img;
};
// boots
function Boots(name, price, reqLevel, armorPts, img) {
	this.name = name;
	this.price = price;
	this.reqLevel = reqLevel;
	this.armorPts = armorPts
	this.img = img;
};
// sword
function Sword(name, price, reqLevel, damagePts, img) {
	this.name = name;
	this.price = price;
	this.reqLevel = reqLevel;
	this.damagePts = damagePts
	this.img = img;
};

// shop
function Shop (argument) { Log("This is needed to make the other Shop.() functions to work."); };
Shop.buy = function(itemType, index) {
	if (itemType == 'helmet' && (ps.gold >= shopHelmets[index].price & ps.level >= shopHelmets[index].reqLevel)) {
		ps.gold -= shopHelmets[index].price;
		helmetsOwned[index] = true;
		$("#s-helmet-btn-info" + (index+1)).attr("onclick", "");
		$("#s-helmet-btn-info" + (index+1)).html("拥有");
	};
	if (itemType == 'armour' && (ps.gold >= shopArmours[index].price & ps.level >= shopArmours[index].reqLevel)) {
		ps.gold -= shopArmours[index].price;
		armoursOwned[index] = true;
		$("#s-armour-btn-info" + (index+1)).attr("onclick", "");
		$("#s-armour-btn-info" + (index+1)).html("拥有");
	};
	if (itemType == 'gloves' && (ps.gold >= shopGloves[index].price & ps.level >= shopGloves[index].reqLevel)) {
		ps.gold -= shopGloves[index].price;
		glovesOwned[index] = true;
		$("#s-gloves-btn-info" + (index+1)).attr("onclick", "");
		$("#s-gloves-btn-info" + (index+1)).html("拥有");
	};
	if (itemType == 'boots' && (ps.gold >= shopBoots[index].price & ps.level >= shopBoots[index].reqLevel)) {
		ps.gold -= shopBoots[index].price;
		bootsOwned[index] = true;
		$("#s-boots-btn-info" + (index+1)).attr("onclick", "");
		$("#s-boots-btn-info" + (index+1)).html("拥有");
	};
	if (itemType == 'sword' && (ps.gold >= shopSwords[index].price & ps.level >= shopSwords[index].reqLevel)) {
		ps.gold -= shopSwords[index].price;
		swordOwned[index] = true;
		$("#s-sword-btn-info" + (index+1)).attr("onclick", "");
		$("#s-sword-btn-info" + (index+1)).html("拥有");
	};
	Shop.check();
};
Shop.init = function() {
	Log("Calling Shop.init()");
	for (var i = 0; i < shopHelmets.length; i++) {
		var s = shopHelmets[i];
		helmetsOwned.push(false);
		$("#s-helmet-n" + (i+1)).html('<img class="stats" src="' + s.img + '"> ' + s.name);
		$("#s-helmet-p" + (i+1)).html(beautify(s.price, 0) + " 黄金");
		$("#s-helmet-s" + (i+1)).html("+" + s.armorPts + " 装甲");
		$("#s-helmet-l" + (i+1)).html(s.reqLevel);
		$("#s-helmet-btn" + (i+1)).html('<a id="s-helmet-btn-info' + (i+1) + '" class="btn btn-primary btn-sm center-btn">购买</a>');
		$("#s-helmet-btn-info" + (i+1)).attr("onclick", "Shop.buy('helmet', " + i + ");");
	};
	for (var i = 0; i < shopArmours.length; i++) {
		var s = shopArmours[i];
		armoursOwned.push(false);
		$("#s-armour-n" + (i+1)).html('<img class="stats" src="' + s.img + '"> ' + s.name);
		$("#s-armour-p" + (i+1)).html(beautify(s.price, 0) + " 黄金");
		$("#s-armour-s" + (i+1)).html("+" + s.armorPts + " 装甲");
		$("#s-armour-l" + (i+1)).html(s.reqLevel);
		$("#s-armour-btn" + (i+1)).html('<a id="s-armour-btn-info' + (i+1) + '" class="btn btn-primary btn-sm center-btn">购买</a>');
		$("#s-armour-btn-info" + (i+1)).attr("onclick", "Shop.buy('armour', " + i + ");");
	};
	for (var i = 0; i < shopGloves.length; i++) {
		var s = shopGloves[i];
		glovesOwned.push(false);
		$("#s-gloves-n" + (i+1)).html('<img class="stats" src="' + s.img + '"> ' + s.name);
		$("#s-gloves-p" + (i+1)).html(beautify(s.price, 0) + " 黄金");
		$("#s-gloves-s" + (i+1)).html("+" + s.armorPts + " 装甲");
		$("#s-gloves-l" + (i+1)).html(s.reqLevel);
		$("#s-gloves-btn" + (i+1)).html('<a id="s-gloves-btn-info' + (i+1) + '" class="btn btn-primary btn-sm center-btn">购买</a>');
		$("#s-gloves-btn-info" + (i+1)).attr("onclick", "Shop.buy('gloves', " + i + ");");
	};
	for (var i = 0; i < shopBoots.length; i++) {
		var s = shopBoots[i];
		bootsOwned.push(false);
		$("#s-boots-n" + (i+1)).html('<img class="stats" src="' + s.img + '"> ' + s.name);
		$("#s-boots-p" + (i+1)).html(beautify(s.price, 0) + " 黄金");
		$("#s-boots-s" + (i+1)).html("+" + s.armorPts + " 装甲");
		$("#s-boots-l" + (i+1)).html(s.reqLevel);
		$("#s-boots-btn" + (i+1)).html('<a id="s-boots-btn-info' + (i+1) + '" class="btn btn-primary btn-sm center-btn">购买</a>');
		$("#s-boots-btn-info" + (i+1)).attr("onclick", "Shop.buy('boots', " + i + ");");
	};
	for (var i = 0; i < shopSwords.length; i++) {
		var s = shopSwords[i];
		swordOwned.push(false);
		$("#s-sword-n" + (i+1)).html('<img class="stats" src="' + s.img + '"> ' + s.name);
		$("#s-sword-p" + (i+1)).html(beautify(s.price, 0) + " 黄金");
		$("#s-sword-s" + (i+1)).html("+" + s.damagePts + " 攻击");
		$("#s-sword-l" + (i+1)).html(s.reqLevel);
		$("#s-sword-btn" + (i+1)).html('<a id="s-sword-btn-info' + (i+1) + '" class="btn btn-primary btn-sm center-btn">购买</a>');
		$("#s-sword-btn-info" + (i+1)).attr("onclick", "Shop.buy('sword', " + i + ");");
	};
	helmetsOwned[0] = true;
	armoursOwned[0] = true;
	glovesOwned[0] = true;
	bootsOwned[0] = true;
	swordOwned[0] = true;
};
Shop.check = function() {
	Log("Calling Shop.check()");
	for (var i = 0; i < shopHelmets.length; i++) {
		if (helmetsOwned[i] == true) {
			$("#s-helmet-btn-info" + (i+1)).addClass("btn-info");
			$("#s-helmet-btn-info" + (i+1)).attr("onclick", "");
			$("#s-helmet-btn-info" + (i+1)).html("拥有");
			$("#inv-helmet-" + i).remove();
			$("#inv-helmet").append('<option id="inv-helmet-' + i + '" value="' + i + '">' + shopHelmets[i].name + ' - ' + shopHelmets[i].armorPts + ' armor</option>');
		};
	};
	for (var i = 0; i < shopArmours.length; i++) {
		if (armoursOwned[i] == true) {
			$("#s-armour-btn-info" + (i+1)).addClass("btn-info");
			$("#s-armour-btn-info" + (i+1)).attr("onclick", "");
			$("#s-armour-btn-info" + (i+1)).html("拥有");
			$("#inv-armour-" + i).remove();
			$("#inv-armour").append('<option id="inv-armour-' + i + '" value="' + i + '">' + shopArmours[i].name + ' - ' + shopArmours[i].armorPts + ' armor</option>');
		};
	};
	for (var i = 0; i < shopGloves.length; i++) {
		if (glovesOwned[i] == true) {
			$("#s-gloves-btn-info" + (i+1)).addClass("btn-info");
			$("#s-gloves-btn-info" + (i+1)).attr("onclick", "");
			$("#s-gloves-btn-info" + (i+1)).html("拥有");
			$("#inv-gloves-" + i).remove();
			$("#inv-gloves").append('<option id="inv-gloves-' + i + '" value="' + i + '">' + shopGloves[i].name + ' - ' + shopGloves[i].armorPts + ' armor</option>');
		};
	};
	for (var i = 0; i < shopBoots.length; i++) {
		if (bootsOwned[i] == true) {
			$("#s-boots-btn-info" + (i+1)).addClass("btn-info");
			$("#s-boots-btn-info" + (i+1)).attr("onclick", "");
			$("#s-boots-btn-info" + (i+1)).html("拥有");
			$("#inv-boots-" + i).remove();
			$("#inv-boots").append('<option id="inv-boots-' + i + '" value="' + i + '">' + shopBoots[i].name + ' - ' + shopBoots[i].armorPts + ' armor</option>');
		};
	};
	for (var i = 0; i < shopSwords.length; i++) {
		if (swordOwned[i] == true) {
			$("#s-sword-btn-info" + (i+1)).addClass("btn-info");
			$("#s-sword-btn-info" + (i+1)).attr("onclick", ""),
			$("#s-sword-btn-info" + (i+1)).html("拥有");
			$("#inv-sword-" + i).remove();
			$("#inv-sword").append('<option id="inv-sword-' + i + '" value="' + i + '">' + shopSwords[i].name + ' - ' + shopSwords[i].damagePts + ' damage</option>');
		};
	};
};