onEvent('recipes', event => {

  // event.custom({
  //   "type":"immersiveengineering:refinery",
  //   "result":{"fluid":"kubejs:oil","amount":16},
  //   "input0":{"fluid":"immersiveengineering:biodiesel","amount":8},
  //   "input1":{"fluid":"immersivepetroleum:oil","amount":8},
  //   "energy":80
  //   })

  event.custom({
    "type": "immersiveengineering:refinery",
    "result": {
      "fluid": "kubejs:oil",
      "amount": 16
    },
    "input0": {
      "tag": "forge:biodiesel",
      "amount": 8
    },
    "input1": {
      "tag": "forge:crude_oil",
      "amount": 8
    },
    "energy": 80
  })






  
// REVOIR LE FLUID DU SQUEEZER QUI MORCHE PO !!

  event.custom({
    "type": "immersiveengineering:squeezer",
    "result": {
      "tag": "forge:dusts/hop_graphite"
    },
    "fuild": {
      "fluid": "immersivepetroleum:oil"
    },
    "input": {
      "count": 8,
      "base_ingredient": {
        "tag": "forge:dusts/coal_coke"
      }
    },
    "energy": 19200
  })

























})