onEvent('recipes', (event) => {
    function replaceIO(input,output) {
        event.replaceInput({},input,output)
        event.replaceOutput({},input,output)
    }

    // // nuggets
    // let copperNugget = ['#forge:nuggets/copper', 'mekanism:nugget_copper', 'thermal:copper_nugget','tconstruct:copper_nugget','immersiveengineering:nugget_copper','create:copper_nugget']
    // let leadNugget = ['#forge:nuggets/lead', 'eidolon:lead_nugget', 'mekanism:nugget_lead','thermal:lead_nugget','immersiveengineering:nugget_lead']
    // let tinNugget = ['#forge:nuggets/tin', 'mekanism:nugget_tin','thermal:tin_nugget']


    // // ingots
    // let copperIngot = ['#forge:ingots/copper', 'mekanism:ingot_copper', 'immersiveengineering:ingot_copper', 'projectred-core:copper_ingot', 'create:copper_ingot', 'thermal:copper_ingot', 'tconstruct:copper_ingot']
    // let leadIngot = ['#forge:ingots/lead', 'mekanism:ingot_lead', 'eidolon:lead_ingot', 'mekanism:ingot_lead', 'thermal:lead_ingot', 'immersiveengineering:ingot_lead']
    // let tinIngot = ['#forge:ingots/tin', 'mekanism:ingot_tin','thermal:tin_ingot', 'projectred-core:tin_ingot', 'exnihilosequentia:ingot_tin']

    // // blocks
    // let copperBlock = ['#forge:storage_blocks/copper', 'create:copper_block', 'immersiveengineering:storage_copper', 'mekanism:block_copper', 'tconstruct:copper_block', 'thermal:copper_block']
    // let leadBlock = ['#forge:storage_blocks/lead', 'eidolon:lead_block', 'mekanism:block_lead','thermal:lead_block','immersiveengineering:storage_lead']
    



    // copperIngot.forEach(input => { replaceIO(input, 'thermal:copper_ingot') })
    // leadIngot.forEach(input => { replaceIO(input, 'eidolon:lead_ingot') })
    // tinIngot.forEach(input => { replaceIO(input, 'thermal:tin_ingot') })

    // copperNugget.forEach(input => { replaceIO(input, 'thermal:copper_nugget') })
    // leadNugget.forEach(input => { replaceIO(input, 'eidolon:lead_nugget') })
    // tinNugget.forEach(input => { replaceIO(input, 'eidolon:lead_nugget') })

    // copperBlock.forEach(input => { replaceIO(input, 'thermal:copper_block') })
    // leadBlock.forEach(input => { replaceIO(input, 'eidolon:lead_block') })


    ingot()
    create()

    function ingot()
    {
        replaceIO('#forge:ingots/copper','thermal:copper_ingot')
        replaceIO('#forge:ingots/lead','eidolon:lead_ingot')
        replaceIO('#forge:ingots/silver','thermal:silver_ingot')
        replaceIO('#forge:ingots/nickel','thermal:nickel_ingot')
        replaceIO('#forge:ingots/bronze','thermal:bronze_ingot')
        replaceIO('#forge:ingots/electrum','thermal:electrum_ingot')
        replaceIO('#forge:ingots/invar','thermal:invar_ingot')
        replaceIO('#forge:ingots/constantan','thermal:constantan_ingot')
        replaceIO('#forge:ingots/tin','thermal:tin_ingot')
        replaceIO('#forge:ingots/brass','create:brass_ingot')
        replaceIO('#forge:ingots/aluminium','exnihilosequentia:ingot_aluminum')
        replaceIO('#forge:ingots/steel','mekanism:ingot_steel')
        replaceIO('#forge:ingots/uranium','mekanism:ingot_uranium')
        replaceIO('#forge:ingots/brass','create:brass_ingot')
        replaceIO('#forge:ingots/zinc','create:zinc_ingot')
        replaceIO('#forge:ingots/osmium','mekanism:ingot_osmium')
    }

    function create()
    {
        createCrushingOre('forge:ores/yellorite', 'bigreactors:yellorium_dust', 2, 4, 'minecraft:cobblestone')
    }




    function createCrushingIngot (input, output) {
        eevent.custom({"type":"create:crushing","ingredients": [{"tag": input}],"results": [{"item": output}],"processingTime": 350})}

    function createCrushingOre (input, output, qte, qte2, secoutput){
        event.custom({"type": "create:crushing","ingredients": [{"tag": input}],"results": [{"item": output, "count": qte},{"item": output,"count": qte2,"chance": 0.3},{"item": secoutput,"chance": 0.125}],"processingTime": 400,})}


})