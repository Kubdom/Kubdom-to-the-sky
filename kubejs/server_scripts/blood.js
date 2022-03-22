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

    event.shaped('bloodmagic:altar', [
        'SAS',
        'SWS',
        'PPP'
    ], {
        P: 'eidolon:pewter_ingot',
        A: 'minecraft:air',
        W: 'eidolon:worktable',
        S: 'eidolon:stone_altar'
    })
    event.shaped('1x bloodmagic:alchemytable', [
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


});