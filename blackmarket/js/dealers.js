var weedDealersOwned;
var weedDealers = [
    new Dealer("后院经销商",		250,                0.40,   1.30,	0),
    new Dealer("小时代经销商",		500000,             1,		1.25,	0),
    new Dealer("市中心经销商",		25000000,           3,      1.20,	0),
    new Dealer("夜总会老板",		750000000,          6,      1.15,	0),
];

var methDealersOwned;
var methDealers = [
    new Dealer("黑暗胡同",		1000000,            1.5,   	1.30, 	1),
    new Dealer("冰毒小屋",		750000000,          3,		1.25, 	1),
    new Dealer("当地黑帮",  	50000000000,        6,      1.20, 	1),
    new Dealer("黑手党协会",		1000000000000,		10,     1.15, 	1),
];

var cocaineDealersOwned;
var cocaineDealers = [
    new Dealer("俱乐部司机",      25000000000,        3,		1.30,	2),
    new Dealer("赌场老板",      750000000000,       6,		1.25,	2),
    new Dealer("行政俱乐部主席",      2500000000000,      10,		1.20,	2),
    new Dealer("贩毒集团",      1000000000000000,   18,		1.15,	2)
];

function Dealer(name, price, sell, inflation, jsType) {
	this.name = name;
	this.price = price;
	this.sell = sell;
	this.inflation = inflation;
	this.jsType = jsType;
};
Dealer.init = function() {
	Log("Calling Dealer.init()");
	weedDealersOwned = [];
	for (var i = 0; i < weedDealers.length; i++) {
		var w = weedDealers[i];
		weedDealersOwned.push(0);
		$("#dealers-weed").append('<li id="dealers-weed-' + (i+1) + '" class="list-group-item cur-p"><b>' + w.name + '</b> 花费： $' + fix(getDealerPrice(i, 0), "money") + '<br>出售 ' + fix(getDealerSell(i, 0), "drug") + 'g/秒 <b>大麻</b>');
		$("#dealers-weed-" + (i+1)).attr("onclick", 'Dealer.buy(' + i + ', 0);');
		$("#dealers-weed-" + (i+1)).append('<span id="dealers-weed-owned-' + (i+1) + '" class="badge">' + weedDealersOwned[i] + ' 拥有</span>');
	};
	methDealersOwned = [];
	for (var i = 0; i < methDealers.length; i++) {
		var m = methDealers[i];
		methDealersOwned.push(0);
		$("#dealers-meth").append('<li id="dealers-meth-' + (i+1) + '" class="list-group-item cur-p"><b>' + m.name + '</b> 花费： $' + fix(getDealerPrice(i, 1), "money") + '<br>出售 ' + fix(getDealerSell(i, 1), "drug") + 'g/秒 of <b>冰毒</b>');
		$("#dealers-meth-" + (i+1)).attr("onclick", 'Dealer.buy(' + i + ', 1);');
		$("#dealers-meth-" + (i+1)).append('<span id="dealers-meth-owned-' + (i+1) + '" class="badge">' + methDealersOwned[i] + ' 拥有</span>');
	};
	cocaineDealersOwned = [];
	for (var i = 0; i < cocaineDealers.length; i++) {
		var c = cocaineDealers[i];
		cocaineDealersOwned.push(0);
		$("#dealers-cocaine").append('<li id="dealers-cocaine-' + (i+1) + '" class="list-group-item cur-p"><b>' + c.name + '</b> 花费： $' + fix(getDealerPrice(i, 2), "money") + '<br>出售 ' + fix(getDealerSell(i, 2), "drug") + 'g/秒 of <b>可卡因</b>');
		$("#dealers-cocaine-" + (i+1)).attr("onclick", 'Dealer.buy(' + i + ', 2);');
		$("#dealers-cocaine-" + (i+1)).append('<span id="dealers-cocaine-owned-' + (i+1) + '" class="badge">' + cocaineDealersOwned[i] + ' 拥有</span>');
	};
};
Dealer.check = function() {
	Log("Calling Dealer.check()");
	for (var i = 0; i < weedDealers.length; i++) {
		var w = weedDealers[i];
		$("#dealers-weed-" + (i+1)).html('<b>' + w.name + '</b> 花费： $' + fix(getDealerPrice(i, 0), "money") + '<br>出售 ' + fix(getDealerSell(i, 0), "drug") + 'g/秒 <b>大麻</b>');
		$("#dealers-weed-" + (i+1)).append('<span id="dealers-weed-owned-' + (i+1) + '" class="badge">' + weedDealersOwned[i] + ' 拥有</span>');
	};
	for (var i = 0; i < methDealers.length; i++) {
		var m = methDealers[i];
		$("#dealers-meth-" + (i+1)).html('<b>' + m.name + '</b> 花费： $' + fix(getDealerPrice(i, 1), "money") + '<br>出售 ' + fix(getDealerSell(i, 1), "drug") + 'g/秒 <b>冰毒</b>');
		$("#dealers-meth-" + (i+1)).append('<span id="dealers-meth-owned-' + (i+1) + '" class="badge">' + methDealersOwned[i] + ' 拥有</span>');	
	};
	for (var i = 0; i < cocaineDealers.length; i++) {
		var c = cocaineDealers[i];
		$("#dealers-cocaine-" + (i+1)).html('<b>' + c.name + '</b> 花费： $' + fix(getDealerPrice(i, 2), "money") + '<br>出售 ' + fix(getDealerSell(i, 2), "drug") + 'g/秒 <b>可卡因</b>');
		$("#dealers-cocaine-" + (i+1)).append('<span id="dealers-cocaine-owned-' + (i+1) + '" class="badge">' + cocaineDealersOwned[i] + ' 拥有</span>');	

	};
};
Dealer.buy = function(index, jsType) {
	if (jsType == 0 && money[0] >= getDealerPrice(index, 0)) {
		money[0] -= getDealerPrice(index, 0);
		weedDealersOwned[index]++;
	};
	if (jsType == 1 && money[0] >= getDealerPrice(index, 1)) {
		money[0] -= getDealerPrice(index, 1);
		methDealersOwned[index]++;
	};
	if (jsType == 2 && money[0] >= getDealerPrice(index, 2)) {
		money[0] -= getDealerPrice(index, 2);
		cocaineDealersOwned[index]++;
	};
	Dealer.check();
};
Dealer.sell = function(times) {
	/* thanks to grammarxcore (http://www.reddit.com/user/grammarxcore) for this code! */
	moneyPerSec[0] = 0;
	for (var i = 0; i < weedDealers.length; i++) {
	    var sold = (getDealerSelling(i, 0) * times) / fps;
	    if (sold > drugStock[0]){
	        sold = drugStock[0];
	    };
	    drugStock[0] -= sold;
	    gainMoney(sold * getDrugPrice(0));
	    moneyPerSec[0] += sold * getDrugPrice(0) * fps;
	};

	moneyPerSec[1] = 0;
	for (var i = 0; i < methDealers.length; i++) {
	    var sold = (getDealerSelling(i, 1) * times) / fps;
	    if (sold > drugStock[1]){
	        sold = drugStock[1];
	    };
	    drugStock[1] -= sold;
	    gainMoney(sold * getDrugPrice(1));
	    moneyPerSec[1] += sold * getDrugPrice(1) * fps;
	};

	moneyPerSec[2] = 0;
	for (var i = 0; i < cocaineDealers.length; i++) {
	    var sold = (getDealerSelling(i, 2) * times) / fps;
	    if (sold > drugStock[2]){
	        sold = drugStock[2];
	    };
	    drugStock[2] -= sold;
	    gainMoney(sold * getDrugPrice(2));
	    moneyPerSec[2] += sold * getDrugPrice(2) * fps;
	};
};
