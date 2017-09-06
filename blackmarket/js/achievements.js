var totalMoneyAchOwned;
var totalMoneyAch = [
	new Achievement("百万富翁", 					"获得 $1.000 百万的总金额",		1e6),
	new Achievement("亿万富翁",					"获得 $1.000 十亿的总金额",		1e9),
	new Achievement("万亿富翁",					"获得 $1.000 兆的总金额",		1e12),
	new Achievement("Quadrillionaire",				"获得 $1.000 万亿的总金额",	1e15),
	new Achievement("Quintillionaire",				"获得 $1.000 千万亿的总金额",	1e18),
	new Achievement("Sextillionaire",				"获得 $1.000 的总金额",	1e21),
	new Achievement("Septillionaire",				"获得 $1.000 septillion的总金额",	1e24),
	new Achievement("Octillionaire",				"获得 $1.000 千的九次方的总金额",		1e27),
	new Achievement("Nonillionaire (rly?)",			"获得 $1.000 nonillion的总金额",		1e30),
	new Achievement("Decillionnaire (L33t hax0r)",	"获得 $1.000 decillion的总金额",		1e33)
];
var experienceAchOwned;
var experienceAch = [
	new Achievement("经验丰富 I",	"获得 25 经验",					25),
	new Achievement("经验丰富 II",	"获得 100 经验",					100),
	new Achievement("经验丰富 III",	"获得 1,000 经验",				1000),
	new Achievement("经验丰富 IV",	"获得 25,000 经验",				25000),
	new Achievement("经验丰富 V",	"获得 100,000 经验",				100000),
	new Achievement("经验丰富 VI",	"获得 1.000 million 经验",		1e6),
	new Achievement("经验丰富 VII",	"获得 100.000 million 经验",		1e8),
	new Achievement("经验丰富 VIII",	"获得 1.000 billion 经验",		1e9),
	new Achievement("经验丰富 IX",	"获得 250.000 billion 经验",		25e10),
	new Achievement("经验丰富 X",	"获得 1.000 trillion 经验",		1e12),
	new Achievement("声名显赫 I",	"获得 100.000 trillion 经验",		1e14),
	new Achievement("声名显赫 II",	"获得 500.000 trillion 经验",		5e14),
	new Achievement("声名显赫 III",	"获得 1.000 quadrillion 经验",	1e15),
	new Achievement("声名显赫 IV",	"获得 5.000 quadrillion 经验",	5e15),
	new Achievement("声名显赫 V",	"获得 50.000 quadrillion 经验",	5e16)
];
var shootAchOwned;
var shootAch = [
	new Achievement("射手 I",			"射击 1 次",					1),
	new Achievement("射手 II",			"射击 25 次",				25),
	new Achievement("射手 III",			"射击 100 次",				100),
	new Achievement("射手 IV",			"射击 500 次",				500),
	new Achievement("射手 V",			"射击 1,000 次",			1000),
	new Achievement("射手 VI",			"射击 2,500 次",			2500),
	new Achievement("射手 VII",			"射击 5,000 次",			5000),
	new Achievement("射手 VIII",			"射击 10,000 次",			10000),
	new Achievement("射手 IX",			"射击 50,000 次",			50000),
	new Achievement("射手 X",			"射击 100,000 次",			100000),
	new Achievement("射手 精英 I",		"射击 250,000 次",			250000),
	new Achievement("射手 精英 II",		"射击 750,000 次",			750000),
	new Achievement("射手 精英 III",	"射击 1.500 million 次",	1500000),
	new Achievement("射手 精英 IV",		"射击 5.000 million 次",	5000000),
	new Achievement("射手 精英 V",		"射击 10.000 million 次",	10000000),
	new Achievement("射手 精英 VI",		"射击 50.000 million 次",	50000000),
	new Achievement("射手 精英 VII",	"射击 250.000 million 次",	250000000),
	new Achievement("射手 精英 VIII",	"射击 1.000 billion 次",	1000000000),
	new Achievement("射手 精英 IX",		"射击 1.337 billion 次",	1337000000),
	new Achievement("射手 精英 X",		"射击 5.000 billion 次",	5000000000)
];
var reloadAchOwned;
var reloadAch = [
	new Achievement("装弹 I",			"装弹 1 次",				1),
	new Achievement("装弹 II",			"装弹 10 次",				10),
	new Achievement("装弹 III",			"装弹 25 次",				25),
	new Achievement("装弹 IV",			"装弹 50 次",				50),
	new Achievement("装弹 V",			"装弹 100 次",				100),
	new Achievement("装弹 VI",			"装弹 250 次",				250),
	new Achievement("装弹 VII",			"装弹 500 次",				500),
	new Achievement("装弹 VIII",		"装弹 1,000 次",			1000),
	new Achievement("装弹 IX",			"装弹 2,500 次",			2500),
	new Achievement("装弹 X",			"装弹 10,000 次",			10000),
	new Achievement("装弹大师 I",	"装弹 25,000 次",			25000),
	new Achievement("装弹大师 II",	"装弹 50,000 次",			50000),
	new Achievement("装弹大师 III",	"装弹 100,000 次",			100000),
	new Achievement("装弹大师 IV",	"装弹 200,000 次",			200000),
	new Achievement("装弹大师 V",	"装弹 500,000 次",			500000),
	new Achievement("装弹大师 VI",	"装弹 750,000 次",			750000),
	new Achievement("装弹大师 VII",	"装弹 2.500 million 次",	2500000),
	new Achievement("装弹大师 VIII",	"装弹 7.500 million 次",	7500000),
	new Achievement("装弹大师 IX",	"装弹 15.000 million 次",	15000000),
	new Achievement("装弹大师 X",	"装弹 25.000 million 次",	25000000)
];

function Achievement(name, text, reqNum) {
    this.name = name;
    this.text = text;
    this.reqNum = reqNum;
};
Achievement.init = function() {
	totalMoneyAchOwned = [];
	for (var i = 0; i < totalMoneyAch.length; i++) {
		var t = totalMoneyAch[i];
		totalMoneyAchOwned.push(false);
		$("#ach-totalmoney").append('<li id="ach-totalmoney-' + (i+1) + '" class="list-group-item"><b>' + t.name + '</b> : ' + t.text);
	};
	experienceAchOwned = [];
	for (var i = 0; i < experienceAch.length; i++) {
		var e = experienceAch[i];
		experienceAchOwned.push(false);
		$("#ach-experience").append('<li id="ach-experience-' + (i+1) + '" class="list-group-item"><b>' + e.name + '</b> : ' + e.text);
	};
	shootAchOwned = [];
	for (var i = 0; i < shootAch.length; i++) {
		var s = shootAch[i];
		shootAchOwned.push(false);
		$("#ach-shoot").append('<li id="ach-shoot-' + (i+1) + '" class="list-group-item"><b>' + s.name + '</b> : ' + s.text);
	};
	reloadAchOwned = [];
	for (var i = 0; i < reloadAch.length; i++) {
		var r = reloadAch[i];
		reloadAchOwned.push(false);
		$("#ach-reload").append('<li id="ach-reload-' + (i+1) + '" class="list-group-item"><b>' + r.name + '</b> : ' + r.text);
	};
};
Achievement.check = function() {
	for (var i = 0; i < totalMoneyAch.length; i++) {
		var t = totalMoneyAch[i];
		if (money[1] >= t.reqNum) {
			totalMoneyAchOwned[i] = true;
			$("#ach-totalmoney-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
		};
	};
	for (var i = 0; i < experienceAch.length; i++) {
		var e = experienceAch[i];
		if (prestige[0] >= e.reqNum) {
			experienceAchOwned[i] = true;
			$("#ach-experience-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
		};
	};
	for (var i = 0; i < shootAch.length; i++) {
		var s = shootAch[i];
		if (shoot[5] >= s.reqNum) {
			shootAchOwned[i] = true;
			$("#ach-shoot-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
		};
	};
	for (var i = 0; i < reloadAch.length; i++) {
		var r =  reloadAch[i];
		if (shoot[6] >= r.reqNum) {
			reloadAchOwned[i] = true;
			$("#ach-reload-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
		};
	};
};
Achievement.hide = function() {
	if (showAchOwnedCheckBox.checked == false) {
		for (var i = 0; i < totalMoneyAch.length; i++) {
			var t = totalMoneyAch[i];
			if (totalMoneyAchOwned[i] == true) {
				$("#ach-totalmoney-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < experienceAch.length; i++) {
			var e = experienceAch[i];
			if (experienceAchOwned[i] == true) {
				$("#ach-experience-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < shootAch.length; i++) {
			var s = shootAch[i];
			if (shootAchOwned[i] == true) {
				$("#ach-shoot-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < reloadAch.length; i++) {
			var r =  reloadAch[i];
			if (reloadAchOwned[i] == true) {
				$("#ach-reload-" + (i+1)).css("display", "none");
			};
		};
	} else {
		for (var i = 0; i < totalMoneyAch.length; i++) {
			var t = totalMoneyAch[i];
			if (totalMoneyAchOwned[i] == true) {
				$("#ach-totalmoney-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < experienceAch.length; i++) {
			var e = experienceAch[i];
			if (experienceAchOwned[i] == true) {
				$("#ach-experience-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < shootAch.length; i++) {
			var s = shootAch[i];
			if (shootAchOwned[i] == true) {
				$("#ach-shoot-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < reloadAch.length; i++) {
			var r =  reloadAch[i];
			if (reloadAchOwned[i] == true) {
				$("#ach-reload-" + (i+1)).css("display", "block");
			};
		};
	};
};