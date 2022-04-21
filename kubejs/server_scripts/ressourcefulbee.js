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
	



  //Stone
  event.shaped(item.of('minecraft:stone', 32), ['A A',' A ','A A'], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Cobblestone
  event.shaped(item.of('minecraft:cobblestone', 32), ['AAA','A A','AAA'], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Andesite
  event.shaped(item.of('minecraft:andesite', 16), [' A ','AAA',' A '], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Andesite
  event.shaped(item.of('minecraft:granite', 16), ['A A','   ','A A'], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Diorite
  event.shaped(item.of('minecraft:diorite', 16), ['  A',' A ','A  '], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Blackstone
  event.shaped(item.of('minecraft:blackstone', 32), ['AAA','A B','BBB'], {
    A: 'resourcefulbees:rock_honeycomb',
    B: 'resourcefulbees:nether_honeycomb'
  })
  //Netherrack
  event.shaped(item.of('minecraft:netherrack', 32), ['A A',' A ','A A'], {
    A: 'resourcefulbees:nether_honeycomb'
  })
  //Blue Netherrack
  event.shaped(item.of('byg:blue_netherrack', 32), ['AAA','A A','AAA'], {
    A: 'resourcefulbees:nether_honeycomb'
  })
  //Brimstone
  event.shaped(item.of('byg:brimstone', 32), [' A ','AAA',' A '], {
    A: 'resourcefulbees:nether_honeycomb'
  })
  //Skyslime
  event.shaped(item.of('tconstruct:sky_slime_ball', 32), ['AAA','ABA','AAA'], {
    A: 'resourcefulbees:slimy_honeycomb',
    B: 'minecraft:light_blue_dye'
  })
  //Enderslime
  event.shaped(item.of('tconstruct:ender_slime_ball', 32), ['AAA','ABA','AAA'], {
    A: 'resourcefulbees:slimy_honeycomb',
    B: 'minecraft:purple_dye'
  })
  //Ichorslime
  event.shaped(item.of('tconstruct:ichor_slime_ball', 32), ['AAA','ABA','AAA'], {
    A: 'resourcefulbees:slimy_honeycomb',
    B: 'minecraft:orange_dye'
  })
  //Lavacomb
  event.shaped(item.of('minecraft:lava_bucket'), [' A ','ABA',' A '], {
    A: 'resourcefulbees:lava_honeycomb',
    B: 'minecraft:bucket'
  })
  //Centrifuge
  event.remove({ id: 'resourcefulbees:centrifuge' })
  event.shaped(item.of('resourcefulbees:centrifuge', 1), ['ABA','ACA','ADA'], {
    A: 'immersiveengineering:sheetmetal_steel',
    B: 'resourcefulbees:mechanical_centrifuge',
    C: 'minecraft:bucket',
    D: 'minecraft:piston'
  })


  // Log
  function logHoneycomb(result, pattern) {
    event.shaped({
      'pattern': pattern,
      'key': {
        'C': {
          'item': 'resourcefulbees:woody_honeycomb'
        }
      },
      'result': {
        'item': result,
        'count': 8
      }
    })
  }
  logHoneycomb('minecraft:oak_log', ['CCC','   ','   '])
  logHoneycomb('minecraft:spruce_log', ['   ','CCC','   '])
  logHoneycomb('minecraft:birch_log', ['   ','   ','CCC'])
  logHoneycomb('minecraft:jungle_log', ['C  ','C  ','C  '])
  logHoneycomb('minecraft:acacia_log', [' C ',' C ',' C '])
  logHoneycomb('minecraft:dark_oak_log', ['  C','  C','  C'])
  event.shaped(item.of('minecraft:crimson_stem', 8), ['A  ','B  ','A  '], {A: 'resourcefulbees:woody_honeycomb',B: 'resourcefulbees:nether_honeycomb'})
  event.shaped(item.of('minecraft:warped_stem', 8), ['ABA','   ','   '], {A: 'resourcefulbees:woody_honeycomb',B: 'resourcefulbees:nether_honeycomb'})



  // Dye

  function dyeHoneycomb(result, pattern) {
    event.shaped({
      'pattern': pattern,
      'key': {
        'C': {
          'item': 'resourcefulbees:rgbee_honeycomb'
        }
      },
      'result': {
        'item': result,
        'count': 6
      }
    })
  }
  dyeHoneycomb('minecraft:red_dye', ['  C',' C ',' C '])
  dyeHoneycomb('minecraft:green_dye', ['  C','CC ','   '])
  dyeHoneycomb('minecraft:purple_dye', ['  C','  C',' C '])
  dyeHoneycomb('minecraft:cyan_dye', ['C C',' C ','   '])
  dyeHoneycomb('minecraft:light_gray_dye', [' C ',' C ','  C'])
  dyeHoneycomb('minecraft:gray_dye', ['  C',' C ','C  '])
  dyeHoneycomb('minecraft:pink_dye', ['C  ',' C ','  C'])
  dyeHoneycomb('minecraft:lime_dye', ['  C','  C','  C'])
  dyeHoneycomb('minecraft:yellow_dye', [' C ',' C ',' C '])
  dyeHoneycomb('minecraft:light_blue_dye', ['C  ','C  ','C  '])
  dyeHoneycomb('minecraft:magenta_dye', ['   ','   ','CCC'])
  dyeHoneycomb('minecraft:orange_dye', ['   ','CCC','   '])
  dyeHoneycomb('minecraft:blue_dye', ['   ',' C ','C C'])
  dyeHoneycomb('minecraft:brown_dye', ['  C',' C ','  C'])
  dyeHoneycomb('minecraft:black_dye', ['   ','CC ','  C'])
  dyeHoneycomb('minecraft:white_dye', ['CCC','   ','   '])


})