onEvent('recipes', (event) => {
    function replaceIO(input,output) {
        event.replaceInput({},input,output)
        event.replaceOutput({},input,output)
    }

    // nuggets
    let copperNugget = ['#forge:nuggets/copper', 'mekanism:nugget_copper', 'thermal:copper_nugget','tconstruct:copper_nugget','immersiveengineering:nugget_copper','create:copper_nugget']
    let leadNugget = ['#forge:nuggets/lead', 'eidolon:lead_nugget', 'mekanism:nugget_lead','thermal:lead_nugget','immersiveengineering:nugget_lead']
    let tinNugget = ['#forge:nuggets/tin', 'mekanism:nugget_tin','thermal:tin_nugget']


    // ingots
    let copperIngot = ['#forge:ingots/copper', 'mekanism:ingot_copper', 'immersiveengineering:ingot_copper', 'projectred-core:copper_ingot', 'create:copper_ingot', 'thermal:copper_ingot', 'tconstruct:copper_ingot']
    let leadIngot = ['#forge:ingots/lead', 'mekanism:ingot_lead', 'eidolon:lead_ingot', 'mekanism:ingot_lead', 'thermal:lead_ingot', 'immersiveengineering:ingot_lead']
    let tinIngot = ['#forge:ingots/tin', 'mekanism:ingot_tin','thermal:tin_ingot', 'projectred-core:tin_ingot', 'exnihilosequentia:ingot_tin']

    // blocks
    let copperBlock = ['#forge:storage_blocks/copper', 'create:copper_block', 'immersiveengineering:storage_copper', 'mekanism:block_copper', 'tconstruct:copper_block', 'thermal:copper_block']
    let leadBlock = ['#forge:storage_blocks/lead', 'eidolon:lead_block', 'mekanism:block_lead','thermal:lead_block','immersiveengineering:storage_lead']
    

    // plates
    let ironPlate = ['#forge:plates/iron','immersiveengineering:plate_iron', 'mapperbase:iron_plate', 'thermal:iron_plate']


    copperIngot.forEach(input => { replaceIO(input, 'thermal:copper_ingot') })
    leadIngot.forEach(input => { replaceIO(input, 'eidolon:lead_ingot') })
    tinIngot.forEach(input => { replaceIO(input, 'thermal:tin_ingot') })

    copperNugget.forEach(input => { replaceIO(input, 'thermal:copper_nugget') })
    leadNugget.forEach(input => { replaceIO(input, 'eidolon:lead_nugget') })
    tinNugget.forEach(input => { replaceIO(input, 'eidolon:lead_nugget') })

    copperBlock.forEach(input => { replaceIO(input, 'thermal:copper_block') })
    leadBlock.forEach(input => { replaceIO(input, 'eidolon:lead_block') })

    ironPlate.forEach(input => { replaceIO(input, 'thermal:iron_plate') })
})