onEvent('recipes', event => {

// ender ingot
sequencedAssembly('minecraft:iron_ingot', 'kubejs:incomplete_ender_ingot', 'minecraft:redstone', 'minecraft:emerald', 'minecraft:ender_pearl', 'extendedcrafting:ender_ingot', 'betterendforge:ender_shard', 6)

// black iron ingot
sequencedAssembly('extendedcrafting:ender_ingot', 'dustrial_decor:rusty_iron_ingot', 'minecraft:iron_ingot', 'minecraft:coal', 'minecraft:black_dye', 'extendedcrafting:black_iron_ingot', 'minecraft:coal', 4)

	













  function sequencedAssembly(input, transition, ingredient1, ingredient2, ingredient3, output1, output2, nbLoop)
  {
    event.custom({
      "type": "create:sequenced_assembly",
  "ingredient": {
    "item": input
  },
  "transitionalItem": {
    "item": transition
  },
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": transition
        },
        {
          "item": ingredient1
        }
      ],
      "results": [
        {
          "item": transition
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": transition
        },
        {
          "item": ingredient2
        }
      ],
      "results": [
        {
          "item": transition
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": transition
        },
        {
          "item": ingredient3
        }
      ],
      "results": [
        {
          "item": transition
        }
      ]
    }
  ],
  "results": [
    {
      "item": output1,
      "chance": 120.0
    },
    {
      "item": output2,
      "chance": 8.0
    }
  ],
  "loops": nbLoop
    })
  }
      
})