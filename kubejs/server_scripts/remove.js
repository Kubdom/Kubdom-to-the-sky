onEvent('recipes', event => {
    const removeCraft = (element, key) => {
        if (key == 'id') {
            event.remove({id: element})
        } else if (key == 'type') {
            event.remove({ type: element})
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
    ]
    
    for (var i = 0; i < data.length; i++){
        for (var key in data[i]) {
          removeCraft(data[i][key], key)
      }
    }    
})