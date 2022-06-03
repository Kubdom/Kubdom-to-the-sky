onEvent('recipes', event => {

event.custom({
    "type": "thermal:smelter",
    "ingredients": [
      {
        "item": "mekanism:block_steel",
        "count": 8
      },
      {
        "item": "minecraft:iron_block",
        "count": 8
      },
      {
        "item": "immersiveengineering:rs_engineering",
        "count": 4
      }
    ],
    "result": [
      {
        "item": "thermal:machine_frame",
        "count": 1
      }
    ],
    "energy": 12000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "mekanism:block_steel",
      "count": 10
    },
    {
      "item": "minecraft:iron_block",
      "count": 10
    },
    {
      "item": "bigreactors:graphite_block",
      "count": 5
    }
  ],
  "result": [
    {
      "item": "bigreactors:basic_reactorcasing",
      "count": 4
    }
  ],
  "energy": 12000
})

	
})