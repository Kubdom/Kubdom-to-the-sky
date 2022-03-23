onEvent('recipes', event => {
    const removeCraft = (element, key) => {
        if (key == 'id') {
            event.remove({id: element})
        } else if (key == 'type') {
            event.remove({ type: element})
        } else if (key == 'mod') {
            event.remove({ mod: element})
        }
    }
    let data = [
        { id: 'tconstruct:common/flint' },
        { id: 'mysticalagriculture:essence/flint' },
        { type: 'exnihilosequentia:sieve' },
        { id: 'thermal:storage/lead_ingot_from_nuggets'},
        { id: 'thermal:storage/lead_ingot_from_block'},
        { id: 'immersiveengineering:crafting/nugget_lead_to_ingot_lead'},
        { id: 'immersiveengineering:crafting/storage_lead_to_ingot_lead'},
        { id: 'immersiveengineering:crafting/nugget_copper_to_ingot_copper'},
        { id: 'mekanism:processing/copper/ingot/from_nuggets'},
        { id: 'thermal:storage/copper_ingot_from_nuggets'},
        { id: 'tconstruct:common/materials/copper_ingot_from_nuggets'},
        { id: 'tconstruct:common/materials/copper_ingot_from_block'},
        { id: 'immersiveengineering:crafting/storage_copper_to_ingot_copper'},
        { id: 'create:crafting/materials/copper_ingot_from_decompacting' },
        { id: 'mekanism:processing/copper/ingot/from_block'},
        { id: 'cobblefordays:tier_1'},
        { id: 'cobblefordays:tier_2'},
        { id: 'cobblefordays:tier_3'},
        { id: 'cobblefordays:tier_4'},
        { id: 'cobblefordays:tier_5'},
        { id: 'ironchest:chests/vanilla_iron_chest'},
        { id: 'ironchest:chests/copper_silver_chest'},
        { id: 'ironchest:chests/iron_gold_chest'},
        { id: 'ironchest:chests/silver_diamond_chest'},
        { id: 'ironchest:upgrades/wood_to_iron_chest_upgrade'},
        { id: 'ironchest:upgrades/iron_to_gold_chest_upgrade'},
        { id: 'ironchest:upgrades/copper_to_silver_chest_upgrade'},
        { mod: 'metalbarrels'},
        { id: 'bloodmagic:blood_altar'},
        { id: 'bloodmagic:alchemy_table'},
        { id: 'bloodmagic:altar/slate'},
        { id: 'bloodmagic:alchemytable/arcane_ash'},
        { id: 'bloodmagic:array/living_boots'},
        { id: 'bloodmagic:array/living_helmet'},
        { id: 'bloodmagic:array/living_plate'},
        { id: 'bloodmagic:array/living_leggings' },
        { id: 'immersiveengineering:squeezer/graphite_dust'},
    ]
    
    for (var i = 0; i < data.length; i++){
        for (var key in data[i]) {
          removeCraft(data[i][key], key)
      }
    }
})