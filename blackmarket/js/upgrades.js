var shootRewardUpgradesOwned;
var shootRewardUpgrades = [
    new Upgrade("纸张目标",                                10,         			    function() { shoot[7] *= 5 },   "射击奖励 x5"),
    new Upgrade("纸张目标 II",                             100,         			    function() { shoot[7] *= 4 },   "射击奖励 x4"),
    new Upgrade("发光黑暗的纸张目标",               240,         			    function() { shoot[7] *= 2 },   "射击奖励 x2"),
	new Upgrade("室内范围",                                 650,         			    function() { shoot[7] *= 1.5 }, "射击奖励 x1.5"),
    new Upgrade("室内范围 II",                              15000,        			    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("室内范围升级",                         32000,       			    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("移动目标",                               240000,      			    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("移动目标 II",		                    2040000,					function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("快速目标",	                            132500000,				    function() { shoot[7] *= 2.66 },"射击奖励 x2.66"),
    new Upgrade("私人教练",	                            3850000000,				    function() { shoot[7] *= 2.88 },"射击奖励 x2.88"),
    new Upgrade("相机评测系统",		                    27500000000, 			    function() { shoot[7] *= 3 },   "射击奖励 x3"),
    new Upgrade("数字冲击系统",		                5000000000000,			    function() { shoot[7] *= 3 },   "射击奖励 x3"),
    new Upgrade("室内范围 III",		                        25000000000000,			    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("Indoor Range Armory",		                    250000000000000,			function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("200 Acre Outdoor Rifle Range",		            3500000000000000,		    function() { shoot[7] *= 1.5 }, "射击奖励 x1.5"),
    new Upgrade("Rifle Range Tower",		                    10000000000000000,		    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("Tower Laser Range Finder",		                150000000000000000,		    function() { shoot[7] *= 1.5 }, "射击奖励 x1.5"),
    new Upgrade("Tower Digital Impact System",		            750000000000000000,		    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("Indoor Range Bar",		                        1500000000000000000,	    function() { shoot[7] *= 3 },   "射击奖励 x3"),
    new Upgrade("250 Acre Close-Quarter Marksman Range",		10000000000000000000,	    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("Close-Quarter Range Instructor",		        12500000000000000000,	    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("Close-Quarter Range Tower",		            25000000000000000000,	    function() { shoot[7] *= 2 },   "射击奖励 x2"),
    new Upgrade("Sniper School",		                        50000000000000000000,	    function() { shoot[7] *= 3 },   "射击奖励 x3"),
    new Upgrade("2,000 Acre Sniper Range",		                75000000000000000000,	    function() { shoot[7] *= 3 },   "射击奖励 x3"),
    new Upgrade("狙击手距离数码检修",		        500000000000000000000,	    function() { shoot[7] *= 2 },   "射击奖励 x2"),
	new Upgrade("25,000 英亩范围扩张/升级",          1000000000000000000000,     function() { shoot[7] *= 2 },   "射击奖励 x2")
];

var shootTimeUpgradesOwned;
var shootTimeUpgrades = [
    new Upgrade("Weston Select Trigger",     		90,         				function() { shoot[3] /= 1.5 },     "射击时间 /1.5"),
    new Upgrade("Trigger Assembly Upgrade",     	630,        				function() { shoot[3] /= 1.5 },     "射击时间 /1.5"),
    new Upgrade("Selector Switch Upgrade",     		5750,       				function() { shoot[3] /= 1.25 },    "射击时间 /1.25"),
    new Upgrade("Hammer Upgrade",     				50000,      				function() { shoot[3] /= 1.25 },    "射击时间 /1.25"),
    new Upgrade("Automatic Selector",				375000,						function() { shoot[3] /= 1.10 },    "射击时间 /1.10"),
    new Upgrade("BuzzFire Trigger Kit",				1000000000,					function() { shoot[3] /= 1.10 },    "射击时间 /1.10"),
    new Upgrade("Internal Hammer",					1000000000000,				function() { shoot[3] /= 1.25 },    "射击时间 /1.25"),
    new Upgrade("Competition Shooter Series Kit",	1000000000000000,			function() { shoot[3] /= 1.25 },    "射击时间 /1.25"),
    new Upgrade("Fully Automatic Kit",				1000000000000000000,		function() { shoot[3] /= 1.25 },    "射击时间 /1.25"),
    new Upgrade("Special Operations Kit",			1000000000000000000000,		function() { shoot[3] /= 1.25 },    "射击时间 /1.25")
];

var ammoStockUpgradesOwned;
var ammoStockUpgrades = [
    new Upgrade("Ammunition Pouch",      		        100,         	    function() { shoot[2] *= 2 },    "弹夹容量 x2"),
    new Upgrade("Extra Magazine",      			        25000,       	    function() { shoot[2] *= 2 },    "弹夹容量 x2"),
    new Upgrade("LR Magazine Extension kit",	        150000,      	    function() { shoot[2] *= 2 },    "弹夹容量 x2"),
    new Upgrade("X250 Dual Sport Magazine",		        75000000,		    function() { shoot[2] *= 2 },    "弹夹容量 x2"),
	new Upgrade("Miles Gear Triple Slot Magazine",		500000000,		    function() { shoot[2] *= 2 },    "弹夹容量 x2")
];

var reloadTimeUpgradesOwned;
var reloadTimeUpgrades = [
    new Upgrade("Magazine Ejector",    					270,        	    function() { shoot[4] /= 1.50 },    "装弹时间 /1.50"),
    new Upgrade("Magazine Ejector Upgrade",    			2000,       	    function() { shoot[4] /= 1.50 },    "装弹时间 /1.50"),
    new Upgrade("Integrated Ejection Switch",   		17500,      	    function() { shoot[4] /= 1.25 },    "装弹时间 /1.25"),
    new Upgrade("Automatic Ejection System",   			125000,     	    function() { shoot[4] /= 1.25 },    "装弹时间 /1.25"),
    new Upgrade("Competitive Series Ejector",			10000000,		    function() { shoot[4] /= 1.10 },    "装弹时间 /1.10"),
    new Upgrade("Wulframe Signature Series Ejector",	10000000000,	    function() { shoot[4] /= 1.25 },    "装弹时间 /1.25"),
    new Upgrade("Gold Industries PlatinumX Ejector",	10000000000000,	    function() { shoot[4] /= 1.25 },    "装弹时间 /1.25"),
	new Upgrade("Special Operations Ejection System",	100000000000000,	function() { shoot[4] /= 1.25 },    "装弹时间 /1.25")
];

var weedPriceUpgradesOwned;
var weedPriceUpgrades = [
    new Upgrade("Field Expansion I",                        5000,					    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Field Expansion II",                       24000,					    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Field Expansion III",                      145000,					    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Harvesting Equipment",                     2150000,					function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Field Expansion",		                    32500000,				    function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("Worker Smoke Area",		                7500000000,				    function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("Harvesting Equipment II",		            5000000000000,			    function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("Worker Training",		                    500000000000000,			function() { drugMultiplier[0] *= 5 },    "大麻价格 x5"),
    new Upgrade("Extra Workers",		                    2500000000000000,			function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("Field Expansion IV",		                5000000000000000,		    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Biologists",		                        10000000000000000,		    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Biologists II",		                    250000000000000000,		    function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("High-Tech Security System",		        1000000000000000000,		function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Research Institution",		                5000000000000000000,		function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("Advanced Biology Laboratory",		        25000000000000000000,	    function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("转基因大麻 I",		        75000000000000000000,	    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
	new Upgrade("转基因大麻 II",             125000000000000000000,      function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
	new Upgrade("转基因大麻 III",	        725000000000000000000,	    function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("转基因大麻 IV",	            1750000000000000000000,	    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
	new Upgrade("转基因大麻 V",              12500000000000000000000,    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("另一大麻价格升级...",            150000000000000000000000,   function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("另一大麻价格升级...",            650000000000000000000000,   function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("另一大麻价格升级...",            1250000000000000000000000,  function() { drugMultiplier[0] *= 3 },    "大麻价格 x3"),
    new Upgrade("另一大麻价格升级...",            150000000000000000000000000,    function() { drugMultiplier[0] *= 2 },    "大麻价格 x2"),
    new Upgrade("另一大麻价格升级...",            750000000000000000000000000,    function() { drugMultiplier[0] *= 3 },    "大麻价格 x3")
];

var methPriceUpgradesOwned;
var methPriceUpgrades = [
    new Upgrade("化学家",                          2500000,				    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("存储设备",                10000000,				    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("烧杯",                          500000000,				    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("烧杯 II",                       2500000000,				    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("量筒",		        99999000000,			    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("安全设备",		            5000000000000,			    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("化学家 II",		                85000000000000,			    function() { drugMultiplier[1] *= 4 },    "冰毒价格 x4"),
    new Upgrade("化学燃烧器",		            950000000000000,		    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("存储瓶",		            5000000000000000,		    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("存储瓶 II",		            50000000000000000,		    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("+20 化学师",		                500000000000000000,		    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("生物学家",		                750000000000000000,		    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("塞斯纳运输机",		2500000000000000000,	    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("+5 生物学家",		            12500000000000000000,	    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("骡子运输",		            50000000000000000000,	    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("全新设备",		        321000000000000000000,	    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
	new Upgrade("管，许多管",		        750000000000000000000,	    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
	new Upgrade("高科技实验室",	                1500000000000000000000,	    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
	new Upgrade("常青藤化学家",	            5000000000000000000000,	    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
	new Upgrade("Amezcua最先进的实验室",	    10000000000000000000000,	function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("另一个冰毒的价格升级...",    150000000000000000000000,   function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("另一个冰毒的价格升级...",    750000000000000000000000,   function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("另一个冰毒的价格升级...",    13500000000000000000000000,     function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3"),
    new Upgrade("另一个冰毒的价格升级...",    250000000000000000000000000,    function() { drugMultiplier[1] *= 2 },    "冰毒价格 x2"),
    new Upgrade("另一个冰毒的价格升级...",    950000000000000000000000000,    function() { drugMultiplier[1] *= 3 },    "冰毒价格 x3")
];

var cocainePriceUpgradesOwned;
var cocainePriceUpgrades = [
    new Upgrade("丛林实验室",                           30000000000,			    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("小化学实验室",                   250000000000,			    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("包装机",                    750000000000,     		    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("化学出版社",                       1500000000000,    		    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("垃圾桶可以混合",                   5000000000000,			    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("汽油箱",		            25000000000000,			    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("可卡因碱过滤器",		            750000000000000,		    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("可卡因烘干机",		        3500000000000000,		    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("液压机",		                75000000000000000,		    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("微波炉",		                500000000000000000,		    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("工业制冷设备",		        1000000000000000000,	    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("绑架更多的工人",		            25000000000000000000,	    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("领域扩张 I",		            50000000000000000000,	    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("领域扩张 II",		            125000000000000000000,	    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("领域扩张 III",		            654000000000000000000,	    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("领域扩张 IV",		            1500000000000000000000,	    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
	new Upgrade("厨房改造",		                2500000000000000000000,	    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("专业的地下实验室",		    5000000000000000000000,	    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("田地扩建 V",		            12500000000000000000000,	function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("田地扩建 VI",		            65400000000000000000000,	function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("专业地下实验室 II",		150000000000000000000000,	function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("另一个可卡因的价格升级...",     1000000000000000000000000,  function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("另一个可卡因的价格升级...",     25000000000000000000000000,     function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("另一个可卡因的价格升级...",     175000000000000000000000000,    function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3"),
    new Upgrade("另一个可卡因的价格升级...",     825000000000000000000000000,    function() { drugMultiplier[2] *= 2 },    "可卡因价格 x2"),
    new Upgrade("另一个可卡因的价格升级...",     10000000000000000000000000000,  function() { drugMultiplier[2] *= 3 },    "可卡因价格 x3")
];

function Upgrade(name, price, run, desc) {
	this.name = name;
	this.price = price;
	this.run = run;
    this.desc = desc;
};
Upgrade.init = function() {
	Log("Calling Upgrade.init()");
	shootRewardUpgradesOwned = [];
	shootTimeUpgradesOwned = [];
	ammoStockUpgradesOwned = [];
	reloadTimeUpgradesOwned = [];
	weedPriceUpgradesOwned = [];
	methPriceUpgradesOwned = [];
	cocainePriceUpgradesOwned = [];

	for (var i = 0; i < shootRewardUpgrades.length; i++) {
		var s = shootRewardUpgrades[i];
		shootRewardUpgradesOwned.push(false);
		$("#up-shoot-reward").append('<li id="up-shoot-reward-' + (i+1) + '" class="list-group-item cur-p"><b>' + s.name + ' </b>: ' + s.desc + ' - <i>花费 $' + fix(s.price, "money") + '</i></li>');
		$("#up-shoot-reward-" + (i+1)).attr("onclick", "Upgrade.buy('shoot-reward', " + i + ");");
	};
	for (var i = 0; i < shootTimeUpgrades.length; i++) {
		var s = shootTimeUpgrades[i];
		shootTimeUpgradesOwned.push(false);
		$("#up-shoot-time").append('<li id="up-shoot-time-' + (i+1) + '" class="list-group-item cur-p"><b>' + s.name + ' </b>: ' + s.desc + ' - <i>花费 $' + fix(s.price, "money") + '</i></li>');
		$("#up-shoot-time-" + (i+1)).attr("onclick", "Upgrade.buy('shoot-time', " + i + ");");
	};
	for (var i = 0; i < ammoStockUpgrades.length; i++) {
		var a = ammoStockUpgrades[i];
		ammoStockUpgradesOwned.push(false);
		$("#up-ammo-stock").append('<li id="up-ammo-stock-' + (i+1) + '" class="list-group-item cur-p"><b>' + a.name + ' </b>: ' + a.desc + ' - <i>花费 $' + fix(a.price, "money") + '</i></li>');
		$("#up-ammo-stock-" + (i+1)).attr("onclick", "Upgrade.buy('ammo-stock', " + i + ");");
	};
	for (var i = 0; i < reloadTimeUpgrades.length; i++) {
		var r = reloadTimeUpgrades[i];
		reloadTimeUpgradesOwned.push(false);
		$("#up-reload-time").append('<li id="up-reload-time-' + (i+1) + '" class="list-group-item cur-p"><b>' + r.name + ' </b>: ' + r.desc + ' - <i>花费 $' + fix(r.price, "money") + '</i></li>');
		$("#up-reload-time-" + (i+1)).attr("onclick", "Upgrade.buy('reload-time', " + i + ");");
	};
	for (var i = 0; i < weedPriceUpgrades.length; i++) {
		var w = weedPriceUpgrades[i];
		weedPriceUpgradesOwned.push(false);
		$("#up-weed-price").append('<li id="up-weed-price-' + (i+1) + '" class="list-group-item cur-p"><b>' + w.name + ' </b>: ' + w.desc + ' - <i>花费 $' + fix(w.price, "money") + '</i></li>');
		$("#up-weed-price-" + (i+1)).attr("onclick", "Upgrade.buy('weed-price', " + i + ");");
	};
	for (var i = 0; i < methPriceUpgrades.length; i++) {
		var m = methPriceUpgrades[i];
		methPriceUpgradesOwned.push(false);
		$("#up-meth-price").append('<li id="up-meth-price-' + (i+1) + '" class="list-group-item cur-p"><b>' + m.name + ' </b>: ' + m.desc + ' - <i>花费 $' + fix(m.price, "money") + '</i></li>');
		$("#up-meth-price-" + (i+1)).attr("onclick", "Upgrade.buy('meth-price', " + i + ");");
	};
	for (var i = 0; i < cocainePriceUpgrades.length; i++) {
		var c = cocainePriceUpgrades[i];
		cocainePriceUpgradesOwned.push(false);
		$("#up-cocaine-price").append('<li id="up-cocaine-price-' + (i+1) + '" class="list-group-item cur-p"><b>' + c.name + ' </b>: ' + c.desc + ' - <i>花费 $' + fix(c.price, "money") + '</i></li>');
		$("#up-cocaine-price-" + (i+1)).attr("onclick", "Upgrade.buy('cocaine-price', " + i + ");");
	};
};
Upgrade.saveCheck = function() {
	Log("Calling Upgrade.saveCheck()");
	for (var i = 0; i < shootRewardUpgrades.length; i++) {
		var s = shootRewardUpgrades[i];
		if (shootRewardUpgradesOwned[i] == true) {
			$("#up-shoot-reward-" + (i+1)).attr("onclick", "");
			$("#up-shoot-reward-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
			$("#up-shoot-reward-" + (i+1)).append('<span class="badge">Owned</span>');
		};
	};
	for (var i = 0; i < shootTimeUpgrades.length; i++) {
		var s = shootTimeUpgrades[i];
		if (shootTimeUpgradesOwned[i] == true) {
			$("#up-shoot-time-" + (i+1)).attr("onclick", "");
			$("#up-shoot-time-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
			$("#up-shoot-time-" + (i+1)).append('<span class="badge">Owned</span>');
		};
	};
	for (var i = 0; i < ammoStockUpgrades.length; i++) {
		var a = ammoStockUpgrades[i];
		if (ammoStockUpgradesOwned[i] == true) {
			$("#up-ammo-stock-" + (i+1)).attr("onclick", "");
			$("#up-ammo-stock-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
			$("#up-ammo-stock-" + (i+1)).append('<span class="badge">Owned</span>');
		};
	};
	for (var i = 0; i < reloadTimeUpgrades.length; i++) {
		var r = reloadTimeUpgrades[i];
		if (reloadTimeUpgradesOwned[i] == true) {
			$("#up-reload-time-" + (i+1)).attr("onclick", "");
			$("#up-reload-time-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
			$("#up-reload-time-" + (i+1)).append('<span class="badge">Owned</span>');
		};
	};
	for (var i = 0; i < weedPriceUpgrades.length; i++) {
		var w = weedPriceUpgrades[i];
		if (weedPriceUpgradesOwned[i] == true) {
			$("#up-weed-price-" + (i+1)).attr("onclick", "");
			$("#up-weed-price-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
			$("#up-weed-price-" + (i+1)).append('<span class="badge">Owned</span>');
		};
	};
	for (var i = 0; i < methPriceUpgrades.length; i++) {
		var m = methPriceUpgrades[i];
		if (methPriceUpgradesOwned[i] == true) {
			$("#up-meth-price-" + (i+1)).attr("onclick", "");
			$("#up-meth-price-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
			$("#up-meth-price-" + (i+1)).append('<span class="badge">Owned</span>');
		};
	};
	for (var i = 0; i < cocainePriceUpgrades.length; i++) {
		var c = cocainePriceUpgrades[i];
		if (cocainePriceUpgradesOwned[i] == true) {
			$("#up-cocaine-price-" + (i+1)).attr("onclick", "");
			$("#up-cocaine-price-" + (i+1)).attr("class", "list-group-item up-list-group-owned");
			$("#up-cocaine-price-" + (i+1)).append('<span class="badge">Owned</span>');
		};
	};
	Upgrade.hide();
};
Upgrade.buy = function(type, index) {
	if (type == 'shoot-reward' && money[0] >= shootRewardUpgrades[index].price) {
		money[0] -= shootRewardUpgrades[index].price;
		shootRewardUpgradesOwned[index] = true;
		shootRewardUpgrades[index].run();
		$("#up-shoot-reward-" + (index+1)).attr("onclick", "");
		$("#up-shoot-reward-" + (index+1)).attr("class", "list-group-item up-list-group-owned");
		$("#up-shoot-reward-" + (index+1)).append('<span class="badge">Owned</span>');
	};
	if (type == 'shoot-time' && money[0] >= shootTimeUpgrades[index].price) {
		money[0] -= shootTimeUpgrades[index].price;
		shootTimeUpgradesOwned[index] = true;
		shootTimeUpgrades[index].run();
		$("#up-shoot-time-" + (index+1)).attr("onclick", "");
		$("#up-shoot-time-" + (index+1)).attr("class", "list-group-item up-list-group-owned");
		$("#up-shoot-time-" + (index+1)).append('<span class="badge">Owned</span>');
	};
	if (type == 'ammo-stock' && money[0] >= ammoStockUpgrades[index].price) {
		money[0] -= ammoStockUpgrades[index].price;
		ammoStockUpgradesOwned[index] = true;
		ammoStockUpgrades[index].run();
		$("#up-ammo-stock-" + (index+1)).attr("onclick", "");
		$("#up-ammo-stock-" + (index+1)).attr("class", "list-group-item up-list-group-owned");
		$("#up-ammo-stock-" + (index+1)).append('<span class="badge">Owned</span>');
	};
	if (type == 'reload-time' && money[0] >= reloadTimeUpgrades[index].price) {
		money[0] -= reloadTimeUpgrades[index].price;
		reloadTimeUpgradesOwned[index] = true;
		reloadTimeUpgrades[index].run();
		$("#up-reload-time-" + (index+1)).attr("onclick", "");
		$("#up-reload-time-" + (index+1)).attr("class", "list-group-item up-list-group-owned");
		$("#up-reload-time-" + (index+1)).append('<span class="badge">Owned</span>');
	};
	if (type == 'weed-price' && money[0] >= weedPriceUpgrades[index].price) {
		money[0] -= weedPriceUpgrades[index].price;
		weedPriceUpgradesOwned[index] = true;
		weedPriceUpgrades[index].run();
		$("#up-weed-price-" + (index+1)).attr("onclick", "");
		$("#up-weed-price-" + (index+1)).attr("class", "list-group-item up-list-group-owned");
		$("#up-weed-price-" + (index+1)).append('<span class="badge">Owned</span>');
	};
	if (type == 'meth-price' && money[0] >= methPriceUpgrades[index].price) {
		money[0] -= methPriceUpgrades[index].price;
		methPriceUpgradesOwned[index] = true;
		methPriceUpgrades[index].run();
		$("#up-meth-price-" + (index+1)).attr("onclick", "");
		$("#up-meth-price-" + (index+1)).attr("class", "list-group-item up-list-group-owned");
		$("#up-meth-price-" + (index+1)).append('<span class="badge">Owned</span>');
	};
	if (type == 'cocaine-price' && money[0] >= cocainePriceUpgrades[index].price) {
		money[0] -= cocainePriceUpgrades[index].price;
		cocainePriceUpgradesOwned[index] = true;
		cocainePriceUpgrades[index].run();
		$("#up-cocaine-price-" + (index+1)).attr("onclick", "");
		$("#up-cocaine-price-" + (index+1)).attr("class", "list-group-item up-list-group-owned");
		$("#up-cocaine-price-" + (index+1)).append('<span class="badge">Owned</span>');
	};
	Upgrade.hide();
};
Upgrade.hide = function() {
	if (showUpgradesOwnedCheckBox.checked == false) {
		for (var i = 0; i < shootRewardUpgrades.length; i++) {
			var s = shootRewardUpgrades[i];
			if (shootRewardUpgradesOwned[i] == true) {
				$("#up-shoot-reward-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < shootTimeUpgrades.length; i++) {
			var s = shootTimeUpgrades[i];
			if (shootTimeUpgradesOwned[i] == true) {
				$("#up-shoot-time-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < ammoStockUpgrades.length; i++) {
			var a = ammoStockUpgrades[i];
			if (ammoStockUpgradesOwned[i] == true) {
				$("#up-ammo-stock-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < reloadTimeUpgrades.length; i++) {
			var r = reloadTimeUpgrades[i];
			if (reloadTimeUpgradesOwned[i] == true) {
				$("#up-reload-time-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < weedPriceUpgrades.length; i++) {
			var w = weedPriceUpgrades[i];
			if (weedPriceUpgradesOwned[i] == true) {
				$("#up-weed-price-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < methPriceUpgrades.length; i++) {
			var m = methPriceUpgrades[i];
			if (methPriceUpgradesOwned[i] == true) {
				$("#up-meth-price-" + (i+1)).css("display", "none");
			};
		};
		for (var i = 0; i < cocainePriceUpgrades.length; i++) {
			var c = cocainePriceUpgrades[i];
			if (cocainePriceUpgradesOwned[i] == true) {
				$("#up-cocaine-price-" + (i+1)).css("display", "none");
			};
		};
	} else {
		for (var i = 0; i < shootRewardUpgrades.length; i++) {
			var s = shootRewardUpgrades[i];
			if (shootRewardUpgradesOwned[i] == true) {
				$("#up-shoot-reward-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < shootTimeUpgrades.length; i++) {
			var s = shootTimeUpgrades[i];
			if (shootTimeUpgradesOwned[i] == true) {
				$("#up-shoot-time-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < ammoStockUpgrades.length; i++) {
			var a = ammoStockUpgrades[i];
			if (ammoStockUpgradesOwned[i] == true) {
				$("#up-ammo-stock-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < reloadTimeUpgrades.length; i++) {
			var r = reloadTimeUpgrades[i];
			if (reloadTimeUpgradesOwned[i] == true) {
				$("#up-reload-time-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < weedPriceUpgrades.length; i++) {
			var w = weedPriceUpgrades[i];
			if (weedPriceUpgradesOwned[i] == true) {
				$("#up-weed-price-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < methPriceUpgrades.length; i++) {
			var m = methPriceUpgrades[i];
			if (methPriceUpgradesOwned[i] == true) {
				$("#up-meth-price-" + (i+1)).css("display", "block");
			};
		};
		for (var i = 0; i < cocainePriceUpgrades.length; i++) {
			var c = cocainePriceUpgrades[i];
			if (cocainePriceUpgradesOwned[i] == true) {
				$("#up-cocaine-price-" + (i+1)).css("display", "block");
			};
		};
	};
};