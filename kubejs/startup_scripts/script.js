// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('alpha_ingot').displayName('Alpha Ingot').tooltip("Ingot create with life essence and ...")
	event.create('weak_blood_orb_shard').displayName('Weak Blood Orb Shard')
	event.create('apprentice_blood_orb_shard').displayName('Apprentice Blood Orb Shard')
	event.create('magician_blood_orb_shard').displayName('Magician Blood Orb Shard')
	event.create('master_blood_orb_shard').displayName('Master Blood Orb Shard')
	event.create('incomplete_ender_ingot').displayName('Incomplete Ender Ingot').tooltip("residue of incomplete sequenced assembly")
	event.create('ftbteams_logo').displayName('FTB Teams Logo')
	
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})