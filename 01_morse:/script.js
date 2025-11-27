// Dans cet exercice, tu vas créer un encodeur et décodeur de morse. Le morse est un alphabet codé qui remplace les caractères par des impulsions représentées par des points (.) et des tirets (-).

// 💡 Idéal pour pratiquer les chaînes, tableaux, objets, fonctions en JavaScript… et un peu de DOM via une petite interface HTML.

// Contraintes :
// Langages : JavaScript (obligatoire) et HTML (autorisé et requis à l’étape 5).


// Étape 0 – Organization 🗂️
// Crée un nouveau dépôt GitHub nommé J14.
// Clone ce dépôt sur ton ordinateur avec la commande :
// git clone [URL_DU_DEPOT]
// Dans ce dossier J14/, crée un dossier 01_morse/.
// Dans ce dossier 01_morse/, crée un fichier script.js et un fichier index.html.




// Étape 1 – Découper le texte

// Écris une fonction getLatinCharacterList(text) qui prend une chaîne de texte et retourne un tableau contenant chaque caractère.
// Teste la fonction avec "Hello, world" et vérifie que le résultat correspond à :
// ["H","e","l","l","o",","," ","w","o","r","l","d"]

function getLatinCharacterList(text){

    let split = text.split("")
    // console.log(split)
    // console.log("")
    return split
}

getLatinCharacterList("Hello, world")


// Étape 2 – Traduire un caractère 🔡 → 🔊

// Ajoute le dictionnaire suivant dans script.js :
// const latinToMorse = {
// 	'A':'.-',
// 	'B':'-...',
// 	'C':'-.-.',
// 	'D':'-..',
// 	'E':'.',
// 	'F':'..-.',
// 	'G':'--.',
// 	'H':'....',
// 	'I':'..',
// 	'J':'.---',
// 	'K':'-.-',
// 	'L':'.-..',
// 	'M':'--',
// 	'N':'-.',
// 	'O':'---',
// 	'P':'.--.',
// 	'Q':'--.-',
// 	'R':'.-.',
// 	'S':'...',
// 	'T':'-',
// 	'U':'..-',
// 	'V':'...-',
// 	'W':'.--',
// 	'X':'-..-',
// 	'Y':'-.--',
// 	'Z':'--..'
// }

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}


// Crée translateLatinCharacter(char) qui retourne la traduction morse du caractère (en majuscule).
// translateLatinCharacter("A"); 
// .-

function translateLatinCharacter(char){
    for (let cle in latinToMorse){
        if(cle === char){
            // console.log(latinToMorse[cle])
            return latinToMorse[cle]
        }
    }
    // console.log("")
}

translateLatinCharacter("A")

// Étape 3 – Encoder un texte

// Écris encode(text) qui :
// convertit le texte en tableau de caractères (getLatinCharacterList),
// traduit chaque lettre (translateLatinCharacter),
// retourne la chaîne morse avec des espaces entre lettres et garde les espaces du texte pour séparer les mots par /.

function encode(text){
    let convertisseur = getLatinCharacterList(text)
    let codeTraduction = "" //F2 pour changer le nom de cette variable partout

    for (i = 0 ; i < convertisseur.length ; i++){
        let traduction = translateLatinCharacter(convertisseur[i].toUpperCase()) // je met toutes les lettres en majuscule et je les traduit
        if (convertisseur[i] === " "){ // si il y a un espace je met un "/"
            codeTraduction += "/ "
        } else if(traduction === undefined){ // si c'est un symbole ou autre je ne met rien
            codeTraduction += "/ "
        }
        else {
            codeTraduction += `${traduction} ` // j'ajoute le code à la traduction
        }
    }

    console.log(codeTraduction)
    console.log('')
    return codeTraduction

}

encode("Hello, world")


// encode("SOS"); 
// ... --- ...


// Étape 4 – Décoder un texte morse 🔊 → 🔡

// Ajoute le dictionnaire suivant dans script.js :
// const morseToLatin = {
//   '-': "T",
//   '--': "M",
//   '---': "O",
//   '--.': "G",
//   '--.-': "Q",
//   '--..': "Z",
//   '-.': "N",
//   '-.-': "K",
//   '-.--': "Y",
//   '-.-.': "C",
//   '-..': "D",
//   '-..-': "X",
//   '-...': "B",
//   '.': "E",
//   '.-': "A",
//   '.--': "W",
//   '.---': "J",
//   '.--.': "P",
//   '.-.': "R",
//   '.-..': "L",
//   '..': "I",
//   '..-': "U",
//   '..-.': "F",
//   '...': "S",
//   '...-': "V",
//   '....': "H"
// }

const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

// Crée getMorseCharacterList(morse) qui découpe la chaîne morse :
// lettres séparées par un espace,
// mots séparés par /.


function getMorseCharacterList(morse){
    let words = morse.split("/")
    let result = []
    //console.log(words)

    for( i = 0 ; i < words.length ; i ++){
        let word = words[i].trim()

        let letters = word.split(" ")

        let lettersSansEspaces = []

        for (j = 0 ; j < letters.length ; j++){
            if (letters[j].trim() !== ""){
                lettersSansEspaces.push(letters[j])
            }
        }
        result.push(lettersSansEspaces)
    }
    console.log(result)
    console.log("")
    return result
}

getMorseCharacterList("... --- ...")

// Crée translateMorseCharacter(code) qui traduit un symbole morse en lettre.

function translateMorseCharacter(code){

    // CETTE PARTIE C'EST EN REPRENANT LE RESULTAT DE LE FONCTION PRÉCÉDENTE

    // let traduction = ""

    // for (let i = 0 ; i < code.length ; i++){
    //     for (let j = 0 ; j < code[i].length ; j++){
    //         for ( let cle in morseToLatin){
    //             if (cle === code[i][j]){
    //                 //console.log(code[i][j])
    //                 traduction += morseToLatin[cle]
    //             }
    //         }
    //     }
    // }
    // console.log(traduction)

    // CETTE PARTIE C'EST POUR UN SEUL SYMBOLE EN MORSE

    let lettre = ""
    for (let cle in morseToLatin){
        if (cle === code){
            lettre += morseToLatin[cle]
        }
    }
    //console.log (lettre)
    return lettre
}

// VERSION PHRASE ENTIÈRE
//translateMorseCharacter([ [ '...', '---', '...' ] ])

//VERSION 1 SEUL SYMBOLE
translateMorseCharacter('...')

// Crée decode(morseText) qui reconstruit la phrase en lettres latines.

function decode(morseText){
    // Je reprend ma logique que j'ai trouvé dans la fonction précédente pour la phrase entière

    let list = getMorseCharacterList(morseText)
    let traduction = ""

    for (let i = 0 ; i < list.length ; i++){
         for (let j = 0 ; j < list[i].length ; j++){
            let lettre = translateMorseCharacter(list[i][j])
            if(j > 0 && i === 0){                   //Mettre toutes les lettres du premier mot (sauf la premiere lettre) je les mets en minuscule
                traduction += lettre.toLowerCase()
            }else if ( i > 0){                      // Je met tous les autres mots en minuscule
                traduction += lettre.toLowerCase()
            }
            else{                                   // Je met la première lettre en majuscule
                traduction += lettre
            }
        }
        traduction += " "
    }
    console.log(traduction)
    return traduction


}

decode("... --- ...")

// decode("... --- ...");
// SOS






// Étape 5 – Interface HTML (requis) 💻

// Dans index.html, crée une petite interface avec :
// un champ texte pour le texte latin et un bouton Encoder → affiche le morse dans une zone de sortie,
// un champ texte pour le morse et un bouton Décoder → affiche le texte latin dans une zone de sortie,
// un rappel des règles : lettres séparées par un espace, mots séparés par “/”.
// Relie script.js à index.html et utilise des écouteurs d’événements pour appeler encode et decode.

const latin = document.getElementById("textLatin")
const boutonEncoder = document.getElementById("boutonEncoder")
const sortieEncoder = document.getElementById("sortieEncoder")



const morse = document.getElementById("morse")
const boutonDecoder = document.getElementById("boutonDecoder")
const sortieDecode = document.getElementById("sortieDecode")

//console.log("Hello")

boutonEncoder.addEventListener("click", () => {
    //console.log("Hello")
    sortieEncoder.textContent = encode(latin.value)
    //latin.value = ""   
})

boutonDecoder.addEventListener("click", () => {
    sortieDecode.textContent = decode(morse.value)
})


// 🧩 Étape finale – Versionner ton travail
// Une fois ton code testé et fonctionnel :

// Ouvre ton terminal dans le dossier du projet.
// Ajoute les modifications :
// git add .
// Crée un commit :
// git commit -m "Exercice 01 – Parlez-vous le morse terminé"
// Envoie ton travail sur GitHub :
// git push origin main
// ✅ Objectif : ton dépôt GitHub doit contenir le dossier J14/01_morse/ avec index.html et script.js bien versionnés.