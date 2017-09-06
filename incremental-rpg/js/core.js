var fps = 60; var interval = (1000 / fps); var version = 0.005; var release = "-r1"; var init = false;

// log
function Log(text) { console.log("Inc-RPG v" + version + release + " : " + text); };

// update
function Update() { Log("This is needed to make the other Update.() function to work."); };
Update.playerStats = function() {
	if (init == true) {
		$("#s-hp, #nav-hp").html("血量 : " + beautify(ps.hp, 0) + "/" + beautify(ps.maxHp, 0) + ' <small class="small">+' + beautify(ps.hpPerSec, 0) + '血/秒</small>');
		$("#s-xp, #nav-xp").html("经验 : " + beautify(ps.xp, 0) + "/" + beautify(ps.xpNeeded, 0));
		$("#s-gold, #nav-gold").html("黄金 : " + beautify(ps.gold, 2));
		$("#s-diamond, #nav-diamond").html("钻石 : " + beautify(ps.diamond, 2));
		$("#s-level").html("等级 : " + beautify(ps.level, 0));
		$("#s-medals").html("徽章 : " + beautify(ps.medals, 0));
		$("#s-coal, #modal-coal").html("煤 : " + beautify(pi.coal, 2));
		$("#s-crystal, #modal-crystal").html("水晶 : " + beautify(pi.crystal, 2));
		$("#s-jade, #modal-jade").html("玉 : " + beautify(pi.jade, 2));
		$("#s-ruby, #modal-ruby").html("红宝石 : " + beautify(pi.ruby, 2));
		$("#s-saphire, #modal-saphire").html("蓝宝石 : " + beautify(pi.saphire, 2));

		$("#s-helmet").html('<img class="stats" src="' + p.helmet.img + '"> 头盔 : <i>' + p.helmet.itemName + "</i><br>+" + p.helmet.armor + " 防御 - 附魔 : " + p.helmet.enchantment);
		$("#inv-helmet-img").attr("src", p.helmet.img);
		$("#s-armour").html('<img class="stats" src="' + p.armour.img + '"> 铠甲 : <i>' + p.armour.itemName + "</i><br>+" + p.armour.armor + " 防御 - 附魔 : " + p.armour.enchantment);
		$("#inv-armour-img").attr("src", p.armour.img);
		$("#s-gloves").html('<img class="stats" src="' + p.gloves.img + '"> 手套 : <i>' + p.gloves.itemName + "</i><br>+" + p.gloves.armor + " 防御 - 附魔 : " + p.gloves.enchantment);
		$("#inv-gloves-img").attr("src", p.gloves.img);
		$("#s-boots").html('<img class="stats" src="' + p.boots.img + '"> 靴子 : <i>' + p.boots.itemName + "</i><br>+" + p.boots.armor + " 防御 - 附魔 : " + p.boots.enchantment);
		$("#inv-boots-img").attr("src", p.boots.img);
		$("#s-amulet").html('<img class="stats" src="' + p.amulet.img + '"> 护身符 : <i>' + p.amulet.itemName + "</i><br>+" + p.amulet.armor + " 防御 - 附魔 : " + p.amulet.enchantment);
		$("#inv-amulet-img").attr("src", p.amulet.img);
		$("#s-sword").html('<img class="stats" src="' + p.sword.img + '"> 剑 : <i>' + p.sword.itemName + "</i><br>+" + p.sword.damage + " 伤害 -  : " + p.sword.enchantment);
		$("#inv-sword-img").attr("src", p.sword.img);
		$("#s-totalarmor").html("总防御 : " + getPlayerArmor() + "% 减少怪物伤害");
		// hp-bar in the navbar
		var playerHpBar = 100;
		playerHpBar = (ps.hp / ps.maxHp) * 100;
		$("#ps-hpbar").css("width", playerHpBar + "%");
	};
};
Update.monsters = function() {
	if (typeof liveAdventure == "string" && init == true) {
		for (var i = 0; i < liveMonsters.length; i++) {
			var lm = liveMonsters[i];
			var lmi = liveMonsters[i].index;
			var widthHp = 100;
			// updating progress-bar + text
			widthHp = (lm.hp / lm.maxHp) * 100;
			$("#monster-hb" + lmi).css("width", widthHp + "%");
			$("#monster-hpdisplay" + lmi).html(lm.hp + "/" + lm.maxHp + " HP");
		};
		$("#monsters-msg").css("display", "none");
	} else {
		$("#monsters-msg").css("display", "block");
	};
};
Update.gameInit = function() {
	Log("Calling Update.gameInit() - this is the onload function");
	Adventure.init();
	Mining.init();
	Shop.init();
	Enchant.init();
	Player.init();
	init = true;
};
Update.loadSavegame = function() {
	if (init == true) {
		loadData();
		Mining.check();
		Shop.check();
		Enchant.check();
		Log("You can play, the game is fully loaded! Have fun!");
	};
};

// loading + loop
window.onload = function() {
	Update.gameInit();
	Update.loadSavegame();
};
var mainInterval = window.setInterval(function() {
	Update.playerStats();
	Update.monsters();
}, interval);
var regainHpInterval = window.setInterval(function() {
	Player.regainHp();
}, 1000);
var saveInterval = window.setInterval(function() {
	saveData();
}, 10000);
var buildsInterval = window.setInterval(function() {
	Mining.reward();
}, 10);
var helpersInterval = window.setInterval(function() {
	getXpNeeded();
	getPlayerHp();
}, 100);