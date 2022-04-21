onEvent('recipes', event => {

// steel casing
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "LPCPL",
    "PLSLP",
    "CSMSC",
    "PLSLP",
    "LPCPL"
  ],
  "key": {
    "L": {"item": 'pneumaticcraft:plastic_brick_light_gray' },
    "P": {"item": 'immersiveengineering:plate_steel' },
    "C": {"item": 'immersiveengineering:wirecoil_structure_steel' },
    "S": {"item": 'mekanism:ingot_steel' },
    "M": {"item": 'industrialforegoing:machine_frame_supreme' }
  },
  "result": {
    "item": 'mekanism:steel_casing'
  }
})

// Metalurgic Infuser
event.shaped('mekanism:metallurgic_infuser', [
    'IFI',
    'RSR',
    'IFI'
  ], {
    I: 'minecraft:iron_ingot',
    F: 'minecraft:furnace',
    R: 'minecraft:redstone',
    S: 'mekanism:steel_casing'
})








	
})