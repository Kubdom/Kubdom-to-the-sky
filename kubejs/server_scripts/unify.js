onEvent('recipes', (event) => {
    function replaceIO(input,output) {
        event.replaceInput({},input,output)
        event.replaceOutput({},input,output)
    }
    let copperIngot = ['#forge:ingots/copper', 'mekanism:ingot_copper', 'immersiveengineering:ingot_copper', 'projectred-core:copper_ingot', 'create:copper_ingot', 'thermal:copper_ingot', 'tconstruct:copper_ingot']
    let copperNugget = ['#forge:nuggets/copper', 'mekanism:nugget_copper', 'thermal:copper_nugget','tconstruct:copper_nugget','immersiveengineering:nugget_copper','create:copper_nugget']
    let copperBlock = ['#forge:storage_blocks/copper', 'create:copper_block', 'immersiveengineering:storage_copper', 'mekanism:block_copper', 'tconstruct:copper_block', 'thermal:copper_block']
    let leadIngot = ['#forge:ingots/lead', 'mekanism:ingot_lead', 'eidolon:lead_ingot', 'mekanism:ingot_lead', 'thermal:lead_ingot', 'immersiveengineering:ingot_lead']
    let leadNugget = ['#forge:nuggets/lead', 'eidolon:lead_nugget', 'mekanism:nugget_lead','thermal:lead_nugget','immersiveengineering:nugget_lead']
    // let uraniumIngot =['#forge:ingots/uranium']
    
    copperIngot.forEach(input => { replaceIO(input, 'thermal:copper_ingot') })
    copperNugget.forEach(input => { replaceIO(input, 'thermal:copper_nugget') })
    copperBlock.forEach(input => { replaceIO(input, 'thermal:copper_block') })
    leadIngot.forEach(input => { replaceIO(input, 'eidolon:lead_ingot') })
    leadNugget.forEach(input => { replaceIO(input, 'eidolon:lead_nugget') })
    // uraniumIngot.forEach(i=>{replaceIO(i,'mekanism:ingot_uranium')})
})