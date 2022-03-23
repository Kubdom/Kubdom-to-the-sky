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
        output: 'exnihilosequentia:seed_darkoak'
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
        output: 'exnihilosequentia:ancient_spores'
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
        output: 'minecraft:melon_seeds'
      },
      {
        mesh: 'string',
        chance: [0.05],
        input: 'minecraft:dirt',
        output: 'minecraft:pumpkin_seeds'
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
        output: 'minecraft:lapis_lazuli'
      },
      {
        mesh: 'iron',
        chance: [0.123],
        input: 'minecraft:gravel',
        output: 'minecraft:lapis_lazuli'
      },
      {
        mesh: 'diamond',
        chance: [0.196],
        input: 'minecraft:gravel',
        output: 'minecraft:lapis_lazuli'
      },
      {
        mesh: 'emerald',
        chance: [0.274],
        input: 'minecraft:gravel',
        output: 'minecraft:lapis_lazuli'
      },
      {
        mesh: 'netherite',
        chance: [0.376],
        input: 'minecraft:gravel',
        output: 'minecraft:lapis_lazuli'
      },
      {
        mesh: 'iron',
        chance: [0.008],
        input: 'minecraft:gravel',
        output: 'minecraft:diamond'
      },
      {
        mesh: 'diamond',
        chance: [0.016],
        input: 'minecraft:gravel',
        output: 'minecraft:diamond'
      },
      {
        mesh: 'emerald',
        chance: [0.024],
        input: 'minecraft:gravel',
        output: 'minecraft:diamond'
      },
      {
        mesh: 'netherite',
        chance: [0.04],
        input: 'minecraft:gravel',
        output: 'minecraft:diamond'
      },
      {
        mesh: 'iron',
        chance: [0.008],
        input: 'minecraft:gravel',
        output: 'minecraft:emerald'
      },
      {
        mesh: 'diamond',
        chance: [0.016],
        input: 'minecraft:gravel',
        output: 'minecraft:emerald'
      },
      {
        mesh: 'emerald',
        chance: [0.024],
        input: 'minecraft:gravel',
        output: 'minecraft:emerald'
      },
      {
        mesh: 'netherite',
        chance: [0.04],
        input: 'minecraft:gravel',
        output: 'minecraft:emerald'
      },
      {
        mesh: 'flint',
        chance: [0.03],
        input: 'minecraft:sand',
        output: 'minecraft:cocoa_beans'
      },
      {
        mesh: 'iron',
        chance: [0.06],
        input: 'minecraft:sand',
        output: 'minecraft:cocoa_beans'
      },
      {
        mesh: 'flint',
        chance: [0.03],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:certus_quartz_crystal'
      },
      {
        mesh: 'iron',
        chance: [0.09],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:certus_quartz_crystal'
      },
      {
        mesh: 'diamond',
        chance: [0.125],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:certus_quartz_crystal'
      },
      {
        mesh: 'emerald',
        chance: [0.16],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:certus_quartz_crystal'
      },
      {
        mesh: 'netherite',
        chance: [0.19],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:certus_quartz_crystal'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:charged_certus_quartz_crystal'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:charged_certus_quartz_crystal'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:charged_certus_quartz_crystal'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'appliedenergistics2:charged_certus_quartz_crystal'
      },
      {
        mesh: 'flint',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'iron',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'diamond',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'emerald',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'netherite',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'flint',
        chance: [1.0],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'iron',
        chance: [1.0],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'diamond',
        chance: [1.0],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'emerald',
        chance: [1.0],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'netherite',
        chance: [1.0],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'netherite',
        chance: [0.5],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_uranium'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_zinc'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_zinc'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_zinc'
      },
      {
        mesh: 'emerald',
        chance: [0.3],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_zinc'
      },
      {
        mesh: 'netherite',
        chance: [0.45],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_zinc'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_osmium'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_osmium'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_osmium'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_osmium'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_osmium'
      },
      {
        mesh: 'flint',
        chance: [0.05],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'netherite',
        chance: [0.3],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'minecraft:sand',
        output: 'projectred-core:electrotine_dust'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'minecraft:sand',
        output: 'projectred-core:electrotine_dust'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'minecraft:sand',
        output: 'projectred-core:electrotine_dust'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'minecraft:sand',
        output: 'projectred-core:electrotine_dust'
      },
      {
        mesh: 'string',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:bone_meal'
      },
      {
        mesh: 'flint',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:bone_meal'
      },
      {
        mesh: 'iron',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:bone_meal'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:bone_meal'
      },
      {
        mesh: 'string',
        chance: [0.07],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:gunpowder'
      },
      {
        mesh: 'flint',
        chance: [0.07],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:gunpowder'
      },
      {
        mesh: 'string',
        chance: [0.02],
        input: 'exnihilosequentia:dust',
        output: 'appliedenergistics2:sky_dust'
      },
      {
        mesh: 'flint',
        chance: [0.08],
        input: 'exnihilosequentia:dust',
        output: 'appliedenergistics2:sky_dust'
      },
      {
        mesh: 'iron',
        chance: [0.16],
        input: 'exnihilosequentia:dust',
        output: 'appliedenergistics2:sky_dust'
      },
      {
        mesh: 'diamond',
        chance: [0.24],
        input: 'exnihilosequentia:dust',
        output: 'appliedenergistics2:sky_dust'
      },
      {
        mesh: 'flint',
        chance: [0.08],
        input: 'exnihilosequentia:dust',
        output: 'appliedenergistics2:certus_quartz_dust'
      },
      {
        mesh: 'iron',
        chance: [0.18],
        input: 'exnihilosequentia:dust',
        output: 'appliedenergistics2:certus_quartz_dust'
      },
      {
        mesh: 'diamond',
        chance: [0.28],
        input: 'exnihilosequentia:dust',
        output: 'appliedenergistics2:certus_quartz_dust'
      },
      {
        mesh: 'flint',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'iron',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'diamond',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'emerald',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'netherite',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'flint',
        chance: [1.0],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'iron',
        chance: [1.0],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'diamond',
        chance: [1.0],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'emerald',
        chance: [1.0],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'netherite',
        chance: [1.0],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_iron'
      },
      {
        mesh: 'flint',
        chance: [0.05],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_copper'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_tin'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_silver'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_lead'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_nickel'
      },
      {
        mesh: 'flint',
        chance: [0.04],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'iron',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'exnihilosequentia:dust',
        output: 'exnihilosequentia:piece_aluminum'
      },
      {
        mesh: 'iron',
        chance: [0.125],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:redstone'
      },
      {
        mesh: 'diamond',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:redstone'
      },
      {
        mesh: 'emerald',
        chance: [0.3],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:redstone'
      },
      {
        mesh: 'netherite',
        chance: [0.35],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:redstone'
      },
      {
        mesh: 'iron',
        chance: [0.0625],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:glowstone_dust'
      },
      {
        mesh: 'diamond',
        chance: [0.125],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:glowstone_dust'
      },
      {
        mesh: 'emerald',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:glowstone_dust'
      },
      {
        mesh: 'netherite',
        chance: [0.3725],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:glowstone_dust'
      },
      {
        mesh: 'iron',
        chance: [0.05],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:blaze_powder'
      },
      {
        mesh: 'diamond',
        chance: [0.1],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:blaze_powder'
      },
      {
        mesh: 'emerald',
        chance: [0.15],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:blaze_powder'
      },
      {
        mesh: 'netherite',
        chance: [0.25],
        input: 'exnihilosequentia:dust',
        output: 'minecraft:blaze_powder'
      },
      {
        mesh: 'flint',
        chance: [0.4],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'iron',
        chance: [0.8],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'diamond',
        chance: [1.0],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'emerald',
        chance: [1.0],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'netherite',
        chance: [1.0],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_gold'
      },
      {
        mesh: 'iron',
        chance: [0.03],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_cobalt'
      },
      {
        mesh: 'diamond',
        chance: [0.06],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_cobalt'
      },
      {
        mesh: 'emerald',
        chance: [0.09],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_cobalt'
      },
      {
        mesh: 'netherite',
        chance: [0.12],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'exnihilosequentia:piece_cobalt'
      },
      {
        mesh: 'iron',
        chance: [0.02],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:ruby'
      },
      {
        mesh: 'diamond',
        chance: [0.04],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:ruby'
      },
      {
        mesh: 'emerald',
        chance: [0.06],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:ruby'
      },
      {
        mesh: 'netherite',
        chance: [0.1],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:ruby'
      },
      {
        mesh: 'iron',
        chance: [0.02],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:sapphire'
      },
      {
        mesh: 'diamond',
        chance: [0.04],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:sapphire'
      },
      {
        mesh: 'emerald',
        chance: [0.06],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:sapphire'
      },
      {
        mesh: 'netherite',
        chance: [0.1],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:sapphire'
      },
      {
        mesh: 'iron',
        chance: [0.02],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:peridot'
      },
      {
        mesh: 'diamond',
        chance: [0.04],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:peridot'
      },
      {
        mesh: 'emerald',
        chance: [0.06],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:peridot'
      },
      {
        mesh: 'netherite',
        chance: [0.1],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'projectred-core:peridot'
      },
      {
        mesh: 'iron',
        chance: [0.05],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'mysticalagriculture:prosperity_shard'
      },
      {
        mesh: 'diamond',
        chance: [0.1],
        input: 'exnihilosequentia:crushed_netherrack',
        output: 'mysticalagriculture:prosperity_shard'
      },
      {
        mesh: 'diamond',
        chance: [0.2],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'mysticalagriculture:prosperity_shard'
      },
      {
        mesh: 'emerald',
        chance: [0.36],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'mysticalagriculture:prosperity_shard'
      },
      {
        mesh: 'netherite',
        chance: [0.52],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'mysticalagriculture:prosperity_shard'
      },
      {
        mesh: 'emerald',
        chance: [0.005],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'draconicevolution:draconium_dust'
      },
      {
        mesh: 'netherite',
        chance: [0.03],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'draconicevolution:draconium_dust'
      },
      {
        mesh: 'diamond',
        chance: [0.02],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'betterendforge:ender_shard'
      },
      {
        mesh: 'emerald',
        chance: [0.05],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'betterendforge:ender_shard'
      },
      {
        mesh: 'netherite',
        chance: [0.1],
        input: 'exnihilosequentia:crushed_end_stone',
        output: 'betterendforge:ender_shard'
      },
      {
        mesh: 'string',
        chance: [0.1],
        input: 'minecraft:soul_sand',
        output: 'minecraft:nether_wart'
      },
      {
        mesh: 'flint',
        chance: [0.3],
        input: 'minecraft:soul_sand',
        output: 'minecraft:quartz'
      },
      {
        mesh: 'iron',
        chance: [0.8],
        input: 'minecraft:soul_sand',
        output: 'minecraft:quartz'
      },
      {
        mesh: 'diamond',
        chance: [1.0],
        input: 'minecraft:soul_sand',
        output: 'minecraft:quartz'
      },
      {
        mesh: 'emerald',
        chance: [1.0],
        input: 'minecraft:soul_sand',
        output: 'minecraft:quartz'
      },
      {
        mesh: 'emerald',
        chance: [0.1],
        input: 'minecraft:soul_sand',
        output: 'minecraft:quartz'
      },
      {
        mesh: 'netherite',
        chance: [1.0],
        input: 'minecraft:soul_sand',
        output: 'minecraft:quartz'
      },
      {
        mesh: 'netherite',
        chance: [0.3],
        input: 'minecraft:soul_sand',
        output: 'minecraft:quartz'
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

  event.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.05,
        "mesh": "diamond"
      }
    ],
    "input": {
      "tag": "minecraft:sand"
    },
    "result": {
      "item": 'astralsorcery:aquamarine'
    },
    "waterlogged": true
  })

  event.custom({
    "type": "exnihilosequentia:hammer",
      "results": [
        {
          "chance": 1.0,
          "item": 'compressium:gravel_1',
          "count": 1
        }
      ],
    "input": {
      "item": 'compressium:cobblestone_1'
    }
  })

  event.custom({
    "type": "exnihilosequentia:hammer",
      "results": [
        {
          "chance": 1.0,
          "item": 'compressium:sand_1',
          "count": 1
        }
      ],
    "input": {
      "item": 'compressium:gravel_1'
    }
  })

  event.custom({
    "type": "exnihilosequentia:hammer",
      "results": [
        {
          "chance": 1.0,
          "item": 'excompressum:compressed_dust',
          "count": 1
        }
      ],
    "input": {
      "item": 'compressium:sand_1'
    }
  })



})