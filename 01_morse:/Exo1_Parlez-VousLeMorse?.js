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


// Crée translateLatinCharacter(char) qui retourne la traduction morse du caractère (en majuscule).
// translateLatinCharacter("A"); 
// .-


// Étape 3 – Encoder un texte

// Écris encode(text) qui :
// convertit le texte en tableau de caractères (getLatinCharacterList),
// traduit chaque lettre (translateLatinCharacter),
// retourne la chaîne morse avec des espaces entre lettres et garde les espaces du texte pour séparer les mots par /.
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

// Crée getMorseCharacterList(morse) qui découpe la chaîne morse :
// lettres séparées par un espace,
// mots séparés par /.

// Crée translateMorseCharacter(code) qui traduit un symbole morse en lettre.

// Crée decode(morseText) qui reconstruit la phrase en lettres latines.
// decode("... --- ...");
// SOS






// Étape 5 – Interface HTML (requis) 💻
// Dans index.html, crée une petite interface avec :
// un champ texte pour le texte latin et un bouton Encoder → affiche le morse dans une zone de sortie,
// un champ texte pour le morse et un bouton Décoder → affiche le texte latin dans une zone de sortie,
// un rappel des règles : lettres séparées par un espace, mots séparés par “/”.
// Relie script.js à index.html et utilise des écouteurs d’événements pour appeler encode et decode.




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