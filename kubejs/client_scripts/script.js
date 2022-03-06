// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	event.hide([
		/appliedenergistics2:facade/
	])
})

onEvent('jei.add.items', event => {
	event.add([
		Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}')
	])
  })
