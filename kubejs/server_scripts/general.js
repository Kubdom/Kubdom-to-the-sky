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




})