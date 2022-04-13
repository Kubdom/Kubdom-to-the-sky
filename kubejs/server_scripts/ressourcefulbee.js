onEvent('recipes', event => {

    CraftBasicBee('minecraft:dirt', 'resourcefulbees:dirty_bee_spawn_egg')
    CraftBasicBee('#forge:cobblestone', 'resourcefulbees:rock_bee_spawn_egg')
    CraftBasicBee('#minecraft:logs', 'resourcefulbees:woody_bee_spawn_egg')
    CraftBasicBee('minecraft:netherrack', 'resourcefulbees:nether_bee_spawn_egg')
    CraftBasicBee('minecraft:clay', 'resourcefulbees:clay_bee_spawn_egg')
    CraftBasicBee('minecraft:slime_block', 'resourcefulbees:slimy_bee_spawn_egg')
    CraftBasicBee('earthmobsmod:rainbow_wool', 'resourcefulbees:rgbee_bee_spawn_egg')
    CraftBasicBee('minecraft:end_stone', 'resourcefulbees:end_bee_spawn_egg')
    CraftBasicBee('minecraft:packed_ice', 'resourcefulbees:icy_bee_spawn_egg')





    event.shaped('resourcefulbees:sieve_bee_spawn_egg', [
        'HSH',
        'SAS',
        'HSH'
    ], {
        H: 'minecraft:honeycomb_block',
        A: Item.of('resourcefulbees:bee_jar', '{NoGravity:1b,Entity:"minecraft:bee",Brain:{memories:{}},HurtByTimestamp:0,ForgeData:{excompressum:{NoCompress:1b}},HasStung:0b,Attributes:[{Base:48.0d,Modifiers:[{Operation:1,UUID:[I;-1855720190,515785826,-1871738003,1247217053],Amount:-0.01968289253867191d,Name:"Random spawn bonus"}],Name:"minecraft:generic.follow_range"},{Base:0.30000001192092896d,Name:"minecraft:generic.movement_speed"},{Base:0.08d,Name:"forge:entity_gravity"}],Invulnerable:0b,FallFlying:0b,ForcedAge:0,PortalCooldown:0,AbsorptionAmount:0.0f,FallDistance:0.0f,InLove:0,CanUpdate:1b,DeathTime:0s,BoundingBox:[154.45919450280505d,63.44712964310191d,-125.15913822866916d,155.15919449088412d,64.04712966694377d,-124.4591382405901d],ForgeCaps:{"hats:capability_hat":{hsbH:0.0f,partCount:0,clrR:0.0f,count:0,isNew:0b,hsbS:0.0f,clrG:0.0f,isShowing:0b,enchanted:0b,clrA:0.0f,clrB:0.0f,name:"",hsbB:0.0f,isFavourite:0b},"mekanism:radiation":{radiation:0.0d},"twilightforest:cap_shield":{permshields:0,tempshields:0},"everlastingabilities:org.cyclops.everlastingabilities.api.capability.imutableabilitystore":[],"pneumaticcraft:hacking":{},"eidolon:knowledge":{facts:[],signs:[]}},HandDropChances:[0.085f,0.085f],CannotEnterHiveTicks:0,PersistenceRequired:0b,UUID:[I;-284082851,-1919333156,-2036491238,-603992587],Age:0,TicksSincePollination:13,AngerTime:0,Motion:[-0.06620591227710658d,0.13305744314402407d,0.06620845522167029d],Health:10.0f,HasNectar:0b,Color:"#edc343",display:{Name:\'{"italic":false,"extra":[{"text":" - "},{"translate":"entity.minecraft.bee"}],"translate":"item.resourcefulbees.bee_jar_filled"}\'},KubeJSPersistentData:{},LeftHanded:1b,Air:300s,OnGround:0b,Rotation:[45.003998f,0.0f],HandItems:[{},{}],ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],Pos:[154.80919449684458d,63.44712964310191d,-124.80913823462963d],Fire:-1s,ArmorItems:[{},{},{},{}],CropsGrownSincePollination:0,CanPickUpLoot:0b,HurtTime:0s}'),
        S: '#exnihilosequentia:sieves'
    })


    function CraftBasicBee(inputBlock, output) {
        event.shaped(output, [
            'HBH',
            'BAB',
            'HBH'
        ], {
            H: '#resourcefulbees:resourceful_honeycomb_block',
            A: Item.of('resourcefulbees:bee_jar', '{NoGravity:1b,Entity:"resourcefulbees:sieve_bee",Brain:{memories:{}},HurtByTimestamp:0,ForgeData:{},HasStung:0b,Attributes:[{Base:0.30000001192092896d,Name:"minecraft:generic.movement_speed"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:48.0d,Modifiers:[{Operation:1,UUID:[I;1595065162,792285064,-1939882659,1568273192],Amount:0.02368989593679077d,Name:"Random spawn bonus"}],Name:"minecraft:generic.follow_range"}],Invulnerable:0b,FallFlying:0b,ForcedAge:0,PortalCooldown:0,AbsorptionAmount:0.0f,BeeType:"sieve",FallDistance:0.0f,InLove:0,CanUpdate:1b,DeathTime:0s,BoundingBox:[161.15000000596046d,62.03496801157069d,-126.99811721968291d,161.84999999403954d,62.63496803541255d,-126.29811723160384d],ForgeCaps:{"hats:capability_hat":{hsbH:0.0f,partCount:0,clrR:0.0f,count:0,isNew:0b,hsbS:0.0f,clrG:0.0f,isShowing:0b,enchanted:0b,clrA:0.0f,clrB:0.0f,name:"",hsbB:0.0f,isFavourite:0b},"mekanism:radiation":{radiation:0.0d},"everlastingabilities:org.cyclops.everlastingabilities.api.capability.imutableabilitystore":[],"twilightforest:cap_shield":{permshields:0,tempshields:0},"pneumaticcraft:hacking":{},"eidolon:knowledge":{facts:[],signs:[]}},HandDropChances:[0.085f,0.085f],CannotEnterHiveTicks:0,PersistenceRequired:0b,FeedCount:0,UUID:[I;-948874855,-253277956,-1700295010,-305704883],mutationCount:0,Age:0,TicksSincePollination:21,AngerTime:0,Motion:[0.0d,0.022900646270842893d,-0.054524665646590253d],Health:10.0f,HasNectar:0b,Color:"#edc343",display:{Name:\'{"italic":false,"extra":[{"text":" - "},{"translate":"entity.resourcefulbees.sieve_bee"}],"translate":"item.resourcefulbees.bee_jar_filled"}\'},KubeJSPersistentData:{},LeftHanded:0b,Air:300s,OnGround:0b,Rotation:[180.0f,0.0f],HandItems:[{},{}],ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],Pos:[161.5d,62.03496801157069d,-126.64811722564338d],Fire:-1s,ArmorItems:[{},{},{},{}],CropsGrownSincePollination:0,CanPickUpLoot:0b,HurtTime:0s}'),
            B: inputBlock
        })
    }
	
})