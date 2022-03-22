// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	event.hide([
		/appliedenergistics2:facade/,
		/tconstruct:crafting_station/,
		/tconstruct:tinker_station/,
		/tconstruct:part_builder/,
		/metalbarrels:iron_to_silver/
	])
})

onEvent('jei.add.items', event => {
	event.add([
		Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'),
		Item.of('tconstruct:crafting_station', '{texture:"minecraft:oak_log"}'),
		Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}')
	])
  })