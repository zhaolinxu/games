function setItem(key, value) { localStorage.setItem(key, JSON.stringify(value)); };
function getItem(key) { return JSON.parse(localStorage.getItem(key)); };
function removeItem(key) { localStorage.removeItem(key); };
function saveData() {
    if (init == true) {
        for (var i = 0; i < allVars.length; i++) {
            setItem(key + allVars[i], window[allVars[i]]);
        };
    };
};
function loadData() {
    for (var i = 0; i < allVars.length; i++) {
        if (getItem(key + allVars[i]) != null && getItem(key + allVars[i]) != undefined) {
            window[allVars[i]] = getItem(key + allVars[i]);
        };
    };
    Log("游戏存档已加载！ 游戏必须在玩前检查事情。");
};
function resetData() {
    for (var i = 0; i < allVars.length; i++) {
        removeItem(key + allVars[i]);
    };
};
function hardReset() {
    if (confirm("你在进行硬复位，也就是你将从头开始，并且没有任何的经验和奖金！注意:这不是声望复位/软复位!")) {
        window.clearInterval(intSave);
        resetData();
        location.reload();
    };
};
function softReset() {
    if (confirm("你正在进行软复位。你将获得" + fix(prestige[1], "prestige") + " 点经验并且重新开始游戏。点击表格框查看更多声望奖励信息。")) {
        window.clearInterval(intSave);
        var temp = money[1];
        var temp2 = prestige[1];
        var temp3 = shoot[5];
        var temp4 = shoot[6];
        var temp5 = experienceSpent;
        var temp6 = prestigeUpgradesOwned;
        var temp7 = prestigeShootOwned;
        var temp8 = prestigeShootingOwned;
        var temp9 = prestigeReloadingOwned;

        resetData();
        Init.variables();
        Upgrade.init();
        Build.init();
        Dealer.init();
        PrestigeUpgrade.init();

        money[1] = temp;
        prestige[0] = temp2;
        shoot[5] = temp3;
        shoot[6] = temp4;
        experienceSpent = temp5;
        prestigeUpgradesOwned = temp6;
        prestigeShootOwned = temp7;
        prestigeShootingOwned = temp8;
        prestigeReloadingOwned = temp9;
        
        PrestigeUpgrade.afterReset();
        saveData();
        location.reload();
    };
};

function exportSave() {
    var toSave = {
        money: money,
        shoot: shoot,
        prestige: prestige,
        shootPercent: shootPercent,
        shootPercentCash: shootPercentCash,
        experienceSpent: experienceSpent,
        
        before: before,

        drugStock: drugStock,
        drugMultiplier: drugMultiplier,

        shootRewardUpgradesOwned: shootRewardUpgradesOwned,
        shootTimeUpgradesOwned: shootTimeUpgradesOwned,
        ammoStockUpgradesOwned: ammoStockUpgradesOwned,
        reloadTimeUpgradesOwned: reloadTimeUpgradesOwned,
        weedPriceUpgradesOwned: weedPriceUpgradesOwned,
        methPriceUpgradesOwned: methPriceUpgradesOwned,
        cocainePriceUpgradesOwned: cocainePriceUpgradesOwned,
        prestigeUpgradesOwned: prestigeUpgradesOwned,
        prestigeShootOwned: prestigeShootOwned,

        weedBuildsOwned: weedBuildsOwned,
        methBuildsOwned: methBuildsOwned,
        cocaineBuildsOwned: cocaineBuildsOwned,

        weedDealersOwned: weedDealersOwned,
        methDealersOwned: methDealersOwned,
        cocaineDealersOwned: cocaineDealersOwned,

        prestigeShootingOwned: prestigeShootingOwned,
        prestigeReloadingOwned: prestigeReloadingOwned,

        totalMoneyAchOwned: totalMoneyAchOwned,
        experienceAchOwned: experienceAchOwned,
        shootAchOwned: shootAchOwned,
        reloadAchOwned: reloadAchOwned
    };

    var saved = JSON.stringify(toSave);
    var exportSaved = btoa(saved);
    // prompt("Here is your exported save!", exportSaved);
    var exportField = document.getElementById("exportSaveField");
    exportField.value = exportSaved;
};
function importSave() {
    var importField = document.getElementById("importSaveField");
    // var importSave = prompt("You need to import the code from the export-save button.", "Put your save here!");
    var cleanSave = atob(importField.value);
    var savegame = JSON.parse(cleanSave);
    save = JSON.parse(cleanSave);

    money = savegame.money;
    shoot = savegame.shoot;
    prestige = savegame.prestige;
    shootPercent = savegame.shootPercent;
    shootPercentCash = savegame.shootPercentCash;
    experienceSpent = savegame.experienceSpent;

    before = savegame.before;

    drugStock = savegame.drugStock;
    drugMultiplier = savegame.drugMultiplier;

    shootRewardUpgradesOwned = savegame.shootRewardUpgradesOwned;
    shootTimeUpgradesOwned = savegame.shootTimeUpgradesOwned;
    ammoStockUpgradesOwned = savegame.ammoStockUpgradesOwned;
    reloadTimeUpgradesOwned = savegame.reloadTimeUpgradesOwned;
    weedPriceUpgradesOwned = savegame.weedPriceUpgradesOwned;
    methPriceUpgradesOwned = savegame.methPriceUpgradesOwned;
    cocainePriceUpgradesOwned = savegame.cocainePriceUpgradesOwned;

    prestigeUpgradesOwned = savegame.prestigeUpgradesOwned;
    prestigeShootOwned = savegame.prestigeShootOwned;

    weedBuildsOwned = savegame.weedBuildsOwned;
    methBuildsOwned = savegame.methBuildsOwned;
    cocaineBuildsOwned = savegame.cocaineBuildsOwned;

    weedDealersOwned = savegame.weedDealersOwned;
    methDealersOwned = savegame.methDealersOwned;
    cocaineDealersOwned = savegame.cocaineDealersOwned;

    prestigeShootingOwned = savegame.prestigeShootingOwned;
    prestigeReloadingOwned = savegame.prestigeReloadingOwned;

    totalMoneyAchOwned = savegame.totalMoneyAchOwned;
    experienceAchOwned = savegame.experienceAchOwned;
    shootAchOwned = savegame.shootAchOwned;
    reloadAchOwned = savegame.reloadAchOwned;

    Build.check();
    Dealer.check();
    Upgrade.saveCheck();
    PrestigeUpgrade.saveCheck();
    saveData();
};
function checkCode() {
    var promotionField = document.getElementById("promotionField");
    var cleanCode = atob(promotionField.value);
    // MTAwayBnYW1lcGxheXM=
    if (cleanCode == "100k gameplays") {
        $("#betatest").css("display", "block");
        var username;
        var authtoken;
        if (!kongregate.services.isGuest()) {
            kongregate.services.connect();
            username = kongregate.services.getUsername();
            authtoken = kongregate.services.getGameAuthToken();
            $("#betatest-welcome").html("欢迎beta版测试者 <b>" + username + "</b>! 感谢您测试这个新版本。");
            $("#betatest-authtoken").html("你的开发者token是 : <small><b>" + authtoken + "</b></small>");
        } else {
            $("#alert-konglog").css("display", "block");
        };
    };
};

var save = undefined;