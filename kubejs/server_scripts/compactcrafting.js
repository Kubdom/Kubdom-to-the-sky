onEvent('recipes', event => {
    event.shaped('4x compactcrafting:base', [
        ' F ',
        ' H ',
        'BMB'
      ], {
        F: 'immersiveengineering:floodlight',
        H: Item.of('tconstruct:tough_handle', '{Material:"tconstruct:hepatizon"}'),
        B: 'dustrial_decor:industrial_iron_block',
        M: 'mekanism:ultimate_control_circuit'
      })
      
      event.shaped('4x compactcrafting:projector_dish', [
        'VI ',
        'VMI',
        'VI '
      ], {
        V: '#forge:glass_panes',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:alloy_reinforced'
      })


      

	
})