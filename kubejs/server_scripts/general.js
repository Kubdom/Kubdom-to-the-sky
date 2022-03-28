onEvent('recipes', event => {

// Cobblestone generator tier 1
  event.shaped('cobblefordays:tier_1', [
    'WWW',
    'EGL',
    'WWW'
  ], {
    W: '#minecraft:logs',
    E: 'minecraft:water_bucket',
    G: '#forge:glass',
    L: 'minecraft:lava_bucket'
  })
  event.shaped('cobblefordays:tier_1', [
    'WWW',
    'EGL',
    'WWW'
  ], {
    W: '#minecraft:logs',
    E: Item.of('ceramics:clay_bucket', '{fluid:"minecraft:water"}'),
    G: '#forge:glass',
    L: Item.of('ceramics:cracked_clay_bucket', '{fluid:"minecraft:lava"}')
  })

// Cobblestone generator tier 2
  event.shaped('cobblefordays:tier_2', [
    'CCC',
    'CGC',
    'CCC'
  ], {
    C: 'compressium:cobblestone_1',
    G: 'cobblefordays:tier_1'
  })

// Cobblestone generator tier 3
event.shaped('cobblefordays:tier_3', [
  'IBI',
  'BGB',
  'IBI'
], {
  B: 'minecraft:iron_block',
  G: 'cobblefordays:tier_2',
  I: 'minecraft:iron_ingot'
})

// Cobblestone generator tier 4
event.shaped('cobblefordays:tier_4', [
  'IBI',
  'BGB',
  'IBI'
], {
  B: 'minecraft:gold_block',
  G: 'cobblefordays:tier_3',
  I: 'minecraft:gold_ingot'
})

// Cobblestone generator tier 5
event.shaped('cobblefordays:tier_5', [
  'DDD',
  'DGD',
  'DDD'
], {
  D: 'minecraft:diamond',
  G: 'cobblefordays:tier_4'
})





// ender pearl with ender shard
event.shaped('minecraft:ender_pearl', [
  'SSS',
  'SSS',
  'SSS'
], {
  S: 'betterendforge:ender_shard'
})



// Wood to copper barrel
event.shaped('metalbarrels:copper_barrel', [
  'III',
  'ICI',
  'III'
], {
  C: '#forge:chests/wooden',
  I: 'thermal:copper_ingot'
})
// Copper to Iron barrel
event.shaped('metalbarrels:iron_barrel', [
  'III',
  'ICI',
  'III'
], {
  C: 'metalbarrels:copper_barrel',
  I: 'minecraft:iron_ingot'
})
// Iron to Silver barrel
event.shaped('metalbarrels:silver_barrel', [
  'IGI',
  'GCG',
  'IGI'
], {
  C: 'metalbarrels:iron_barrel',
  I: 'thermal:silver_ingot',
  G: '#forge:glass'
})
// Silver to Gold barrel
event.shaped('metalbarrels:gold_barrel', [
  'IGI',
  'GCG',
  'IGI'
], {
  C: 'metalbarrels:silver_barrel',
  I: 'minecraft:gold_ingot',
  G: '#forge:glass'
})
// Gold to Diamond barrel
event.shaped('metalbarrels:diamond_barrel', [
  'GGG',
  'ICI',
  'GGG'
], {
  C: 'metalbarrels:gold_barrel',
  I: 'minecraft:diamond',
  G: '#forge:glass'
})
// Diamond to Crystal barrel
event.shaped('metalbarrels:crystal_barrel', [
  'GGG',
  'GCG',
  'GGG'
], {
  C: 'metalbarrels:diamond_barrel',
  G: '#forge:glass'
})
// Diamond to Obsidian barrel
event.shaped('metalbarrels:obsidian_barrel', [
  'GGG',
  'GCG',
  'GGG'
], {
  C: 'metalbarrels:diamond_barrel',
  G: 'minecraft:obsidian'
})
// Obsidian to Netherite barrel
event.smithing('metalbarrels:netherite_barrel', 'metalbarrels:obsidian_barrel', 'minecraft:netherite_ingot')

// Iron bucket
event.shaped('minecraft:bucket', [
  '   ',
  'P P',
  ' P '
], {
  P: 'thermal:iron_plate'
})

})