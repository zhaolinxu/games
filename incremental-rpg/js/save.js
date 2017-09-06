// new saving system (pretty shitty but working)
function manualSave() {
    var toSave = {
        player: player,
        mbo: miningBuildsOwned,
        helmetsOwned: helmetsOwned,
        armoursOwned: armoursOwned,
        glovesOwned: glovesOwned,
        bootsOwned: bootsOwned,
        amuletsOwned: amuletsOwned,
        swordOwned: swordOwned
    };
    var saved = JSON.stringify(toSave);
    var exportSave = btoa(saved);
    prompt("这是你的游戏存档，把它保存在一个安全的地方！", exportSave);
};
function manualLoad() {
    var importSave = prompt("您需要从保存按钮导入代码。", "在这里粘贴你的存档代码");
    var cleanSave = atob(importSave); var savegame = JSON.parse(cleanSave);
    var s = savegame; var sp = savegame.player; var sps = savegame.player.stats; var spi = savegame.player.item;

    ps.hp = sps.hp;
    ps.maxHp = sps.maxHp;
    ps.hpPerSec = sps.hpPerSec;
    ps.xp = sps.xp;
    ps.xpNeeded = sps.xpNeeded;
    ps.level = sps.level;
    ps.gold = sps.gold;
    ps.diamond = sps.diamond;

    p.helmet.armor = sp.helmet.armor;
    p.helmet.itemName = sp.helmet.itemName;
    p.helmet.img = sp.helmet.img;

    p.armour.armor = sp.armour.armor;
    p.armour.itemName = sp.armour.itemName;
    p.armour.img = sp.armour.img;

    p.gloves.armor = sp.gloves.armor;
    p.gloves.itemName = sp.gloves.itemName;
    p.gloves.img = sp.gloves.img;

    p.boots.armor = sp.boots.armor;
    p.boots.itemName = sp.boots.itemName;
    p.boots.img = sp.boots.img;

    p.amulet.armor = sp.amulet.armor;
    p.amulet.itemName = sp.amulet.itemName;
    p.amulet.img = sp.amulet.img;

    p.sword.damage = sp.sword.damage;
    p.sword.itemName = sp.sword.itemName;
    p.sword.img = sp.sword.img;

    ps.totalArmor = sps.totalArmor;

    pi.coal = spi.coal;
    pi.crystal = spi.crystal;
    pi.jade = spi.jade;
    pi.ruby = spi.ruby;
    pi.saphire = spi.saphire;

    miningBuildsOwned = s.miningBuildsOwned;
    helmetsOwned = s.helmetsOwned;
    armoursOwned = s.armoursOwned;
    glovesOwned = s.glovesOwned;
    bootsOwned = s.bootsOwned;
    amuletsOwned = s.amuletsOwned;
    swordOwned = s.swordOwned;

    Mining.check();
    Shop.check();

    Log("Game loaded!");
};
function saveData() {
    if (init == true) {
        var toSave = {
            player: player,
            mbo: miningBuildsOwned,
            helmetsOwned: helmetsOwned,
            armoursOwned: armoursOwned,
            glovesOwned: glovesOwned,
            bootsOwned: bootsOwned,
            amuletsOwned: amuletsOwned,
            swordOwned: swordOwned
        };
        localStorage.setItem("IncRPG_Save", JSON.stringify(toSave));
        Log("游戏已保存!");
    };
};
function loadData() {
    if (init == true) {
        if (localStorage.getItem("IncRPG_Save") === null) {
            Log("No save found!");
        } else {
            var savegame = JSON.parse(localStorage.getItem("IncRPG_Save"));
            var s = savegame; var sp = savegame.player; var sps = savegame.player.stats; var spi = savegame.player.item;

            ps.hp = sps.hp;
            ps.maxHp = sps.maxHp;
            ps.hpPerSec = sps.hpPerSec;
            ps.xp = sps.xp;
            ps.xpNeeded = sps.xpNeeded;
            ps.level = sps.level;
            ps.gold = sps.gold;
            ps.diamond = sps.diamond;

            p.helmet.armor = sp.helmet.armor;
            p.helmet.itemName = sp.helmet.itemName;
            p.helmet.img = sp.helmet.img;

            p.armour.armor = sp.armour.armor;
            p.armour.itemName = sp.armour.itemName;
            p.armour.img = sp.armour.img;

            p.gloves.armor = sp.gloves.armor;
            p.gloves.itemName = sp.gloves.itemName;
            p.gloves.img = sp.gloves.img;

            p.boots.armor = sp.boots.armor;
            p.boots.itemName = sp.boots.itemName;
            p.boots.img = sp.boots.img;

            p.amulet.armor = sp.amulet.armor;
            p.amulet.itemName = sp.amulet.itemName;
            p.amulet.img = sp.amulet.img;

            p.sword.damage = sp.sword.damage;
            p.sword.itemName = sp.sword.itemName;
            p.sword.img = sp.sword.img;

            ps.totalArmor = sps.totalArmor;

            pi.coal = spi.coal;
            pi.crystal = spi.crystal;
            pi.jade = spi.jade;
            pi.ruby = spi.ruby;
            pi.saphire = spi.saphire;

            miningBuildsOwned = s.mbo;
            helmetsOwned = s.helmetsOwned;
            armoursOwned = s.armoursOwned;
            glovesOwned = s.glovesOwned;
            bootsOwned = s.bootsOwned;
            amuletsOwned = s.amuletsOwned;
            swordOwned = s.swordOwned;

            Log("游戏加载成功!");
        };
    };
};
function resetData() {
    if (confirm("你真的想擦除你的保存并从头重新设置一切吗？ 你不会得到任何奖励。")) {
        clearInterval(saveInterval);
        localStorage.removeItem("IncRPG_Save");
        location.reload();
    };
};