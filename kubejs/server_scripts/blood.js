onEvent('recipes', event => {
    function altar(input, output, level, syphon, consumption, drainRate) {
        event.custom({
            "type": "bloodmagic:altar",
            "input": {
                "item": input
            },
            "output": {
                "item": output
            },
            "upgradeLevel": level,
            "altarSyphon": syphon,
            "consumptionRate": consumption,
            "drainRate": drainRate
        })
    }

    function alchemyTable(input, output, syphon, ticks, level) {
        event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "tag": input[0]
                },
                {
                    "item": input[1]
                },
                {
                    "tag": input[2]
                },
                {
                    "tag": input[3]
                }
            ],
            "output": {
                "item": output,
            },
            "syphon": syphon,
            "ticks": ticks,
            "upgradeLevel": level
        })
    }

    function alchemyArray(baseinput, addedinput, output) {
        event.custom({
            "type": "bloodmagic:array",
            "texture": "bloodmagic:textures/models/alchemyarrays/bindingarray.png",
            "baseinput": {
                "item": baseinput
            },
            "addedinput": {
                "item": addedinput
            },
            "output": {
                "item": output,
                "nbt": "{Damage:0}"
            }
        })
    }
    event.shaped('bloodmagic:altar', [
        'S S',
        'SWS',
        'PPP'
    ], {
        P: 'eidolon:pewter_ingot',
        W: 'eidolon:worktable',
        S: 'eidolon:stone_altar'
    })
    event.shaped('bloodmagic:alchemytable', [
        'LAL',
        'PBP',
        'PBP'
    ], {
        B: 'bloodmagic:blankslate',
        L: 'bloodmagic:life_essence_bucket',
        A: 'bloodmagic:apprenticebloodorb',
        P: 'eidolon:pewter_ingot'
    })


    altar('kubejs:alpha_ingot', 'bloodmagic:blankslate', 0, 1000, 5, 5)
    altar('eidolon:arcane_gold_ingot', 'kubejs:alpha_ingot', 0, 1000, 5, 5)
    altar('bloodmagic:weakbloodorb', 'kubejs:apprentice_blood_orb_shard', 1, 5000, 5, 5)
    altar('bloodmagic:apprenticebloodorb', 'kubejs:magician_blood_orb_shard', 2, 25000, 20, 20)
    altar('bloodmagic:magicianbloodorb', 'kubejs:master_blood_orb_shard', 2, 25000, 20, 20) 
    // altar('bloodmagic:magicianbloodorb', 'bloodmagic:masterbloodorb', 3, 40000, 30, 50) 

    alchemyTable(["forge:dusts/redstone", 'eidolon:enchanted_ash', "forge:gunpowder", "minecraft:coals"], "bloodmagic:arcaneashes", 500, 200, 1)
    alchemyArray("bloodmagic:reagentbinding", "eidolon:warlock_boots", "bloodmagic:livingboots")
    alchemyArray("bloodmagic:reagentbinding", "eidolon:warlock_cloak", "bloodmagic:livingleggings")
    alchemyArray("bloodmagic:reagentbinding", "eidolon:warlock_hat", "bloodmagic:livinghelmet")
    alchemyArray("bloodmagic:reagentbinding", "eidolon:warded_mail", "bloodmagic:livingplate")
});