g.builds = g.b = {};
g.b.owned = [];
g.b.multiplier = [];

game.builds.create = function(name, desc, price, priceName, reward, rewardName, inflation) {
	this.name = name;
	this.desc = desc;
	this.price = price;
	this.priceName = priceName;
	this.reward = reward;
	this.rewardName = rewardName;
	this.inflation = inflation;
};
game.builds.init = function() {
	for (var i = 0; i < g.b.list.length; i++) {
		g.b.owned.push(0);
		g.b.multiplier.push(1);
		$("#builds-panelbody").append('<div id="builds-row-' + i + '" class="row bottom-spacer">'
			+ '<div class="col-md-8"><p id="builds-infos-' + i + '" class="no-margin">' + g.b.list[i].name + " : " + g.b.list[i].reward + " " + g.b.list[i].rewardName.toLowerCase() + "/秒<br>"
			+ g.b.owned[i] + " owned : " + h.buildReward(i) + " " + g.b.list[i].rewardName.toLowerCase() + "/秒"
			+ "<br>Cost " + fix(h.buildPrice(i), 0) + " " + g.b.list[i].priceName.toLowerCase() + '</p></div>'
			+ '<div class="col-md-4"><a id="builds-btn-' + i + '" type="button" class="btn btn-primary btn-block" onclick="g.b.buy(' + i + ')">购买建筑</a></div>'
			+ '</div>');
	};
};
game.builds.buy = function(i) {
	var index = g.ressources.list.indexOf(g.b.list[i].priceName);
	var price = h.buildPrice(i);
	if (g.ressources.owned[index] >= price) {
		g.ressources.owned[index] -= price;
		g.b.owned[i]++;
		g.b.update();
	};
};
game.builds.earn = function(times) { // todo
	for (var i = 0; i < g.b.list.length; i++) {
		var index = g.ressources.list.indexOf(g.b.list[i].rewardName);
		for (var e = 0; e < g.ressources.owned.length; e++) {
			if (index == e) {
				g.ressources.owned[e] += (h.buildReward(i) * times) / g.options.fps;
			};
		};
	};
};
game.builds.checkSave = function() {
	if (g.b.owned.length !== g.b.list.length) {
		var a = (g.b.list.length - g.b.owned.length);
		for (var i = 0; i < a; i++)
			g.b.owned.push(0);
	};
};
game.builds.update = function() {
	for (var i = 0; i < g.b.list.length; i++) {
		$("#builds-infos-" + i).html(g.b.list[i].name + " : " + fix(g.b.list[i].reward, 2) + " " + g.b.list[i].rewardName.toLowerCase() + "/秒<br>" + fix(g.b.owned[i], 0) + " 拥有数量 : " + fix(h.buildReward(i), 2) + " " + g.b.list[i].rewardName.toLowerCase() + "/秒" + "<br>花费 " + fix(h.buildPrice(i), 0) + " " + g.b.list[i].priceName.toLowerCase())
	};
};

g.b.list = [
	new g.b.create("氢建筑",	"制造氢", 	25, 	'氢', 	1,		'氢',		1.15),
	new g.b.create("氧建筑",		"制造氧",		25,		'氧',		1,		'氧',		1.15),
	new g.b.create("氦建筑",		"制造氦",		25,		'氦',		1,		'氦',		1.15),
	new g.b.create("生产水",	"制造水",		1500,	'氢',		0.5,	'水',		1.15)
];