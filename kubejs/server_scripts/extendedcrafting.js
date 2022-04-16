onEvent('recipes', event => {

// ender ingot
 event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:iron_ingot"
    },
    "transitionalItem": {
      "item": "create:incomplete_precision_mechanism"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "minecraft:redstone"
          }
        ],
        "results": [
          {
            "item": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "create:large_cogwheel"
          }
        ],
        "results": [
          {
            "item": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "tag": "forge:nuggets/iron"
          }
        ],
        "results": [
          {
            "item": "create:incomplete_precision_mechanism"
          }
        ]
      }
    ],
    "results": [
      {
        "item": "create:precision_mechanism",
        "chance": 120.0
      },
      {
        "item": "create:golden_sheet",
        "chance": 8.0
      }
    ],
    "loops": 6
 })

	
})