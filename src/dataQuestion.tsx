import { v4 as uuidv4 } from 'uuid';

export const questionData = [{
  id: 1,
  question: "Où se trouvent les glandes sudoripares d'un chien",
  image:"",
  reponse: "Sous ses pattes",
  response2: "Dans son nez",
  response3: "Dans son oeil",
  theme:"aleatoire"
},
{
  id: 2,
  question: "Qui raconte les aventures de Sherlock Holmes ?",
  image:"",
  reponse:"Watson",
  response2: "Clint",
  response3: "Bob",
  theme:"aleatoire"

},{
  id: 3,
  question: "Qui fut le quarantième président des USA ?",
  image:"",
  reponse:"Reagan",
  response2: "Macron",
  response3: "Poutine",
  theme:"aleatoire"
},{
  id: 4,
  question: "Que signifie 'Bistro' en russe ?",
  image:"",
  reponse:"Vite",
  response2: "Apero",
  response3: "Maison",
  theme:"aleatoire"
},{
  id: 5,
  question: "Combien y a-t-il de miles marins dans un degré de latitude ?",
  image:"",
  reponse:"60",
  response2: "239",
  response3: "3",
  theme:"aleatoire"
},{
  id: 6,
  question: "Qui a fondé l'Académie Française ?",
  image:"",
  reponse: "Le cardinal de Richelieu",
  response2: "John Lennon",
  response3: "Johnny Hallyday",
  theme:"aleatoire"
},{
  id: 7,
  question: "Quel est le plus long fleuve d'Europe occidentale ?",
  image:"",
  reponse:"Le Rhin",
  response2: "La Seine",
  response3: "La Loire",
  theme:"aleatoire"
},{
  id: 8,
  question: "Qui est inséparable de Bonnie Parker ?",
  image:"",
  reponse:"Clyde Barrow",
  response2: "Mickey Mouse",
  response3: "Pinocchio",
  theme:"aleatoire"
},{
  id: 9,
  question: "Comment appelle-t-on le versant Nord d'une vallee ?",
  image:"",
  reponse:"L'ubac",
  response2: "Le Nord",
  response3: "L'Ecluse",
  theme:"aleatoire"
},{
  id: 10,
  question: "Qui est le dieu du Soleil dans l'ancienne Egypte ?",
  image:"",
  reponse:"Râ",
  response2: "Tâ",
  response3: "Kâ",
  theme:"aleatoire"
},{
  id: 11,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/1_Y767C.jpg",
  question:"À quand remonte le Big Bang (d'après le modèle cosmologique en vigueur) ?",
  reponse:"13,8 milliards d'années.",
  response2: "138 millions d'années.",
  response3: "138 milliards d'années.",
  theme:"univers"
  }
,{
  id: 12,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/2_a33v4.jpg",
  question:"En anglais, 'Voie lactée' se traduit par 'Milky Way'.",
  reponse:"Vrai.",
  response2: "Faux.",
  response3: "Je ne sais pas",
  theme:"univers"
  }
,{
  id: 13,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/3_3fQ6H.jpg",
  question:"D'après les dernières conclusions scientifiques, que trouve-t-on au centre de notre galaxie ?",
  reponse:"Un trou noir.",
  response2: "Un quasar.",
  response3: "Un trou de ver.",
  theme:"univers"
  }
,{
  id: 14,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/4_7736F.jpg",
  question:"Quel est le diamètre estimé de la Voie lactée ?",
  reponse:"Entre 100 000 et 120 000 années-lumière.",
  response2: "Entre 10 000 et 12 000 années-lumière.",
  response3: "Entre 1000 et 1200 années-lumière.",
  theme:"univers"
  }
,{
  id: 15,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/5_K3767.jpg",
  question:"Quelle est la galaxie la plus proche de la nôtre ?",
  reponse:"Andromède.",
  response2: "Cassiopée.",
  response3: "Centaure.",
  theme:"univers"
  }
,{
  id: 16,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/6_S8mU7.jpg",
  question:"Quels objets célestes sont parfois dénommés 'pouponnières d'étoiles' ?",
  reponse:"Les nébuleuses.",
  response2: "Les supernovas.",
  response3: "Les constellations.",
  theme:"univers"
  }
,{
  id: 17,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/7_5B762.jpg",
  question:"Quel nom a-t-on donné à ces colonnes de poussières interstellaires ?",
  reponse:"Les Piliers de la création.",
  response2: "L'Origine du monde.",
  response3: "La Main de Dieu.",
  theme:"univers"
  }
,{
  id: 18,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/8_89w2w.jpg",
  question:"On arrive dans notre quartier !Quel est l'âge estimé du Système solaire ?",
  reponse:"4,6 milliards d'années.",
  response2: "3,6 milliards d'années.",
  response3: "5,6 milliards d'années.",
  theme:"univers"
  }
,{
  id: 19,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/9_UkM9q.jpg",
  question:"L'astronome français Urbain Le Verrier a prédit mathématiquement l'existence et la position de Neptune en 1846. Combien d'orbites complètes (autour du Soleil) la huitième et dernière planète a-t-elle effectuées depuis sa découverte ?",
  reponse:"Une seule orbite.",
  response2: "Trois orbites.",
  response3: "Cinq orbites.",
  theme:"univers"
},{
  id: 20,
  image:"https://www.quizz.biz/uploads/quizz/1033504/mobile/10_75mKZ.jpg",
  question:"La masse du Soleil représente 99,86 % de la masse totale du Système solaire ! En volume, combien de fois pourrait-il contenir la Terre ?",
  reponse:"Environ 1 300 000 fois !",
  response2: "Environ 13 000 fois !",
  response3: "Environ 1300 fois !",
  theme:"univers"
},{
  id: 21,
  image:"http://www.jesuiscultive.com/IMG/jpg/Bouleau.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Bouleau",
  response2: "If",
  response3: "Pin",
  theme:"arbres"
},{
  id: 22,
  image:"http://www.jesuiscultive.com/IMG/jpg/Cerisier.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Cerisier",
  response2: "Pommier",
  response3: "Karité",
  theme:"arbres"
},{
  id: 23,
  image:"http://www.jesuiscultive.com/IMG/jpg/Hetre.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Hêtre",
  response2: "Frêne",
  response3: "Aulne",
  theme:"arbres"
},{
  id: 24,
  image:"http://www.jesuiscultive.com/IMG/jpg/Acacia.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Acacia",
  response2: "Margousier",
  response3: "Sycomore",
  theme:"arbres"
},{
  id: 25,
  image:"http://www.jesuiscultive.com/IMG/jpg/Peuplier.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Peuplier",
  response2: "Noyer",
  response3: "Cormier",
  theme:"arbres"
},{
  id: 26,
  image:"http://www.jesuiscultive.com/IMG/jpg/Saule.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Saule",
  response2: "Tamarin",
  response3: "Noisetier",
  theme:"arbres"
},{
  id: 27,
  image:"http://www.jesuiscultive.com/IMG/jpg/Cypres.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Cyprès",
  response2: "Noyer",
  response3: "Fromager",
  theme:"arbres"
},{
  id: 28,
  image:"http://www.jesuiscultive.com/IMG/jpg/Eucalyptus.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Eucalyptus",
  response2: "Acacia",
  response3: "Tilleul",
  theme:"arbres"
},{
  id: 29,
  image:"http://www.jesuiscultive.com/IMG/jpg/Cedre.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Cèdre",
  response2: "Peuplier",
  response3: "Chêne",
  theme:"arbres"
},{
  id: 30,
  image:"http://www.jesuiscultive.com/IMG/jpg/Epicea.jpg",
  question:"Quel est cet arbre ?",
  reponse:"Épicéa",
  response2: "Sapin",
  response3: "Mélèze",
  theme:"arbres"
},{
  id: 31,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/1_5LC2N.jpg",
  question:"Dans le film 'Psychose' d'Alfred Hitchcock, quel est le nom du psychopathe joué par Anthony Perkins ?",
  reponse:"Norman Bates",
  response2: "Norman Arbogast",
  response3: "Norman Greg",
  theme:"film"
},{
  id: 32,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/2_46TC5.jpg",
  question:"Dans la franchise 'Harry Potter', quel est le nom du principal méchant ?",
  reponse:"Voldemort",
  response2: "Valdemar",
  response3: "Valdumor",
  theme:"film"
},{
  id: 33,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/3_7U78Z.jpg",
  question:"Quel est le psychopathe connu et reconnu pour son côté cannibale dans le film 'Le Silence des agneaux' ?",
  reponse:"Hannibal Lecter",
  response2: "Richard Lester",
  response3: "Bob Lester",
  theme:"film"
},{
  id: 34,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/6_4PA5B.jpg",
  question:"Quel est le méchant de la saga 'Star Wars' ?",
  reponse:"Dark Vador",
  response2: "Dork Vodar",
  response3: "Derk Vodar",
  theme:"film"
},{
  id: 35,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/7_7JBGz.jpg",
  question:"On le désigne souvent comme l'ennemi intime de Batman dans la série éponyme. De qui s'agit-il ?",
  reponse:"Le Joker",
  response2: "Le Jockey",
  response3: "Le Jocker",
  theme:"film"
},{
  id: 36,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/8_76C7q.jpg",
  question:"Comment s'appelle le personnage psychopathe joué par Christian Bale dans le film 'American Psycho' ?",
  reponse:"Patrick Bateman",
  response2: "Travis Bickle",
  response3: "Johnny Hallyday",
  theme:"film"
},{
  id: 37,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/9_8H47s.jpg",
  question:"Quel est le nom de famille de Freddy dans le long-métrage 'Freddy - Les griffes de la nuit' ?",
  reponse:"Krueger",
  response2: "Krieger",
  response3: "Kroger",
  theme:"film"
},{
  id: 38,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/10_77ud7.jpg",
  question:"Quel est le nom du tueur psychopathe masqué dans la franchise 'Halloween' ?",
  reponse:"Michael Myers",
  response2: "Michael Moore",
  response3: "Michael Pit",
  theme:"film"
},{
  id: 39,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/13_xCf9K.jpg",
  question:"Comment s'appelle le personnage joué par Al Pacino dans le film 'Le Parrain' ?",
  reponse:"Michael Corleone",
  response2: "Sonny Corleone",
  response3: "George Corle",
  theme:"film"
},{
  id: 40,
  image:"https://www.quizz.biz/uploads/quizz/1359543/mobile/12_RUr7Q.jpg",
  question:"Dans le film de Stanley Kubrick 'Docteur Folamour', quel est le nom du général frappé de folie paranoïaque ?",
  reponse:"Jack D. Ripper",
  response2: "Walter E. Kurtz",
  response3: "David D. Junior",
  theme:"film"
}]
