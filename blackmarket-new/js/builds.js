var weedBuildsOwned;
var weedBuilds = [
    new Build("Build 1",	500,            0.1,    1.60, 0),
    new Build("Build 2",	50000,          0.5,    1.50, 0),
    new Build("Build 3",	1000000,        1.5,   	1.40, 0),
    new Build("Build 4",	250000000,		4.0,    1.30, 0)
];

var methBuildsOwned;
var methBuilds = [
    new Build("Build 1",    250000,         0.1,    1.50, 1),
    new Build("Build 2",    10000000,       0.5,    1.45, 1),
    new Build("Build 3",    500000000,      1.5,	1.40, 1),
    new Build("Build 4",	10000000000,	4.0,    1.35, 1)
];

var cocaineBuildsOwned;
var cocaineBuilds = [
    new Build("Builds 1",	250000000,		0.1,    1.50, 2),
    new Build("Builds 2",	50000000000,    0.5,    1.45, 2),
    new Build("Builds 3",	750000000000,   1.5,	1.40, 2),
    new Build("Builds 4",	25000000000000, 4.0,	1.35, 2)
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
		$("#builds-weed").append('<li id="builds-weed-' + (i+1) + '" class="list-group-item cur-p"><b>' + w.name + '</b> cost : ' + fix(getBuildPrice(i, 0)) + '$<br>Produce ' + fix(getDrugProduction(i, 0)) + "g/sec of <b>weed</b>");
		$("#builds-weed-" + (i+1)).attr("onclick", 'Build.buy(' + i + ', 0);');
		$("#builds-weed-" + (i+1)).append('<span id="builds-weed-owned-' + (i+1) + '" class="badge">' + weedBuildsOwned[i] + ' owned</span>');
	};
	methBuildsOwned = [];
	for (var i = 0; i < methBuilds.length; i++) {
		var m = methBuilds[i];
		methBuildsOwned.push(0);
		$("#builds-meth").append('<li id="builds-meth-' + (i+1) + '" class="list-group-item cur-p"><b>' + m.name + '</b> cost : ' + fix(getBuildPrice(i, 1)) + '$<br>Produce ' + fix(getDrugProduction(i, 1)) + "g/sec of <b>meth</b>");
		$("#builds-meth-" + (i+1)).attr("onclick", 'Build.buy(' + i + ', 1);');
		$("#builds-meth-" + (i+1)).append('<span id="builds-meth-owned-' + (i+1) + '" class="badge">' + methBuildsOwned[i] + ' owned</span>');
	};
	cocaineBuildsOwned = [];
	for (var i = 0; i < cocaineBuilds.length; i++) {
		var c = cocaineBuilds[i];
		cocaineBuildsOwned.push(0);
		$("#builds-cocaine").append('<li id="builds-cocaine-' + (i+1) + '" class="list-group-item cur-p"><b>' + c.name + '</b> cost : ' + fix(getBuildPrice(i, 2)) + '$<br>Produce ' + fix(getDrugProduction(i, 2)) + "g/sec of <b>cocaine</b>");
		$("#builds-cocaine-" + (i+1)).attr("onclick", 'Build.buy(' + i + ', 2);');
		$("#builds-cocaine-" + (i+1)).append('<span id="builds-cocaine-owned-' + (i+1) + '" class="badge">' + cocaineBuildsOwned[i] + ' owned</span>');
	};
};
Build.check = function() {
	Log("Calling Build.check()")
	for (var i = 0; i < weedBuilds.length; i++) {
		var w = weedBuilds[i];
		$("#builds-weed-" + (i+1)).html('<b>' + w.name + '</b> cost : ' + fix(getBuildPrice(i, 0)) + '$<br>Produce ' + fix(getDrugProduction(i, 0)) + "g/sec of <b>weed</b>");
		$("#builds-weed-" + (i+1)).append('<span id="builds-weed-owned-' + (i+1) + '" class="badge">' + weedBuildsOwned[i] + ' owned</span>');
	};
	for (var i = 0; i < methBuilds.length; i++) {
		var m = methBuilds[i];
		$("#builds-meth-" + (i+1)).html('<b>' + m.name + '</b> cost : ' + fix(getBuildPrice(i, 1)) + '$<br>Produce ' + fix(getDrugProduction(i, 1)) + "g/sec of <b>meth</b>");
		$("#builds-meth-" + (i+1)).append('<span id="builds-meth-owned-' + (i+1) + '" class="badge">' + methBuildsOwned[i] + ' owned</span>');		
	};
	for (var i = 0; i < cocaineBuilds.length; i++) {
		var c = cocaineBuilds[i];
		$("#builds-cocaine-" + (i+1)).html('<b>' + c.name + '</b> cost : ' + fix(getBuildPrice(i, 2)) + '$<br>Produce ' + fix(getDrugProduction(i, 2)) + "g/sec of <b>cocaine</b>");
		$("#builds-cocaine-" + (i+1)).append('<span id="builds-cocaine-owned-' + (i+1) + '" class="badge">' + cocaineBuildsOwned[i] + ' owned</span>');		
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
	drugPerSec[0] = (getDrugIncome(0, 0) + getDrugIncome(1, 0) + getDrugIncome(2, 0) + getDrugIncome(3, 0)) - (getDealerSelling(0, 0) + getDealerSelling(1, 0) + getDealerSelling(2, 0) + getDealerSelling(3, 0));
	for (var i = 0; i < weedBuilds.length; i++) {
		var w = weedBuilds[i];
		drugStock[0] += (getDrugIncome(i, 0) * times) / fps;
	};
	drugPerSec[1] = (getDrugIncome(0, 1) + getDrugIncome(1, 1) + getDrugIncome(2, 1) + getDrugIncome(3, 1)) - (getDealerSelling(0, 1) + getDealerSelling(1, 1) + getDealerSelling(2, 1) + getDealerSelling(3, 1));
	for (var i = 0; i < methBuilds.length; i++) {
		var m = methBuilds[i];
		drugStock[1] += (getDrugIncome(i, 1) * times) / fps;
	};
	drugPerSec[2] = (getDrugIncome(0, 2) + getDrugIncome(1, 2) + getDrugIncome(2, 2) + getDrugIncome(3, 2)) - (getDealerSelling(0, 2) + getDealerSelling(1, 2) + getDealerSelling(2, 2) + getDealerSelling(3, 2));
	for (var i = 0; i < cocaineBuilds.length; i++) {
		var c = cocaineBuilds[i];
		drugStock[2] += (getDrugIncome(i, 2) * times) / fps;
	};
};