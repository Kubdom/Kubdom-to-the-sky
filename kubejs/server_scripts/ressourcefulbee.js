onEvent('recipes', event => {

    // Craft Clasic Bees
    CraftBasicBee('minecraft:dirt', 'resourcefulbees:dirty_bee_spawn_egg')
    CraftBasicBee('#forge:cobblestone', 'resourcefulbees:rock_bee_spawn_egg')
    CraftBasicBee('#minecraft:logs', 'resourcefulbees:woody_bee_spawn_egg')
    CraftBasicBee('minecraft:netherrack', 'resourcefulbees:nether_bee_spawn_egg')
    CraftBasicBee('minecraft:clay', 'resourcefulbees:clay_bee_spawn_egg')
    CraftBasicBee('minecraft:slime_block', 'resourcefulbees:slimy_bee_spawn_egg')
    CraftBasicBee('earthmobsmod:rainbow_wool', 'resourcefulbees:rgbee_bee_spawn_egg')
    CraftBasicBee('minecraft:end_stone', 'resourcefulbees:end_bee_spawn_egg')
    CraftBasicBee('minecraft:packed_ice', 'resourcefulbees:icy_bee_spawn_egg')
    CraftBasicBee('minecraft:gravel', 'resourcefulbees:gravel_bee_spawn_egg')


    // Craft Tier1 Beehive
    event.remove({id: 'resourcefulbees:t1_beehive'})
    event.shaped('resourcefulbees:t1_beehive', [
        'GGG',
        'GBG',
        'GGG'
    ], {
        G: 'minecraft:grass',
        B: '#minecraft:beehives'
    })

    // Craft Tier2 Beehive

    event.remove({id: 'resourcefulbees:t2_beehive_nests'})
    event.shaped('resourcefulbees:t2_beehive', [
        'HAH',
        'ABA',
        'HAH'
    ], {
        H: '#resourcefulbees:resourceful_honeycomb',
        B: 'resourcefulbees:t1_beehive',
        A: 'resourcefulbees:wax'
    })

    // Craft Tier3 Beehive

    event.remove({id: 'resourcefulbees:t3_beehive_nests'})
    event.shaped('resourcefulbees:t3_beehive', [
        'HAH',
        'ABA',
        'HAH'
    ], {
        H: '#resourcefulbees:resourceful_honeycomb_block',
        B: 'resourcefulbees:t2_beehive',
        A: 'resourcefulbees:wax_block'
    })

    // Craft Tier4 Beehive

    event.remove({id: 'resourcefulbees:t4_beehive_nests'})
    event.shaped('resourcefulbees:t4_beehive', [
        'HAH',
        'ABA',
        'HAH'
    ], {
        H: '#resourcefulbees:resourceful_honeycomb_block',
        B: 'resourcefulbees:t3_beehive',
        A: 'minecraft:honey_block'
    })

    // Craft Tier1 Apiary

    event.remove({id: 'resourcefulbees:t1_apiary'})
    event.shaped('resourcefulbees:t1_apiary', [
        'HAH',
        'ABA',
        'HAH'
    ], {
        H: '#resourcefulbees:resourceful_honeycomb_block',
        B: 'minecraft:nether_star',
        A: 'resourcefulbees:t4_beehive'
    })




    // Craft Sieve Bee Spawn Egg
    event.shaped('resourcefulbees:sieve_bee_spawn_egg', [
        'HSH',
        'SES',
        'HSH'
    ], {
        H: 'minecraft:honeycomb_block',
        E: 'minecraft:egg',
        S: '#exnihilosequentia:sieves'
    })


    function CraftBasicBee(inputBlock, output) {
        event.shaped(output, [
            'HBH',
            'BAB',
            'HBH'
        ], {
            H: '#resourcefulbees:resourceful_honeycomb_block',
            A: 'resourcefulbees:sieve_bee_spawn_egg',
            B: inputBlock
        })
    }
	
})