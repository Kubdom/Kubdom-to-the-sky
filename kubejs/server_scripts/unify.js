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
    block()
    alloying()
    crushing()
    plate()

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

    function block()
    {
        replaceIO('#forge:blocks/copper','thermal:copper_block')
        replaceIO('#forge:blocks/lead','eidolon:lead_block')
        replaceIO('#forge:blocks/silver','thermal:silver_blockt')
        replaceIO('#forge:blocks/nickel','thermal:nickel_block')
        replaceIO('#forge:blocks/bronze','thermal:bronze_block')
        replaceIO('#forge:blocks/electrum','thermal:electrum_block')
        replaceIO('#forge:blocks/invar','thermal:invar_block')
        replaceIO('#forge:blocks/constantan','thermal:constantan_block')
        replaceIO('#forge:blocks/tin','thermal:tin_block')
        replaceIO('#forge:blocks/brass','create:brass_block')
        replaceIO('#forge:blocks/aluminium','exnihilosequentia:block_aluminum')
        replaceIO('#forge:blocks/steel','mekanism:block_steel')
        replaceIO('#forge:blocks/uranium','mekanism:block_uranium')
        replaceIO('#forge:blocks/brass','create:brass_block')
        replaceIO('#forge:blocks/zinc','create:zinc_block')
        replaceIO('#forge:blocks/osmium','mekanism:block_osmium')
    }

    function alloying()
    {
        // Electrum
        event.remove({id:'immersiveengineering:alloysmelter/electrum'})
        event.custom({"type":"immersiveengineering:alloy","time":200,"result":{"count":2,"base_ingredient":{"item":"thermal:electrum_ingot"}},"input0":{"tag":"forge:ingots/gold"},"input1":{"item":'thermal:silver_ingot'}})

        // Constantant
        event.remove({id:'immersiveengineering:alloysmelter/constantan'})
        event.custom({"type":"immersiveengineering:alloy","time":200,"result":{"count":2,"base_ingredient":{"item":'thermal:constantan_ingot'}},"input0":{"item":'thermal:copper_ingot'},"input1":{"item":'thermal:nickel_ingot'}})
    }

    function crushing()
    {
        // Crushing weel
        createCrushingOre('forge:ores/yellorite', 'bigreactors:yellorium_dust', 2, 4, 'minecraft:cobblestone')
    }

    function plate()
    {
        // Create Metal press
        createMetalPress('forge:ingots/iron','thermal:iron_plate')
        createMetalPress('forge:ingots/gold','thermal:gold_plate')
        createMetalPress('forge:ingots/netherite','thermal:netherite_plate')
        createMetalPress('forge:ingots/copper','thermal:copper_plate')
        createMetalPress('forge:ingots/tin','thermal:tin_plate')
        createMetalPress('forge:ingots/lead','thermal:lead_plate')
        createMetalPress('forge:ingots/silver','thermal:silver_plate')
        createMetalPress('forge:ingots/nickel','thermal:nickel_plate')
        createMetalPress('forge:ingots/bronze','thermal:bronze_plate')
        createMetalPress('forge:ingots/electrum','thermal:electrum_plate')
        createMetalPress('forge:ingots/invar','thermal:invar_plate')
        createMetalPress('forge:ingots/constantan','thermal:constantan_plate')
        createMetalPress('forge:ingots/signalum','thermal:signalum_plate')
        createMetalPress('forge:ingots/lumium','thermal:lumium_plate')
        createMetalPress('forge:ingots/enderium','thermal:enderium_plate')
        createMetalPress('forge:ingots/steel','immersiveengineering:plate_steel')
        createMetalPress('forge:ingots/aluminum','immersiveengineering:plate_aluminum')
        
        // Immersive Metal Press
        immersiveMetalPress('forge:ingots/iron','thermal:iron_plate')
        immersiveMetalPress('forge:ingots/gold','thermal:gold_plate')
        immersiveMetalPress('forge:ingots/netherite','thermal:netherite_plate')
        immersiveMetalPress('forge:ingots/copper','thermal:copper_plate')
        immersiveMetalPress('forge:ingots/tin','thermal:tin_plate')
        immersiveMetalPress('forge:ingots/lead','thermal:lead_plate')
        immersiveMetalPress('forge:ingots/silver','thermal:silver_plate')
        immersiveMetalPress('forge:ingots/nickel','thermal:nickel_plate')
        immersiveMetalPress('forge:ingots/bronze','thermal:bronze_plate')
        immersiveMetalPress('forge:ingots/electrum','thermal:electrum_plate')
        immersiveMetalPress('forge:ingots/invar','thermal:invar_plate')
        immersiveMetalPress('forge:ingots/constantan','thermal:constantan_plate')
        immersiveMetalPress('forge:ingots/signalum','thermal:signalum_plate')
        immersiveMetalPress('forge:ingots/lumium','thermal:lumium_plate')
        immersiveMetalPress('forge:ingots/enderium','thermal:enderium_plate')
    }



    // create functions
    function createCrushingIngot (input, output) {
        event.custom({"type":"create:crushing","ingredients": [{"tag": input}],"results": [{"item": output}],"processingTime": 350})}

    function createCrushingOre (input, output, qte, qte2, secoutput){
        event.custom({"type": "create:crushing","ingredients": [{"tag": input}],"results": [{"item": output, "count": qte},{"item": output,"count": qte2,"chance": 0.3},{"item": secoutput,"chance": 0.125}],"processingTime": 400,})}

    function createMetalPress(input, output) {
        event.custom({ "type": "create:pressing","ingredients": [{"tag": input}],"results": [{"item": output}] })
    }


    // immersive function
    function immersiveMetalPress(input,output) {
        event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"item":output},"input":{"tag":input},"energy":2400})
    }


    // tinker function

})