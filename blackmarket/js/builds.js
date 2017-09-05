var weedBuildsOwned;
var weedBuilds = [
    new Build("壁橱栽培室",	250,            	0.5,    1.60, 0),
    new Build("后院",	500000,          	2,    	1.50, 0),
    new Build("温室",	25000000,        	4,   	1.40, 0),
    new Build("巴西农场",	750000000,			8,    	1.30, 0),
];

var methBuildsOwned;
var methBuilds = [
    new Build("移动RV实验室",    1000000,         	2,    	1.60, 1),
    new Build("地下实验室",    750000000,       	4,    	1.50, 1),
    new Build("化学品仓库",    50000000000,      	8,		1.40, 1),
    new Build("专业化学实验室",	1000000000000,		12,    	1.30, 1),
];

var cocaineBuildsOwned;
var cocaineBuilds = [
    new Build("小农场",	25000000000,		4,    	1.60, 2),
    new Build("可卡因农场",	750000000000,    	8,    	1.50, 2),
    new Build("玻利维亚农场",	2500000000000,   	12,		1.40, 2),
    new Build("哥伦比亚庄园",	1000000000000000, 	20,		1.30, 2),
];

function Build(name, price, reward, inflation, jsType) {
	this.name = name;
	this.price = price;
	this.reward = reward;
	this.inflation = inflation;
	this.jsType = jsType;
};
Build.init = function() {
	Log("Calling Build.init()");
	weedBuildsOwned = [];
	for (var i = 0; i < weedBuilds.length; i++) {
		var w = weedBuilds[i];
		weedBuildsOwned.push(0);
		$("#builds-weed").append('<li id="builds-weed-' + (i+1) + '" class="list-group-item cur-p"><b>' + w.name + '</b> 花费 : $' + fix(getBuildPrice(i, 0), "money") + '<br>生产 ' + fix(getDrugProduction(i, 0), "drug") + "g/秒  <b>大麻</b>");
		$("#builds-weed-" + (i+1)).attr("onclick", 'Build.buy(' + i + ', 0);');
		$("#builds-weed-" + (i+1)).append('<span id="builds-weed-owned-' + (i+1) + '" class="badge">' + weedBuildsOwned[i] + ' 拥有</span>');
	};
	methBuildsOwned = [];
	for (var i = 0; i < methBuilds.length; i++) {
		var m = methBuilds[i];
		methBuildsOwned.push(0);
		$("#builds-meth").append('<li id="builds-meth-' + (i+1) + '" class="list-group-item cur-p"><b>' + m.name + '</b> 花费 : $' + fix(getBuildPrice(i, 1), "money") + '<br>生产 ' + fix(getDrugProduction(i, 1), "drug") + "g/秒  <b>冰毒</b>");
		$("#builds-meth-" + (i+1)).attr("onclick", 'Build.buy(' + i + ', 1);');
		$("#builds-meth-" + (i+1)).append('<span id="builds-meth-owned-' + (i+1) + '" class="badge">' + methBuildsOwned[i] + ' 拥有</span>');
	};
	cocaineBuildsOwned = [];
	for (var i = 0; i < cocaineBuilds.length; i++) {
		var c = cocaineBuilds[i];
		cocaineBuildsOwned.push(0);
		$("#builds-cocaine").append('<li id="builds-cocaine-' + (i+1) + '" class="list-group-item cur-p"><b>' + c.name + '</b> 花费 : $' + fix(getBuildPrice(i, 2), "money") + '<br>生产 ' + fix(getDrugProduction(i, 2), "drug") + "g/秒  <b>可卡因</b>");
		$("#builds-cocaine-" + (i+1)).attr("onclick", 'Build.buy(' + i + ', 2);');
		$("#builds-cocaine-" + (i+1)).append('<span id="builds-cocaine-owned-' + (i+1) + '" class="badge">' + cocaineBuildsOwned[i] + ' 拥有</span>');
	};
};
Build.check = function() {
	Log("Calling Build.check()")
	for (var i = 0; i < weedBuilds.length; i++) {
		var w = weedBuilds[i];
		$("#builds-weed-" + (i+1)).html('<b>' + w.name + '</b> 花费 : $' + fix(getBuildPrice(i, 0), "money") + '<br>生产 ' + fix(getDrugProduction(i, 0), "drug") + "g/秒  <b>大麻</b>");
		$("#builds-weed-" + (i+1)).append('<span id="builds-weed-owned-' + (i+1) + '" class="badge">' + weedBuildsOwned[i] + ' 拥有</span>');
	};
	for (var i = 0; i < methBuilds.length; i++) {
		var m = methBuilds[i];
		$("#builds-meth-" + (i+1)).html('<b>' + m.name + '</b> 花费 : $' + fix(getBuildPrice(i, 1), "money") + '<br>生产 ' + fix(getDrugProduction(i, 1), "drug") + "g/秒  <b>冰毒</b>");
		$("#builds-meth-" + (i+1)).append('<span id="builds-meth-owned-' + (i+1) + '" class="badge">' + methBuildsOwned[i] + ' 拥有</span>');		
	};
	for (var i = 0; i < cocaineBuilds.length; i++) {
		var c = cocaineBuilds[i];
		$("#builds-cocaine-" + (i+1)).html('<b>' + c.name + '</b> 花费 : $' + fix(getBuildPrice(i, 2), "money") + '<br>生产 ' + fix(getDrugProduction(i, 2), "drug") + "g/秒  <b>可卡因</b>");
		$("#builds-cocaine-" + (i+1)).append('<span id="builds-cocaine-owned-' + (i+1) + '" class="badge">' + cocaineBuildsOwned[i] + ' 拥有</span>');		
	};
};
Build.buy = function(index, jsType) {
	if (jsType == 0 && money[0] >= getBuildPrice(index, 0)) {
		money[0] -= getBuildPrice(index, 0);
		weedBuildsOwned[index]++;
	};
	if (jsType == 1 && money[0] >= getBuildPrice(index, 1)) {
		money[0] -= getBuildPrice(index, 1);
		methBuildsOwned[index]++;
	};
	if (jsType == 2 && money[0] >= getBuildPrice(index, 2)) {
		money[0] -= getBuildPrice(index, 2);
		cocaineBuildsOwned[index]++;
	};
	Build.check();
};
Build.earn = function(times) {
	drugNetPerSec[0] = (getDealerSelling(0, 0) + getDealerSelling(1, 0) + getDealerSelling(2, 0) + getDealerSelling(3, 0));
	drugNetPerSec[1] = (getDealerSelling(0, 1) + getDealerSelling(1, 1) + getDealerSelling(2, 1) + getDealerSelling(3, 1));
	drugNetPerSec[2] = (getDealerSelling(0, 2) + getDealerSelling(1, 2) + getDealerSelling(2, 2) + getDealerSelling(3, 2));

	drugPerSec[0] = (getDrugIncome(0, 0) + getDrugIncome(1, 0) + getDrugIncome(2, 0) + getDrugIncome(3, 0)) - (getDealerSelling(0, 0) + getDealerSelling(1, 0) + getDealerSelling(2, 0) + getDealerSelling(3, 0));
	drugPerSec[1] = (getDrugIncome(0, 1) + getDrugIncome(1, 1) + getDrugIncome(2, 1) + getDrugIncome(3, 1)) - (getDealerSelling(0, 1) + getDealerSelling(1, 1) + getDealerSelling(2, 1) + getDealerSelling(3, 1));
	drugPerSec[2] = (getDrugIncome(0, 2) + getDrugIncome(1, 2) + getDrugIncome(2, 2) + getDrugIncome(3, 2)) - (getDealerSelling(0, 2) + getDealerSelling(1, 2) + getDealerSelling(2, 2) + getDealerSelling(3, 2));

	for (var i = 0; i < weedBuilds.length; i++) {
		var w = weedBuilds[i];
		drugStock[0] += (getDrugIncome(i, 0) * times) / fps;
	};
	for (var i = 0; i < methBuilds.length; i++) {
		var m = methBuilds[i];
		drugStock[1] += (getDrugIncome(i, 1) * times) / fps;
	};
	for (var i = 0; i < cocaineBuilds.length; i++) {
		var c = cocaineBuilds[i];
		drugStock[2] += (getDrugIncome(i, 2) * times) / fps;
	};
};
