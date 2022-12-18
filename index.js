// Discord integration
const clientId = '1031372758032076890';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });
DiscordRPC.register(clientId);

// Visual things
const chalkAnimation = require('chalkercli');
const gradient = require('gradient-string');

// Features
const readline = require('readline');
const Chance = require('chance');
const chance = new Chance();
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

// RPC

uptext = "Main Menu"
downtext = "Good luck."
bigimage = "icon"
smallimage = "menu"
bigimagetext = "Lucid Dreams"
smallimagetext = "Menu"
level = "menu"
version = "2.5 BETA"
timestamp = Date.now()

async function RPCGame(){
    if(!RPC)return;
    RPC.setActivity({
      details: uptext,
      state: downtext,
      largeImageKey: bigimage,
      largeImageText: bigimagetext,
      smallImageKey: smallimage,
      smallImageText: smallimagetext,
      instace: false,
      startTimestamp: timestamp,
      buttons: [
        {
            label: `Oficial Server`,
            url: `https://discord.gg/Ner9pd8eSF`
        }
      ]
    })
}

RPC.on('ready', async () => {
    setInterval(() => {
        RPCGame()
    }, 1000)
})

// Game


let danger = gradient('red', 'red');

language = "pt"
food = 0
junk = 0
karma = 100
saqueador = false
munição = 0
amigos = 0
var itens = [];
var itensoff  = [];


intro();


async function intro(){
    language = ""
    await console.clear()
    await chalkAnimation.glitch('Made by Nix');
    await sleep(1000)
    await loading()
}

async function loading(){
    console.clear()
    const loading = chalkAnimation.glitch('Loading...');
    await sleep(2000);
    loading.stop()
    console.clear()
    menu();
}

async function menu(){
    // RPC
    uptext = "Main Menu"
    downtext = "Good luck."
    bigimage = "icon"
    smallimage = "menu"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Menu"
    level = "menu"

    // Game

    console.clear()
    leitor.question("Beta 2.5\n\n[En] English\n[Pt] Portuguese\n\n", function(answer) {
        if (answer == "pt"){
            language = "pt";
            aviso()
        } 
        else if (answer == "en"){
            language = "en";
            aviso()
        }
        else if (answer !== 0){
            menu();
        }
    });
}

async function aviso(){
    level = "aviso"

    if (language == "pt"){
        await console.clear()
        await console.log("Bem vindo ao Lucid Dreams.")
        await sleep(2000)
        lvl1cap1()

    } 
    else if (language == "en"){
        await console.clear()
        await console.log("Welcome to Lucid Dreams.")
        await sleep(2000)
        lvl1cap1()
    }
}

async function lvl1cap1(){
    // RPC
    uptext = "Chapter: Prologue"
    downtext = "Level: 1"
    bigimage = "icon"
    smallimage = "prologo"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"
    level = "1-1"


    // Game
    console.clear()
    if (language == 'pt'){
        console.clear();
        await sleep(1000)
        console.log('Você está em casa assistindo sua série favorita...');
        await sleep(3000)
        console.log('Já era de madrugada e você estava prestes a dormir, quando...');
        await sleep(3000)
        console.log('Foi interrompido por um som do lado de fora de sua casa.');
        await sleep(3000)

        await leitor.question("\nO que fazer?\n[olhar] [ignorar]\n\n", function(answer) {
            if (answer == "olhar"){
                lvl2_1cap1();
            } 
            else if (answer == "ignorar"){
                lvl2_2cap1();
            }
            else if (answer !== 0){
                lvl1cap1();
            }
        });

    } else if (language == 'en'){
        console.clear();
        await sleep(1000)
        console.log('You are at home watching your favorite series...');
        await sleep(3000)
        console.log('It was dawn and you were about to go to sleep when...');
        await sleep(3000)
        console.log('You were interrupted by a noise outside your house.');
        await sleep(3000)

        await leitor.question("\nWhat to do?\n[go take a look] [ignore]\n\n", function(answer) {
            if (answer == "go take a look"){
                lvl2_1cap1();
            } 
            else if (answer == "ignore"){
                lvl2_2cap1();
            }
            else if (answer !== 0){
                lvl1cap1();
            }
        });
    } 
}

async function lvl2_1cap1(){
    // RPC
    uptext = "Chapter: Prologue"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "prologo"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"
    level = "2-1"


    // Game
    console.clear()
    if (language == 'pt'){
        console.clear();
        console.log("\nVocê vai até o som.")
        await sleep(2000)
        console.clear();
        await sleep(1000)
        console.log('Infelizmente não chega a tempo e vê apenas uma silhueta no escuro...');
        await sleep(3000)
        console.log('\"A silhueta era humanoide...\"');
        await sleep(3000)
        console.log('\"Mas se movia rápido de mais pra ser uma pessoa...\"');
        await sleep(3000)
        console.log('...');
        await sleep(2000)
        console.log('\"Melhor eu ir dormir já não estou raciocinando direito...\"');
        await sleep(3000)
        sleeping();

    } else if (language == 'en'){
        console.clear();
        console.log("\nYou go to the noise.")
        await sleep(2000)
        console.clear();
        await sleep(1000)
        console.log('Unfortunately you dont make it in time and only see a silhouette in the dark...');
        await sleep(3000)
        console.log('\"The silhouette was humanoid...\"');
        await sleep(3000)
        console.log('\"But he moved too fast to be a human...\"');
        await sleep(3000)
        console.log('...');
        await sleep(2000)
        console.log('\"I better go to sleep, Im not thinking straight anymore...\"');
        await sleep(3000)
        sleeping();
    } 
}

async function lvl2_2cap1(){
    // RPC
    uptext = "Chapter: Prologue"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "prologo"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"
    level = "2-1"


    // Game
    console.clear()
    if (language == 'pt'){
        console.clear();
        console.log("\nVocê ignora e volta a dormir.")
        sleep(1500);
        sleeping();
    } else if (language == 'en'){
        console.clear();
        console.log("\nYou ignore it and go to sleep.")
        sleep(1500);
        sleeping();
    } 
}

async function lvl3cap1(){
    // RPC
    uptext = "Chapter: Prologue"
    downtext = "Level: 3"
    bigimage = "icon"
    smallimage = "prologo"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"
    level = "3-1"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Aproximadamente 4:56...")
        await sleep(3000)
        console.clear()
        console.log("Você ouve um barulho de vidro quebrando...")
        await sleep(2000)
        console.log("É a janela da sala...")
        await sleep(2000)
        console.log("...")
        await sleep(3000)
        console.log("Sua casa já não é mais segura.")
        await sleep(1000)

        await leitor.question("\nO que fazer?\n[esperar] [esconder] [fugir]\n\n", function(answer) {
            if (answer == "esperar"){
                lvl3_1cap1();
            } 
            else if (answer == "esconder"){
                lvl3_2cap1();
            }
            else if (answer == "fugir"){
                lvl3_3cap1();
            }
            else if (answer !== 0){
                lvl3cap1()
            }
        });

    } else if(language == "en"){
        console.clear()
        console.log("Approximately 4:56...")
        await sleep(3000)
        console.clear()
        console.log("You hear a sound of breaking glass...")
        await sleep(3000)
        console.log("It's the living room window...")
        await sleep(000)
        console.log("...")
        await sleep(3000)
        console.log("Your home is no longer safe.")
        await sleep(3000)

        await leitor.question("\nWhat to do?\n[wait] [hide] [run away]\n\n", function(answer) {
            if (answer == "wait"){
                lvl3_1cap1();
            } 
            else if (answer == "hide"){
                lvl3_2cap1();
            }
            else if (answer == "run away"){
                lvl3_3cap1();
            }
            else if (answer !== 0){
                lvl3cap1()
            }
        });
    }
}

async function lvl3_1cap1(){
    // RPC
    uptext = "Chapter: Prologue"
    downtext = "Level: 3"
    bigimage = "icon"
    smallimage = "prologo"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"
    level = "3-1"


    // Game
    console.clear()
    if (language == 'pt'){
        console.clear();
        console.log("Você espera...")
        await sleep(3000)
        console.log('Mas que ideia burra...');
        await sleep(3000)
        death();
    } else if (language == 'en'){
        console.clear();
        console.log("You wait...")
        await sleep(3000)
        console.log('What a dumb idea...');
        await sleep(3000)
        death();
    } 
}

async function lvl3_2cap1(){
    // RPC
    uptext = "Chapter: Prologue"
    downtext = "Level: 3"
    bigimage = "icon"
    smallimage = "prologo"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"
    level = "3-1"


    // Game
    console.clear()
    if (language == 'pt'){
        console.clear();
        console.log("Você se esconde no seu guarda roupa...")
        await sleep(3000)
        console.log('"Que coisa horrivel..."');
        await sleep(3000)
        console.log('"Parece com um humano mas..."');
        await sleep(3000)
        console.log('"Isso são raizes?!"');
        await sleep(3000)
        console.log('O ser se aproxima...');
        await sleep(3000)
        console.log('O fim?');
        await sleep(3000)
        console.log('Parece que não.');
        await sleep(3000)
        console.log('Ele vai se vira e você consegue fugir!');
        await sleep(3000)
        lvl3_3cap1()
    } else if (language == 'en'){
        console.clear();
        console.log("You hide in your wardrobe...")
        await sleep(3000)
        console.log('"What a horrible thing..."');
        await sleep(3000)
        console.log('"Looks like a human but..."');
        await sleep(3000)
        console.log('"Are those roots?!"');
        await sleep(3000)
        console.log('The creature comes closer...');
        await sleep(3000)
        console.log('The end?');
        await sleep(3000)
        console.log('It seems not.');
        await sleep(3000)
        console.log('He turns and you manage to escape!');
        await sleep(3000)
        lvl3_3cap1()
    } 
}

async function lvl3_3cap1(){
    // RPC
    uptext = "Running..."
    downtext = "Pray for me."
    bigimage = "icon"
    smallimage = "run"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"
    level = "3-1"


    // Game
    console.clear()
    if (language == 'pt'){
        console.clear();
        console.log("Você corre...")
        await sleep(3000)
        console.log('Ele corre atrás de você...');
        await sleep(3000)
        console.log('Ele esta quase te alcançando, mas...');
        await sleep(3000)
        console.log('Um barulho alto...');
        await sleep(3000)
        console.log('A luz da cidade é desligada...');
        await sleep(3000)
        console.log('E o ser corre para o som...');
        await sleep(3000)
        console.log('...');
        await sleep(3000)
        console.log('Sorte?');
        await sleep(3000)
        intermission1();
    } else if (language == 'en'){
        console.clear();
        console.log("You run...")
        await sleep(3000)
        console.log('He runs after you...');
        await sleep(3000)
        console.log('Hes almost catching up with you, but...');
        await sleep(3000)
        console.log('A loud noise...');
        await sleep(3000)
        console.log('The city light is turned off...');
        await sleep(3000)
        console.log('And the creature runs to the noise...');
        await sleep(3000)
        console.log('...');
        await sleep(3000)
        console.log('Luck?');
        await sleep(3000)
        intermission1();
    } 
}

async function intermission1(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Do not get caught."
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "1-2"


    // Game
    console.clear()
    if (language == 'pt'){
        console.clear();
        await chalkAnimation.glitch('capítulo 2...');
        await sleep(3000)
        console.clear()
        await chalkAnimation.glitch('A Floresta...');
        await sleep(3000)
        console.clear();
        lvl1cap2()

    } else if (language == 'en'){
        console.clear();
        await chalkAnimation.glitch('Chapter 2...');
        await sleep(3000)
        console.clear()
        await chalkAnimation.glitch('The Forest...');
        await sleep(3000)
        console.clear();
        lvl1cap2()

    } 
}

async function lvl1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 1"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "1-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Você conseguiu.")
        await sleep(3000)
        console.clear()
        console.log("Você está a salvo por enquanto.")
        await sleep(3000)
        console.log("Você vê um posto de gasolina e uma floresta...")
        await sleep(2000)
        console.log("...")
        await sleep(1000)

        await leitor.question("\nO que fazer?\n[posto] [floresta]\n\n", function(answer) {
            if (answer == "posto"){
                lootinggas();
            } 
            else if (answer == "floresta"){
                lvl2cap2();
            }
            else if (answer !== 0){
                lvl1cap2();
            }
        });

    } else if(language == "en"){
        console.clear()
        console.log("You did it.")
        await sleep(3000)
        console.clear()
        console.log("You are safe for now.")
        await sleep(3000)
        console.log("You see a gas station and a forest.")
        await sleep(2000)
        console.log("...")
        await sleep(1000)

        await leitor.question("\nWhat to do?\n[gas station] [forest]\n\n", function(answer) {
            if (answer == "gas station"){
                lootinggas();
            } 
            else if (answer == "forest"){
                lvl2cap2();
            }
            else if (answer !== 0){
                lvl1cap2();
            }
        });
    }
}

async function lvl1_1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 1"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "1-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Você está a salvo por enquanto.")
        await sleep(500)
        console.log("Você vê um posto de gasolina e uma floresta...")
        await sleep(500)
        console.log("...")
        await sleep(500)

        await leitor.question("\nO que fazer?\n[posto] [floresta]\n\n", function(answer) {
            if (answer == "posto"){
                saqueado();
                async function saqueado(){
                    console.clear()
                    console.log("Já saqueado.")
                    await sleep(2000)
                    lvl1_1cap2();
                }
            } 
            else if (answer == "floresta"){
                lvl2cap2();
            }
            else if (answer !== 0){
                lvl1_1cap2();
            }
        });

    } else if(language == "en"){
        console.clear()
        console.log("You are safe for now.")
        await sleep(500)
        console.log("You see a gas station and a forest.")
        await sleep(500)
        console.log("...")
        await sleep(500)

        await leitor.question("\nO que fazer?\n[gas station] [forest]\n\n", function(answer) {
            if (answer == "gas station"){
                saqueado();
                async function saqueado(){
                    console.clear()
                    console.log("Already looted.")
                    await sleep(2000)
                    lvl1_1cap2();
                }
            } 
            else if (answer == "floresta"){
                lvl2cap2();
            }
            else if (answer !== 0){
                lvl1_1cap2();
            }
        });
    }
}

async function lvl2cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "2-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Você corre para a floresta.")
        await sleep(3000)
        console.log("Gritos?")
        await sleep(5000)
        console.log("A cidade já não é mais segura.")
        await sleep(2000)
        console.log("...")
        await sleep(1000)

        await leitor.question("\nO que fazer?\n[acampamento] [fogueira]\n\n", function(answer) {
            if (answer == "acampamento"){
                lvl2_2cap2();
            } 
            else if (answer == "fogueira"){
                lvl2_1cap2();
            }
            else if (answer !== 0){
                lvl1cap2();
            }
        });

    } else if(language == "en"){
        console.clear()
        console.log("You run into the forest...")
        await sleep(3000)
        console.log("People screaming?")
        await sleep(5000)
        console.log("The city is no longer safe.")
        await sleep(2000)
        console.log("...")
        await sleep(1000)

        await leitor.question("\nWhat to do?\n[camp] [capfire]\n\n", function(answer) {
            if (answer == "camp"){
                lvl2_2cap2();
            } 
            else if (answer == "capfire"){
                lvl2_1cap2();
            }
            else if (answer !== 0){
                lvl1cap2();
            }
        });
    }
}

async function lvl2_1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "2-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Você junta os galhos secos...")
        await sleep(3000)
        console.log("Usa um isqueiro para acender...")
        await sleep(3000)
        console.log("Mas...")
        await sleep(5000)
        console.log("Uma gangue de saqueadores aparece...")
        await sleep(3000)
        console.log("Você tenta se defender mas são muitos...")
        await sleep(5000)
        death();

    } else if(language == "en"){
        console.clear()
        console.log("You take some dry branches...")
        await sleep(3000)
        console.log("Use a lighter to light it...")
        await sleep(3000)
        console.log("But...")
        await sleep(5000)
        console.log("A gang of raiders appears...")
        await sleep(3000)
        console.log("You try to defend yourself but there are too many...")
        await sleep(5000)
        death();
    }
}

async function lvl2_2cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "3-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Você monta um abrigo provisório.")
        await sleep(3000)
        console.log("Dentro dele tentar descançar mas...")
        await sleep(3000)
        console.log("Passos?")
        await sleep(3000)
        console.log("São aquelas criaturas!")
        await sleep(3000)
        console.log("Elas não te enxergam no escuro")
        await sleep(3000)
        console.log("Passos e ruidos te assombram a noite toda...")
        await sleep(5000)
        lvl3cap2();
    } else if(language == "en"){
        console.clear()
        console.log("You set up a temporary shelter.")
        await sleep(3000)
        console.log("You try to rest but...")
        await sleep(3000)
        console.log("Footsteps?")
        await sleep(3000)
        console.log("It's those creatures!")
        await sleep(3000)
        console.log("They can't see you in the dark.")
        await sleep(3000)
        console.log("Footsteps and noises haunt you all night long...")
        await sleep(5000)
        lvl3cap2();
    }
}

async function lvl3cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 3"
    bigimage = "icon"
    smallimage = "trade"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "3-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Você acorda após desmaiar de sono...")
        await sleep(3000)
        console.log("Parece que eles foram embora.")
        await sleep(3000)
        console.log("Mas...")
        await sleep(3000)
        console.log("Você escuta uma vóz...")
        await sleep(3000)
        console.log(`"Eles ja se foram, preciso da sua ajuda..."`)
        await sleep(3000)
        console.log(`...`)
        await sleep(3000)
        console.log('Era uma senhora.')
        await sleep(3000)
        console.log('Ela propôs uma barganha.')
        await sleep(3000)
        console.log('"Qualquer comida que tenhas pelo meu amuleto da sorte..."')
        await sleep(3000)
        console.log('"Por favor, estou faminta!"')
        await sleep(1000)

        await leitor.question("\nO que fazer?\n[assaltar] [barganhar] [ignorar]\n\n", function(answer) {
            if (answer == "assaltar"){
                lvl3_2cap2()
            } 
            else if (answer == "barganhar"){
                lvl3_1cap2()
            }
            else if (answer == "ignorar"){
                lvl4cap2()
            }
            else if (answer !== 0){
                lvl3cap2()
            }
        });

    } else if(language == "en"){
        console.clear()
        console.log("You wake up after passing out from sleep...")
        await sleep(3000)
        console.log("They seem to have left.")
        await sleep(3000)
        console.log("Mas...")
        await sleep(3000)
        console.log("You hear a voice...")
        await sleep(3000)
        console.log(`"They are gone, I need your help.`)
        await sleep(3000)
        console.log(`...`)
        await sleep(3000)
        console.log('It was an old lady...')
        await sleep(3000)
        console.log('She offered a bargain.')
        await sleep(3000)
        console.log('"Any food you have for my lucky charm..."')
        await sleep(3000)
        console.log('"Please, Im starving!"')
        await sleep(1000)

        await leitor.question("\nO que fazer?\n[rob] [bargain] [ignore]\n\n", function(answer) {
            if (answer == "rob"){
                lvl3_2cap2()
            } 
            else if (answer == "bargain"){
                lvl3_1cap2()
            }
            else if (answer == "ignore"){
                lvl4cap2()
            }
            else if (answer !== 0){
                lvl3cap2()
            }
        });
    }
}

async function lvl3_1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 3"
    bigimage = "icon"
    smallimage = "trade"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "3-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Você escolhe barganhar.")

        if(food >= 1){
            itens.push('Amuleto da Sorte');

            trade();

            async function trade(){
                await sleep(2000)
                console.log("Você trocou 1 Comida por 1 Amuleto da sorte!")
                await sleep(3000)
                console.log(`Itens: ${itens}`)
                await sleep(3000)
                lvl4cap2()

            }

        } else if(food <= 0){

            trade()

            async function trade(){
                await sleep(2000)
                console.log("Você não tem comida suficiente.")
                await sleep(3000)
                console.log("A troca falhou.")
                await sleep(3000)
                lvl3cap2()
            }
        }

    } else if(language == "en"){
        console.clear()
        console.log("Você escolhe barganhar.")
        
        if(food >= 1){
            itens.push('Lucky Charm');

            trade();

            async function trade(){
                await sleep(2000)
                console.log("You have traded 1 Food for 1 Lucky Charm!")
                await sleep(3000)
                console.log(`Items: ${itens}`)
                await sleep(3000)
                lvl4cap2()

            }

        } else if(food <= 0){

            trade()

            async function trade(){
                await sleep(2000)
                console.log("You don't have enough food.")
                await sleep(3000)
                console.log("The bargain failed.")
                await sleep(3000)
                lvl3cap2()

            }
        }
    }
}

async function lvl3_2cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 3"
    bigimage = "icon"
    smallimage = "robber"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "3-2"

    // Game
    if(language == "pt"){
        console.clear()
        itens.push('Amuleto da Sorte');
        console.log("Você escolhe assaltar...")
        await sleep(3000)
        console.log(`Itens: ${itens}`)
        await sleep(3000)
        karma = karma - 30
        console.log(`Karma: ${karma} (-30)`)
        lvl4cap2()


    } else if(language == "en"){
        console.clear()
        itens.push('Lucky Charm');
        console.log("You choose to rob...")
        await sleep(3000)
        console.log(`Items: ${itens}`)
        await sleep(3000)
        karma = karma - 30
        console.log(`Karma: ${karma} (-30)`)
        lvl4cap2()
    }
}

async function lvl4cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 4"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "4-2"

    // Game
    if(language == "pt"){
        console.clear()
        console.log("Depois do ocorrido você escolhe explorar...")
        await sleep(1000)
        console.log("Mas...")
        await sleep(3000)
        console.log("Explorar o que mesmo?")
        await sleep(2000)

        await leitor.question("\nO que fazer?\n[floresta] [cidade]\n\n", function(answer) {
            if (answer == "floresta"){
                lvl4_2cap2()
            } 
            else if (answer == "cidade"){
                lvl4_1cap2()
            }
            else if (answer !== 0){
                lvl4cap2()
            }
        });

    } else if(language == "en"){
        console.clear()
        console.log("After that you choose to explore...")
        await sleep(1000)
        console.log("But...")
        await sleep(3000)
        console.log("Explore what?")
        await sleep(2000)

        await leitor.question("\nWhat to do?\n[forest] [city]\n\n", function(answer) {
            if (answer == "forest"){
                lvl4_2cap2()
            } 
            else if (answer == "city"){
                lvl4_1cap2()
            }
            else if (answer !== 0){
                lvl4cap2()
            }
        });
    }
}

async function lvl4_2cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Looting..."
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "4-2"

    // Game
    if(language == "pt"){
        console.clear()
        let str = 'Saqueando.';

        const text = chalkAnimation.glitch(str, 1);

        animation1 = setInterval(() => {
            text.replace(str += '.');
        }, 1000);

        await sleep(3000)
        text.stop()
        clearInterval(animation1);
        console.clear()
        food = food + 3
        await sleep(1000)
        console.log(`+3 Comida`)
        await sleep(1000)
        console.clear()
        console.log(`Comida: ${food}`)
        await sleep(3000)
        lvl4_2_1cap2();

    } else if(language == "en"){
        console.clear()
        let str = 'Looting.';

        const text = chalkAnimation.glitch(str, 1);

        animation2 = setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        clearInterval(animation2);
        console.clear()
        food = food + 3
        await sleep(1000)
        console.log(`+3 Food`)
        await sleep(1000)
        console.clear()
        console.log(`Food: ${food}`)
        await sleep(3000)
        lvl4_2_1cap2();
    }
}

async function lvl4_2_1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 4"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "4-2"

    // Game
    if(language == "pt"){
        console.clear()
        await sleep(2000)
        console.log("Ouviu isso?")
        await sleep(1000)

        await leitor.question("\nO que fazer?\n[procurar] [fugir]\n\n", function(answer) {
            if (answer == "procurar"){
                lvl4dog()
            } 
            else if (answer == "fugir"){
                lvl5cap2()
            }
            else if (answer !== 0){
                lvl4_2_1cap2()
            }
        });

    } else if(language == "en"){
        console.clear()
        await sleep(2000)
        console.log("Did you hear that?")
        await sleep(1000)

        await leitor.question("\nWhat to do?\n[have a look] [run away]\n\n", function(answer) {
            if (answer == "have a look"){
                lvl4dog()
            } 
            else if (answer == "run away"){
                lvl5cap2()
            }
            else if (answer !== 0){
                lvl4_2_1cap2()
            }
        });
    }
}

async function lvl4dog(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Woof?"
    bigimage = "icon"
    smallimage = "dog"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "4-2"

    // Game
    if(language == "pt"){
        console.clear()
        await sleep(2000)
        console.log("Au?")
        await sleep(2000)
        console.log("Um cachorro!")
        await sleep(3000)
        console.log("Ele se alegra com sua chegada!")
        await sleep(3000)
        console.log("Há um nome na coleira...")
        await sleep(3000)
        console.log("Apollo, é seu nome.")
        await sleep(3000)
        console.log("+1 Apollo")
        await sleep(2000)
        itens.push('Apollo');
        console.log(`Itens: ${itens}`)
        await sleep(3000)
        lvl5cap2()

    } else if(language == "en"){
        console.clear()
        await sleep(2000)
        console.log("Woof?")
        await sleep(2000)
        console.log("A dog!")
        await sleep(3000)
        console.log("He is delighted with your arrival!")
        await sleep(3000)
        console.log("There is a name on the collar...")
        await sleep(3000)
        console.log("Apollo, is his name.")
        await sleep(3000)
        console.log("+1 Apollo")
        await sleep(2000)
        itens.push('Apollo');
        console.log(`Items: ${itens}`)
        await sleep(3000)
        lvl5cap2()
    }
}

async function lvl4_1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Looting..."
    bigimage = "icon"
    smallimage = "city"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "4-2"

    // Game
    if(language == "pt"){
        console.clear()
        let str = 'Saqueando.';

        const text = chalkAnimation.glitch(str, 1);

        animation3 = setInterval(() => {
            text.replace(str += '.');
        }, 1000);

        await sleep(3000)
        text.stop()
        clearInterval(animation3);
        console.clear()
        junk = junk + 3
        await sleep(1000)
        console.log(`+3 Sucata`)
        await sleep(1000)
        console.clear()
        console.log(`Sucata: ${junk}`)
        await sleep(3000)
        lvl4_1_1cap2();

    } else if(language == "en"){
        console.clear()
        let str = 'Looting.';

        const text = chalkAnimation.glitch(str, 1);

        animation4 = setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        clearInterval(animation4);
        console.clear()
        junk = junk + 3
        await sleep(1000)
        console.log(`+3 Junk`)
        await sleep(1000)
        console.clear()
        console.log(`Junk: ${junk}`)
        await sleep(3000)
        lvl4_1_1cap2();
    }
    
}

async function lvl4_1_1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 4"
    bigimage = "icon"
    smallimage = "city"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "4-2"

    // Game
    if(language == "pt"){
        console.clear()
        await sleep(2000)
        console.log("Ouviu isso?")
        await sleep(1000)

        await leitor.question("\nO que fazer?\n[procurar] [fugir]\n\n", function(answer) {
            if (answer == "procurar"){
                lvl4cat()
            } 
            else if (answer == "fugir"){
                lvl5cap2()
            }
            else if (answer !== 0){
                lvl4_1_1cap2()
            }
        });

    } else if(language == "en"){
        console.clear()
        await sleep(2000)
        console.log("Did you hear that?")
        await sleep(1000)

        await leitor.question("\nWhat to do?\n[have a look] [run away]\n\n", function(answer) {
            if (answer == "have a look"){
                lvl4cat()
            } 
            else if (answer == "run away"){
                lvl5cap2()
            }
            else if (answer !== 0){
                lvl4_1_1cap2()
            }
        });
    }
}

async function lvl4cat(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Meow?"
    bigimage = "icon"
    smallimage = "cat"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "4-2"

    // Game
    if(language == "pt"){
        console.clear()
        await sleep(2000)
        console.log("Miau?")
        await sleep(2000)
        console.log("Um gato!")
        await sleep(3000)
        console.log("Ele se alegra com sua chegada!")
        await sleep(3000)
        console.log("Há um nome na coleira...")
        await sleep(3000)
        console.log("Lucius, é seu nome.")
        await sleep(3000)
        console.log("+1 Lucius")
        await sleep(2000)
        itens.push('Lucius');
        console.log(`Itens: ${itens}`)
        await sleep(3000)
        lvl5cap2()

    } else if(language == "en"){
        console.clear()
        await sleep(2000)
        console.log("Meow?")
        await sleep(2000)
        console.log("A cat!")
        await sleep(3000)
        console.log("He is delighted with your arrival!")
        await sleep(3000)
        console.log("There is a name on the collar...")
        await sleep(3000)
        console.log("Lucius, is his name.")
        await sleep(3000)
        console.log("+1 Lucius")
        await sleep(2000)
        itens.push('Lucius');
        console.log(`Items: ${itens}`)
        await sleep(3000)
        lvl5cap2a()
    }
}

async function lvl5cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 5"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "5-2"

    // Game
    if(language == "pt"){
        console.clear()
        await sleep(3000)
        console.log(`Você avista uma daquelas criaturas perto do seu acampamento...`)
        await sleep(3000)
        console.log("Você consegue se esconder e observa.")
        await sleep(3000)
        console.log(`"O que?! Tiros?"`)
        await sleep(3000)
        console.log(`São saqueadores.`)
        await sleep(4000)
        console.log(`Após 10 segundos de tiroteio tudo para...`)
        await sleep(3000)
        console.log(`Você decide olhar para ver o que aconteceu`)
        await sleep(3000)
        console.log(`...`)
        await sleep(5000)
        console.log(`Estão todos mortos.`)
        await sleep(4000)
        console.log(`Já é seguro para sair.`)
        await sleep(3000)
        console.log(`Mas já está escurecendo.`)
        await sleep(4000)

        await leitor.question(`\nO que fazer?\n[saquear] [acampamento]\n\n`, function(answer) {
            if (answer == "saquear"){
                lvl5_1cap2()
            } 
            else if (answer == "acampamento"){
                lvl5_2cap2()
            }
            else if (answer !== 0){
                lvl5cap2()
            }
        });

    } else if(language == "en"){
        console.clear()
        await sleep(3000)
        console.log(`You spot one of those creatures near your camp...`)
        await sleep(3000)
        console.log("You manage to hide and watch.")
        await sleep(3000)
        console.log(`"What? Shots?"`)
        await sleep(3000)
        console.log(`They are looters.`)
        await sleep(4000)
        console.log(`After 10 seconds of shooting everything stops...`)
        await sleep(3000)
        console.log(`You decide to look to see what happened`)
        await sleep(3000)
        console.log(`...`)
        await sleep(5000)
        console.log(`They are all dead.`)
        await sleep(4000)
        console.log(`It is already safe to go out.`)
        await sleep(3000)
        console.log(`But it is already getting dark.`)
        await sleep(4000)

        await leitor.question(`\nWhat to do?\n[loot] [camp]\n\n`, function(answer) {
            if (answer == "loot"){
                lvl5_1cap2()
            } 
            else if (answer == "camp"){
                lvl5_2cap2()
            }
            else if (answer !== 0){
                lvl5cap2()
            }
        });
    }
}

async function lvl5_1cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Looting..."
    bigimage = "icon"
    smallimage = "loot"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "5-2"


    // Game

    worked = chance.bool({ likelihood: 40 })


    if(language == "pt"){
    console.clear()
    await sleep(1000)
    console.log("Essa ação tem 60% de chance de falhar.")
    await sleep(3000)
    console.clear()
    let str = 'Saqueando.';

    const text = chalkAnimation.glitch(str, 1);

    setInterval(() => {
        text.replace(str += '.');
    }, 1000);
    await sleep(3000)
    text.stop()
    console.clear()

    if(worked = true){
        success();
    }else if(worked = false){
        death();
    }

    async function success(){
        food = food + 2
        junk = junk + 3
        await sleep(1000)
        console.log(`+2 Comida\n+3 Sucata`)
        await sleep(1000)
        console.clear()
        console.log(`Comida: ${food}\nSucata: ${junk}`)
        await sleep(3000)
        lvl5_2cap2();
    }

    } else if(language == "en"){
        console.clear()
    await sleep(1000)
    console.log("This action has a 60% chance of failure.")
    await sleep(3000)
    console.clear()
    let str = 'Looting.';

    const text = chalkAnimation.glitch(str, 1);

    setInterval(() => {
        text.replace(str += '.');
    }, 1000);
    await sleep(3000)
    text.stop()
    console.clear()

    if(worked = true){
        success();
    }else if(worked = false){
        death();
    }

    async function success(){
        food = food + 2
        junk = junk + 3
        await sleep(1000)
        console.log(`+2 Food\n+3 Junk`)
        await sleep(1000)
        console.clear()
        console.log(`Food: ${food}\nJunk: ${junk}`)
        await sleep(3000)
        lvl5_2cap2();
    }
    }
}

async function lvl5_2cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Sleeping..."
    bigimage = "icon"
    smallimage = "bed"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "5-2"

    // Game
    if(language == "pt"){
    console.clear()
    let str = 'Dormindo.';

    const text = chalkAnimation.glitch(str, 1);

    setInterval(() => {
        text.replace(str += '.');
    }, 1000);
    await sleep(3000)
    text.stop()
    await sleep(1000)
    lvl6cap2()
    } else if(language == "en"){
        console.clear()
        let str = 'Sleeping.';
    
        const text = chalkAnimation.glitch(str, 1);
    
        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        await sleep(1000)
        lvl6cap2()
    }
}

async function lvl6cap2(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Level: 6"
    bigimage = "icon"
    smallimage = "forest"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"
    level = "6-2"


    // Game
    if(language == "pt"){
        console.clear()
        await sleep(3000)
        console.log(`Após dois dias você acha uma boa ideia procurar por sobreviventes...`)
        await sleep(3000)
        console.log("Você vai até a cidade...")
        await sleep(3000)
        console.log(`Encontra a casa de seus pais...`)
        await sleep(3000)
        console.log(`Você ouve movimento dentro da casa.`)
        await sleep(4000)
        console.log(`"São eles mas... não são..."`)
        await sleep(5000)
        console.log(`Pessoas falsas...`)
        await sleep(3000)
        console.log(`...`)
        await sleep(3000)
        console.log(`Essa casa não pertence mais a eles.`)
        await sleep(3000)
        console.log(`Absolutamente ninguém da cidade está vivo.`)
        await sleep(3000)
        await chalkAnimation.glitch('Eles te viram.');
        await sleep(3000)
        await chalkAnimation.glitch(`Você corre.`)
        await sleep(3000)
        await chalkAnimation.glitch(`Luzes aparecem na floresta.`)
        await sleep(3000)
        await chalkAnimation.glitch(`Você é ${danger('pego')}.`)
        await sleep(2000)
        await chalkAnimation.glitch('Debaixo dos nossos pés...');
        infected()
    } else if(language == "en"){
        console.clear()
        await sleep(3000)
        console.log(`After two days you think it's a good idea to look for survivors...`)
        await sleep(3000)
        console.log("You go to the city...")
        await sleep(3000)
        console.log(`you find your parents' home...`)
        await sleep(3000)
        console.log(`You hear people inside the house.`)
        await sleep(4000)
        console.log(`"That's them but... they're not..."`)
        await sleep(5000)
        console.log(`Fake people...`)
        await sleep(3000)
        console.log(`...`)
        await sleep(3000)
        console.log(`This house no longer belongs to them.`)
        await sleep(3000)
        console.log(`Absolutely no one in the city is alive.`)
        await sleep(3000)
        console.log(`They saw you.`)
        await sleep(3000)
        console.log(`You run.`)
        await sleep(3000)
        console.log(`Lights appear in the forest.`)
        await sleep(3000)
        console.log(`You got ${danger('caught')}.`)
        await sleep(2000)
        await chalkAnimation.glitch('Under our feet...');
        infected()
    }
}

async function lvl1_cap3(){
    // RPC
    uptext = "Chapter: The disease"
    downtext = "Level: 1"
    bigimage = "icon"
    smallimage = "disease"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The disease"
    level = "1-3"

    // Game
    if(language == "pt"){
        console.clear()
        await sleep(3000)
        console.log(`Você consegue correr e foge pro acampamento.`)
        await sleep(3000)
        console.log(`Os saqueadores te abordam...`)
        await sleep(3000)
        console.log(`Foram eles que te salvaram.`)
        await sleep(3000)
        console.log(`Eles te oferecem um lugar no bando.`)
        await sleep(3000)

        await leitor.question("\nO que fazer?\n[aceitar] [recusar]\n\n", function(answer) {
            if (answer == "aceitar"){
                saqueador();
                async function saqueador(){
                itens.push('Ak47');
                itens.push('Isqueiro');
                itens.push('Medalha de saqueador');
                munição = munição + 30
                console.clear()
                await sleep(1000)
                console.log(`Você é um ${danger("saqueador")} agora.`)
                await sleep(1000)
                console.log(`Mas prefere continuar sozinho.`)
                await sleep(3000)
                console.clear();
                console.log(`Itens: ${itens}`)
                await sleep(1000)
                console.log(`Munição: ${munição}`)
                }
                lvl2_cap3();
            } else if (answer == "recusar"){
                saqueador();
                async function saqueador(){
                console.clear()
                await sleep(1000)
                console.log(`Você recusou.`)
                }
                lvl2_cap3();
            }
            else if (answer !== 0){
                lvl1_cap3();
            }
        });

    } if(language == "en"){
        console.clear()
        await sleep(3000)
        console.log(`You manage to run and escape to the camp.`)
        await sleep(3000)
        console.log(`The looters approach you...`)
        await sleep(3000)
        console.log(`Foram eles que te salvaram.`)
        await sleep(3000)
        console.log(`They offer you a place in the gang.`)
        await sleep(3000)

        await leitor.question("\nWhat to do?\n[aceppt] [decline]\n\n", function(answer) {
            if (answer == "aceppt"){
                saqueador();
                async function saqueador(){
                itens.push('Ak47');
                itens.push('Lighter');
                itens.push(`Marauder's medal`);
                munição = munição + 30
                console.clear()
                await sleep(1000)
                console.log(`You are a ${danger("looter")} now.`)
                await sleep(1000)
                console.log(`But you prefer to remain alone.`)
                await sleep(3000)
                console.clear();
                console.log(`Items: ${itens}`)
                await sleep(1000)
                console.log(`Ammo: ${munição}`)
                }
                lvl2_cap3();
            } else if (answer == "decline"){
                saqueador();
                async function saqueador(){
                console.clear()
                await sleep(1000)
                console.log(`You declined.`)
                }
                lvl2_cap3();
            }
            else if (answer !== 0){
                lvl1_cap3();
            }
        });

    }
}

async function lvl2_cap3(){
    // RPC
    uptext = "Chapter: The disease"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "walk"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The disease"
    level = "2-3"

    // Game
    if(language == "pt"){
        console.clear()
        await sleep(3000)
        console.log(`Hora de sair do acampamento.`)
        await sleep(3000)
        console.log(`Você começa sua jornada...`)
        await sleep(3000)
        console.log(`...`)
        await sleep(6000)
        console.log(`Você escuta pedidos de ajuda...`)
        await sleep(3000)
        console.log(`Mas acha muito estranho e espera escondido...`)
        await sleep(5000)
        console.log(`Finalmente! um sobrevivente foi atrás mas...`)
        await sleep(3000)
        console.log(`Era uma armadilha...`)
        await sleep(3000)
        console.log(`O sobrevivente corre e a criatura corre atrás.`)

        await leitor.question(`\nO que fazer?\n\n[atirar] (Requer ${danger('Ak47')})\n[assistir]\n\n`, function(answer) {
            if (answer == "atirar"){
                if(itens.find(element => element == 'Ak47') !== undefined){
                    atirar();
                    async function atirar(){
                        console.clear();
                        karma = karma + 10
                        munição = munição - 3
                        amigos = amigos + 1

                        console.log("Você escolhe ajudar.")
                        await sleep(2000)
                        console.log(`Munição: ${munição}`)
                        await sleep(1000)
                        console.log(`Karma: ${karma}`)
                        await sleep(1000)
                        console.log(`Amigos: ${amigos}`)
                        await sleep(3000)
                        lvl3_cap3();
                    }
                } else if(itens.find(element => element == 'Ak47') == undefined){
                    atirar();
                    async function atirar(){
                        console.clear();
                        console.log("Você não tem uma AK47.")
                        await sleep(2000)
                        lvl2_cap3();
                    }
                }
            } else if (answer == "assistir"){
                assistir();
                async function assistir(){
                    console.clear();
                    console.log("Você assiste ele morrer lentamente.")
                    await sleep(2000)
                    console.log("e...")
                    await sleep(5000)
                    await chalkAnimation.glitch("SE LEVANTAR?");
                    await sleep(3000)
                    await chalkAnimation.glitch("Ele olha pra você...");
                    await sleep(3000)
                    await chalkAnimation.glitch("...");
                    await sleep(3000)
                    run();
                }
            }
            else if (answer !== 0){
                lvl2_cap3();
            }
        });

    } if(language == "en"){
        console.clear()
        await sleep(3000)
        console.log(`Time to leave the camp.`)
        await sleep(3000)
        console.log(`You begin your journey...`)
        await sleep(3000)
        console.log(`...`)
        await sleep(6000)
        console.log(`You hear cries for help...`)
        await sleep(3000)
        console.log(`But you find it very strange and wait in hiding...`)
        await sleep(5000)
        console.log(`Finally! a survivor went to the call for help but...`)
        await sleep(3000)
        console.log(`It was a trap...`)
        await sleep(3000)
        console.log(`The survivor runs and the creature runs after him.`)

        await leitor.question(`\nWhat to do?\n\n[shoot] (Requires ${danger('Ak47')})\n[watch]\n\n`, function(answer) {
            if (answer == "shoot"){
                if(itens.find(element => element == 'Ak47') !== undefined){
                    atirar();
                    async function atirar(){
                        console.clear();
                        karma = karma + 10
                        munição = munição - 3
                        amigos = amigos + 1

                        console.log("You choose to help.")
                        await sleep(2000)
                        console.log(`Ammo: ${munição}`)
                        await sleep(1000)
                        console.log(`Karma: ${karma}`)
                        await sleep(1000)
                        console.log(`Friends: ${amigos}`)
                        await sleep(3000)
                        lvl3_cap3();
                    }
                } else if(itens.find(element => element == 'Ak47') == undefined){
                    atirar();
                    async function atirar(){
                        console.clear();
                        console.log("You don't have an AK47.")
                        await sleep(2000)
                        lvl2_cap3();
                    }
                }
            } else if (answer == "watch"){
                assistir();
                async function assistir(){
                    console.clear();
                    console.log("You watch him die slowly.")
                    await sleep(2000)
                    console.log("and...")
                    await sleep(5000)
                    await chalkAnimation.glitch("GET UP?");
                    await sleep(2000)
                    run();
                }
            }
            else if (answer !== 0){
                lvl2_cap3();
            }
        });

    }
}

async function lvl3_cap3(){
    // RPC
    uptext = "Chapter: The disease"
    downtext = "Level: 3"
    bigimage = "icon"
    smallimage = "disease"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The disease"
    level = "3-3"

    // Game

    if(language == "pt"){
        console.clear()
        await sleep(3000)
        console.log(`Ele te agradece.`)
        await sleep(3000)
        console.log(`E pergunta...`)
        await sleep(3000)
        console.log(`"O que fazemos com o corpo?"`)
        await sleep(1000)

        await leitor.question(`\nO que fazer?\n\n[deixar]\n[queimar]\n\n`, function(answer) {
            if (answer == "deixar"){
                deixar();
                async function deixar(){
                    console.clear()
                    await sleep(3000)
                    console.log(`Vocês ignoram e dão as costas pra ele.`)
                    await sleep(3000)
                    console.log(`Você não achou que o isqueiro era enfeite... né?`)
                    await sleep(2000)
                    console.log(`Ele se levantou.`)
                    await sleep(1000)
                    death();
                }
            } else if (answer == "queimar"){
                queimar();
                async function queimar(){
                    console.clear()
                    await sleep(3000)
                    console.log(`Sobrevivente: "O fogo não vai chamar a atenção de saqueadores?"`)
                    await sleep(3000)
                    console.log(`Você "Relaxa, Eu sou um deles..."`)
                    await sleep(2000)
                    lvl1_cap4();
                }
            }
            else if (answer !== 0){
                lvl3_cap3();
            }
        });

    } if(language == "en"){
        console.clear()
        await sleep(3000)
        console.log(`He thanks you.`)
        await sleep(3000)
        console.log(`And ask...`)
        await sleep(3000)
        console.log(`"What do we do with the body?"`)
        await sleep(1000)

        await leitor.question(`\nWhat to do?\n\n[leave it]\n[burn it]\n\n`, function(answer) {
            if (answer == "leave it"){
                deixar();
                async function deixar(){
                    console.clear()
                    await sleep(3000)
                    console.log(`You ignore it and turn your back on it.`)
                    await sleep(3000)
                    console.log(`You didn't think the lighter was an ornament, did you?`)
                    await sleep(2000)
                    console.log(`the creature got up.`)
                    await sleep(1000)
                    death();
                }
            } else if (answer == "burn it"){
                queimar();
                async function queimar(){
                    console.clear()
                    await sleep(3000)
                    console.log(`Survivor: "Won't the fire draw the attention of looters?"`)
                    await sleep(3000)
                    console.log(`You "Relax, I'm one of them..."`)
                    await sleep(2000)
                    lvl1_cap4();
                }
            }
            else if (answer !== 0){
                lvl3_cap3();
            }
        });
    }
}

async function lvl1_cap4(){
    // RPC
    uptext = "Chapter: The village"
    downtext = "Level: 1"
    bigimage = "icon"
    smallimage = "city"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The village"
    level = "1-4"

    // Game

    itensoff == itens
    await sleep(500)
    itens == []

    if(language == "pt"){
        console.clear()
        console.log(`Depois de aproximadamente 5 horas de caminhada você encontra um vilarejo.`)
        await sleep(3000)
        console.log(`Ao entrar seu corpo é examinado e seus itens são retirados de você.`)
        await sleep(3000)
        console.log(`Todos são muito felizes e você decide passar a noite por ali.`)
        await sleep(5000)
        console.log(`Bem vindo ao capítulo 4.`)
        await sleep(3000)
        lvl2_cap4()
    } if(language == "en"){
        console.clear()
        console.log(`After about 5 hours of walking you find a village.`)
        await sleep(3000)
        console.log(`Upon entering your body is examined and your items are taken from you.`)
        await sleep(3000)
        console.log(`Everyone is very happy and you decide to spend the night there.`)
        await sleep(5000)
        console.log(`Welcome to chapter 4.`)
        await sleep(3000)
        lvl2_cap4()
    }
}

async function lvl2_cap4(){
    // RPC
    uptext = "Chapter: The village"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "city"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The village"
    level = "2-4"

    // Game

    if(language == "pt"){
        console.clear()
        console.log(`O vilarejo é protegido com guardas e um muro alto.`)
        await sleep(3000)
        console.log(`Não é necessário se preocupar com as criaturas.`)
        await sleep(3000)
        console.log(`Mas você deve ficar de guarda durante as noits.`)
        await sleep(3000)
        console.log(`Não é tão ruim não?`)
        await sleep(3000)
        lvl3_cap4()
    } if(language == "en"){
        console.clear()
        console.log(`The village is protected with guards and a high wall.`)
        await sleep(3000)
        console.log(`No need to worry about creatures.`)
        await sleep(3000)
        console.log(`But you must be on guard at night.`)
        await sleep(3000)
        console.log(`It's not that, right?`)
        await sleep(3000)
        lvl3_cap4()
    }
}

async function lvl3_cap4(){
    // RPC
    uptext = "Chapter: The village"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "city"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The village"
    level = "3-4"

    // Game

    if(language == "pt"){
        console.clear()
        await sleep(3000)
        console.log(`Sua primeira noite está sendo tranquila.`)
        await sleep(3000)
        console.log(`De repente luzes aparecem na floresta.`)
        await sleep(3000)
        console.log(`Você alerta os outros guardas...`)
        await sleep(3000)
        console.log(`Mas eles não atiram.`)
        await sleep(5000)
        console.log(`O vilarejo inteiro se apaga.`)
        await sleep(3000)
        console.log(`Eles se escondem e você observa.`)
        await sleep(3000)
        console.log(`Você é puxado para o abrigo, e todos vão dormir sem dizer uma palavra.`)
        await sleep(5000)
        lvl3_1cap4()
    } if(language == "en"){
        console.clear()
        await sleep(3000)
        console.log(`Your first night is quiet.`)
        await sleep(3000)
        console.log(`Suddenly there are lights in the forest.`)
        await sleep(3000)
        console.log(`You alert the other guards...`)
        await sleep(3000)
        console.log(`But they don't shoot.`)
        await sleep(5000)
        console.log(`The whole village goes out.`)
        await sleep(3000)
        console.log(`They hide and you watch.`)
        await sleep(3000)
        console.log(`You are pulled into the shelter, and everyone goes to sleep without saying a word.`)
        await sleep(5000)
        lvl3_1cap4()
    }
}

async function lvl3_1cap4(){
    // RPC
    uptext = "Chapter: The village"
    downtext = "Sleeping..."
    bigimage = "icon"
    smallimage = "bed"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The village"


    // Game
    if(language == "pt"){
    console.clear()
    let str = 'Dormindo.';

    const text = chalkAnimation.glitch(str, 1);

    setInterval(() => {
        text.replace(str += '.');
    }, 1000);
    await sleep(3000)
    text.stop()
    await sleep(1000)
    lvl4_cap4();
    } else if(language == "en"){
        console.clear()
        let str = 'Sleeping.';
    
        const text = chalkAnimation.glitch(str, 1);
    
        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        await sleep(1000)
        lvl4_cap4();
    }
}

async function lvl4_cap4(){
    // RPC
    uptext = "Chapter: The village"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "city"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The village"
    level = "4-4"

    // Game

    if(language == "pt"){
        console.clear()
        await sleep(3000)
        console.log(`Os guardas te explicam que...`)
        await sleep(3000)
        console.log(`As luzes são criaturas...`)
        await sleep(3000)
        console.log(`Woodcrawlers...`)
        await sleep(3000)
        console.log(`Eles transformam pessoas em pessoas falsas.`)
        await sleep(3000)
        console.log(`"A doença das raizes profundas"`)
        await sleep(5000)
        lvl5_cap4()
    } if(language == "en"){
        console.clear()
        await sleep(3000)
        console.log(`The guards explain that...`)
        await sleep(3000)
        console.log(`The lights are creatures...`)
        await sleep(3000)
        console.log(`Woodcrawlers...`)
        await sleep(3000)
        console.log(`They turn people into fake people...`)
        await sleep(3000)
        console.log(`"The Deep Root Disease"`)
        await sleep(5000)
        lvl5_cap4()
    }
}

async function lvl5_cap4(){
    // RPC
    uptext = "Chapter: The village"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "city"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The village"
    level = "5-4"

    // Game

    if(language == "pt"){
        console.clear()
        itens = itensoff
        await sleep(500)
        itensoff = []
        await sleep(1000)
        console.log(`Itens: ${itens}`)
        await sleep(3000)
        console.log(`Está na hora de ir...`)
        await sleep(3000)
        console.log(`Você fica sabendo sobre um tal laboratorio`)
        await sleep(3000)
        console.log(`E acha uma boa ir até la...`)
        await sleep(5000)

        await leitor.question(`\nO que fazer?\n\n[correr] (Requer ${danger('5 Comidas')})\n[andar]\n\n`, function(answer) {
            if (answer == "correr"){
                if(food >= 5){
                    correr();
                    async function correr(){
                        smallimage = "run"
                        console.clear()
                        let str = 'Correndo.';

                        const text = chalkAnimation.glitch(str, 1);

                        setInterval(() => {
                            text.replace(str += '.');
                        }, 1000);
                        await sleep(3000)
                        text.stop()
                        afterrun();
                    }
                } else{
                    comida();
                    async function comida(){
                        console.clear();
                        console.log("Você não tem 5 Comidas.")
                        await sleep(2000)
                        lvl5_cap4();
                    }
                }
            } else if (answer == "andar"){
                andar();
                    async function andar(){
                        smallimage = "walk"
                        console.clear()
                        let str = 'Andando.';

                        const text = chalkAnimation.glitch(str, 1);

                        setInterval(() => {
                            text.replace(str += '.');
                        }, 1000);
                        await sleep(2000)
                        text.stop()
                        continua();
                    }
            }
            else if (answer !== 0){
                lvl5_cap4();
            }
        });
    } if(language == "en"){
        console.clear()
        itens = itensoff
        await sleep(500)
        itensoff = []
        await sleep(1000)
        console.log(`Items: ${itens}`)
        await sleep(3000)
        console.log(`Está na hora de ir...`)
        await sleep(3000)
        console.log(`Você fica sabendo sobre um tal laboratorio`)
        await sleep(3000)
        console.log(`E acha uma boa ir até la...`)
        await sleep(5000)

        await leitor.question(`\nO que fazer?\n\n[run] (Requires ${danger('5 Foods')})\n[walk]\n\n`, function(answer) {
            if (answer == "run"){
                if(food >= 5){
                    correr();
                    async function correr(){
                        smallimage = "run"
                        console.clear()
                        let str = 'Running.';

                        const text = chalkAnimation.glitch(str, 1);

                        setInterval(() => {
                            text.replace(str += '.');
                        }, 1000);
                        await sleep(3000)
                        text.stop()
                        afterrun();
                    }
                } else{
                    comida();
                    async function comida(){
                        console.clear();
                        console.log("You don't have 5 Foods.")
                        await sleep(2000)
                        lvl5_cap4();
                    }
                }
            } else if (answer == "walk"){
                andar();
                    async function andar(){
                        smallimage = "walk"
                        console.clear()
                        let str = 'Walking.';

                        const text = chalkAnimation.glitch(str, 1);

                        setInterval(() => {
                            text.replace(str += '.');
                        }, 1000);
                        await sleep(2000)
                        text.stop()
                        continua();
                    }
            }
            else if (answer !== 0){
                lvl5_cap4();
            }
        });

    }
}

//ações

async function run(){
    // RPC
    uptext = "Chapter: The disease"
    downtext = "Level: 2"
    bigimage = "icon"
    smallimage = "run"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The disease"
    level = "2-3"

    chancededarcerto = chance.bool({ likelihood: 30 })

    if(chancededarcerto == true){
        if(language == "pt"){
            console.clear()
            await sleep(2000);
            console.log("Você sobreviveu.")
            await sleep(2000);
            lvl1_cap4();
        } else if(language == "en"){
            console.clear()
            await sleep(2000);
            console.log("You survived.")
            await sleep(2000);
            lvl1_cap4();
        }
    }  else {
        death();
    }
}
async function infected(){
    // RPC
    uptext = "Chapter: ??????"
    downtext = "Level: ??????"
    bigimage = "icon"
    smallimage = "infected"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "??????"

    console.clear()
    await sleep(2000)
    console.log(`
                 #G5YJJY5PPPB                     
               &G5J!${danger('~~~~')}!?YY5B                    
               #55?${danger('~~~~~~')}7J55P                    
               #555?${danger('7!!7')}?Y555P&                   
               BPPPP55555555PPB                   
               BPPPPPG#GPPPPPPG&                  
               GPPGGPB  BPPPPPPP#                 
              #PG#GGGB   #PPPPPPPB                
             BPB &GGGB    &PPPPPP5B               
            BG&  BBBG#     BP#BGP5P#              
           #B   GB &P&     #G   #P55#             
          &G&  #G& &G&     &P#    G55B            
          BB  &BB  &G&      GG     B5YB           
         BG   #G&  &G&      &PB     #55#          
        &G&   &&   ##        #P&     &PP#         
        BG        &B         &P&      BPGB        
        P#       &G&          G&      #P&&#       
       &P#       #G&         &G&      &P& #&      
       BB        &G#         #G        G# &G      
      &G          BB         BB        GB &G#     
     &B&          #G&        BB        BG  &G&    
     B#            B&        #G        &P&  #B    
    &B             #&        #G&        B#   #&   
    ##                       BB         &B        
                             &&          &        `)
    await sleep(100)
    console.clear()
    await sleep(100)
    console.log(`
                 #G5YJJY5PPPB                     
               &G5J!${danger('~~~~')}!?YY5B                    
               #55?${danger('~~~~~~')}7J55P                    
               #555?${danger('7!!7')}?Y555P&                   
               BPPPP55555555PPB                   
               BPPPPPG#GPPPPPPG&                  
               GPPGGPB  BPPPPPPP#                 
              #PG#GGGB   #PPPPPPPB                
             BPB &GGGB    &PPPPPP5B               
            BG&  BBBG#     BP#BGP5P#              
           #B   GB &P&     #G   #P55#             
          &G&  #G& &G&     &P#    G55B            
          BB  &BB  &G&      GG     B5YB           
         BG   #G&  &G&      &PB     #55#          
        &G&   &&   ##        #P&     &PP#         
        BG        &B         &P&      BPGB        
        P#       &G&          G&      #P&&#       
       &P#       #G&         &G&      &P& #&      
       BB        &G#         #G        G# &G      
      &G          BB         BB        GB &G#     
     &B&          #G&        BB        BG  &G&    
     B#            B&        #G        &P&  #B    
    &B             #&        #G&        B#   #&   
    ##                       BB         &B        
                             &&          &        `)
    await sleep(200)
    console.clear()
    lvl1_cap3();
}
async function sleeping(){
    // RPC
    uptext = "Chapter: Prologue"
    downtext = "Sleeping..."
    bigimage = "icon"
    smallimage = "bed"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Prologue"


    // Game
    if(language == "pt"){
    console.clear()
    let str = 'Dormindo.';

    const text = chalkAnimation.glitch(str, 1);

    setInterval(() => {
        text.replace(str += '.');
    }, 1000);
    await sleep(3000)
    text.stop()
    await sleep(1000)
    lvl3cap1();
    } else if(language == "en"){
        console.clear()
        let str = 'Sleeping.';
    
        const text = chalkAnimation.glitch(str, 1);
    
        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        await sleep(1000)
        lvl3cap1();
    }
}
async function lootinggas(){
    // RPC
    uptext = "Chapter: The forest"
    downtext = "Looting..."
    bigimage = "icon"
    smallimage = "loot"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "The forest"

    // Game
    if(language == "pt"){
    console.clear()
    let str = 'Saqueando.';

    const text = chalkAnimation.glitch(str, 1);

    setInterval(() => {
        text.replace(str += '.');
    }, 1000);
    await sleep(3000)
    text.stop()
    console.clear()
    food = food + 1
    await sleep(1000)
    console.log(`+1 Comida`)
    await sleep(1000)
    console.clear()
    console.log(`Comida: ${food}`)
    await sleep(3000)
    lvl1_1cap2();
    } else if(language == "en"){
        console.clear()
        let str = 'Looting.';
    
        const text = chalkAnimation.glitch(str, 1);
    
        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        console.clear()
        food = food + 1
        await sleep(1000)
        console.log(`+1 Food`)
        await sleep(1000)
        console.clear()
        console.log(`Food: ${food}`)
        await sleep(3000)
        lvl1_1cap2();
    }
}
async function death(){

    food = 
    junk = 0
    karma = 100
    itens = [];
    saqueador = false

    // RPC
    uptext = "Dead."
    downtext = `On level: ${level}`
    bigimage = "icon"
    smallimage = "death"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "What a shame."


    // Game
    if(language == "pt"){
        console.clear()
        let str = 'Morto.';

        const text = chalkAnimation.glitch(str, 1);

        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        await sleep(1000)
        intro();
    } else if(language == "en"){
        console.clear()
        let str = 'Dead.';
    
        const text = chalkAnimation.glitch(str, 1);
    
        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        await sleep(1000)
        intro();
    }
}
async function continua(){
    // RPC
    uptext = "Thanks for playing."
    downtext = "To be continued..."
    bigimage = "icon"
    smallimage = "thanks"
    bigimagetext = "Lucid Dreams"
    smallimagetext = "Beta ended"


    // Game
    if(language == "pt"){
        console.clear()
        let str = 'Continua.';

        const text = chalkAnimation.glitch(str, 1);

        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        console.clear();
        console.log(("Obrigado por jogar! <3\nProjeto descontinuado."))
        await sleep(2000)
        intro();
    } else if(language == "en"){
        console.clear()
        let str = 'To be continued.';
    
        const text = chalkAnimation.glitch(str, 1);
    
        setInterval(() => {
            text.replace(str += '.');
        }, 1000);
        await sleep(3000)
        text.stop()
        console.clear()
        console.log("Thanks for playing! <3\nAbandoned project.")
        await sleep(2000)
        intro();
    }
}

// anticrash

process.on('uncaughtException', function (err) { 

});                                

RPC.login({clientId});
