onEvent('recipes', event => {
  let data = {
    recipes: [
      {
        mesh: 'string',
        chance: [1.0, 0.5, 0.1],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:pebble_stone'
      },
      {
        mesh: 'string',
        chance: [0.1, 0.5],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:pebble_granite'
      },
      {
        mesh: 'string',
        chance: [0.1, 0.5],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:pebble_diorite'
      },
      {
        mesh: 'string',
        chance: [0.1,0.5],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:pebble_andesite'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_oak'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_spruce'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_birch'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_jungle'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_acacia'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_dark_oak'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_cactus'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_sugarcane'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_carrot'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_potato'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_berry'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_berry'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_kelp'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:seed_bamboo'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:ancient_spore'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:grass_seeds'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:melon_seeds'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'exnihilosequentia:pumpkin_seeds'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'immersiveengineering:seed'
      },
      {
        mesh: 'string',
        chance: [0.125],
        input: 'minecraft:gravel',
        output: 'minecraft:flint'
      },
      {
        mesh: 'flint',
        chance: [0.15],
        input: 'minecraft:gravel',
        output: 'minecraft:flint'
      },
      {
        mesh: 'iron',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'minecraft:flint'
      },
      {
        mesh: 'diamond',
        chance: [0.3],
        input: 'minecraft:gravel',
        output: 'minecraft:flint'
      },
      {
        mesh: 'flint',
        chance: [1.0],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'iron',
        chance: [1.0],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'diamond',
        chance: [1.0],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'emerald',
        chance: [1.0],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'netherite',
        chance: [1.0],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'flint',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'iron',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'diamond',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'emerald',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'netherite',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'flint',
        chance: [0.05],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'netherite',
        chance: [0.3],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'diamond',
        chance: [0.02],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:gravel',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'flint',
        chance: [0.125],
        input: 'minecraft:gravel',
        output: 'minecraft:coal'
      },
      {
        mesh: 'iron',
        chance: [0.165],
        input: 'minecraft:gravel',
        output: 'minecraft:coal'
      },
      {
        mesh: 'diamond',
        chance: [0.205],
        input: 'minecraft:gravel',
        output: 'minecraft:coal'
      },
      {
        mesh: 'emerald',
        chance: [0.255],
        input: 'minecraft:gravel',
        output: 'minecraft:coal'
      },
      {
        mesh: 'netherite',
        chance: [0.355],
        input: 'minecraft:gravel',
        output: 'minecraft:coal'
      },
      {
        mesh: 'flint',
        chance: [0.05],
        input: 'minecraft:gravel',
        output: 'minecraft:lapi_lazuli'
      },
      {
        mesh: 'iron',
        chance: [0.123],
        input: 'minecraft:gravel',
        output: 'minecraft:lapi_lazuli'
      },
      {
        mesh: 'diamond',
        chance: [0.196],
        input: 'minecraft:gravel',
        output: 'minecraft:lapi_lazuli'
      },
      {
        mesh: 'emerald',
        chance: [0.274],
        input: 'minecraft:gravel',
        output: 'minecraft:lapi_lazuli'
      },
      {
        mesh: 'netherite',
        chance: [0.376],
        input: 'minecraft:gravel',
        output: 'minecraft:lapi_lazuli'
      },
    ]
  }

  const exnihilosequentiaSieve = (mesh, input, output, chance) => {
    if (chance.length == 3) {
      event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [{
            "chance": chance[0],
            "mesh": mesh
          }, {
            "chance": chance[0],
            "mesh": mesh
          }, {
            "chance": chance[1],
            "mesh": mesh
          },
          {
            "chance": chance[1],
            "mesh": mesh
          },
          {
            "chance": chance[2],
            "mesh": mesh
          },
          {
            "chance": chance[2],
            "mesh": mesh
          }
        ],
        "input": {
          "item": input
        },
        "result": {
          "item": output
        }
      })
    } else if (chance.length == 2) {
      event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [{
            "chance": chance[0],
            "mesh": mesh
          },
          {
            "chance": chance[0],
            "mesh": mesh
          },
          {
            "chance": chance[1],
            "mesh": mesh
          },
          {
            "chance": chance[1],
            "mesh": mesh
          },
        ],
        "input": {
          "item": input
        },
        "result": {
          "item": output
        }
      })
    } else if (chance.length == 1) {
      event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [{
          "chance": chance[0],
          "mesh": mesh
        }],
        "input": {
          "item": input
        },
        "result": {
          "item": output
        }
      })
    }
  }
  data.recipes.forEach((recipe) => {
    exnihilosequentiaSieve(recipe.mesh, recipe.input, recipe.output, recipe.chance)
  })


  // SAND


  // Cocoa Beans

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.03,
        "mesh": "flint"
      },
      {
        "chance": 0.6,
        "mesh": "iron"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "minecraft:cocoa_beans"
    }
  })

  // Certus Quartz

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.03,
        "mesh": "flint"
      },
      {
        "chance": 0.09,
        "mesh": "iron"
      },
      {
        "chance": 0.125,
        "mesh": "diamond"
      },
      {
        "chance": 0.16,
        "mesh": "emerald"
      },
      {
        "chance": 0.19,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": 'appliedenergistics2:certus_quartz_crystal'
    }
  })

  // Charged Certus Quartz

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": 'appliedenergistics2:charged_certus_quartz_crystal'
    }
  })

  // Gold Piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.2,
        "mesh": "flint"
      },
      {
        "chance": 0.2,
        "mesh": "iron"
      },
      {
        "chance": 0.1,
        "mesh": "diamond"
      },
      {
        "chance": 0.1,
        "mesh": "emerald"
      },
      {
        "chance": 0.1,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_gold"
    }
  })


  // Iron Piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 1.0,
        "mesh": "flint"
      },
      {
        "chance": 1.0,
        "mesh": "iron"
      },
      {
        "chance": 1.0,
        "mesh": "diamond"
      },
      {
        "chance": 1.0,
        "mesh": "emerald"
      },
      {
        "chance": 1.0,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_iron"
    }
  })

  // Uranium Piece (Yellorium)

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
      "chance": 0.275,
      "mesh": "netherite"
    }],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_uranium"
    }
  })

  // Zinc piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.04,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_zinc"
    }
  })

  // Osmium piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.04,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_osmium"
    }
  })


  // Copper piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.05,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.3,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_copper"
    }
  })
  // Lead piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.04,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_lead"
    }
  })

  // Nickel piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.04,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_nickel"
    }
  })

  // silver piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.04,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_silver"
    }
  })

  // Tin piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.04,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_tin"
    }
  })

  // Aluminum piece

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.04,
        "mesh": "flint"
      },
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:piece_aluminum"
    }
  })

  // Electotine

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [{
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.2,
        "mesh": "diamond"
      },
      {
        "chance": 0.25,
        "mesh": "emerald"
      },
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": 'projectred-core:electrotine_dust'
    }
  })







  // DUST








})