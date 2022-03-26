onEvent('recipes', event => {

    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          " MRM ",
          "MOGOM",
          "MCGCM",
          "MOGOM",
          "MMMMM"
        ],
        "key": {
          "M": {
            "item": 'cyclic:mason_iron'
          },
          "O": {
            "item": "minecraft:obsidian"
          },
          "G": {
            "tag": "forge:glass"
          },
          "C": {
            "item": 'create:chromatic_compound'
          },
          "R": {
            "item": "minecraft:redstone_block"
          }
        },
        "result": {
          "item": 'cyclic:solidifier',
          "count": 1
        },
        "acceptMirrored": false
    })


    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          " MRM ",
          "MOGOM",
          "MBGBM",
          "MOGOM",
          "MMMMM"
        ],
        "key": {
          "M": {
            "item": 'cyclic:mason_iron'
          },
          "O": {
            "item": "minecraft:obsidian"
          },
          "G": {
            "tag": "forge:glass"
          },
          "B": {
            "item": 'minecraft:bucket'
          },
          "R": {
            "item": "minecraft:redstone_block"
          }
        },
        "result": {
          "item": 'cyclic:melter',
          "count": 1
        },
        "acceptMirrored": false
    })
	

    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          "EEREE",
          "EOCOE",
          "ECMCE",
          "EOCOE",
          "EEEEE"
        ],
        "key": {
          "M": {
            "item": 'minecraft:enchanting_table'
          },
          "O": {
            "item": "minecraft:obsidian"
          },
          "C": {
            "item": 'createaddition:overcharged_casing'
          },
          "E": {
            "item": 'minecraft:emerald'
          },
          "R": {
            "item": "minecraft:redstone_block"
          }
        },
        "result": {
          "item": 'cyclic:disenchanter',
          "count": 1
        },
        "acceptMirrored": false
    })


























})