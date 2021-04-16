import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch,} from "react-router-dom";
import Filter from './Filter.js';
import AnimeList from './AnimeList.js';
import Description from "./Description";
import Cover from "./source/cover.jpg"
import anime1 from "./source/anime1.jpg";
import anime2 from "./source/anime2.png";
import anime3 from "./source/anime3.jpg";
import anime4 from "./source/anime4.jpg";
import anime5 from "./source/anime5.jpg";
import anime6 from "./source/anime6.jpg";
import anime7 from "./source/anime7.jpg";
import anime8 from "./source/anime8.png";
import anime9 from "./source/anime9.jpg";
import anime10 from "./source/anime10.jpg";
import anime11 from "./source/anime11.jpg";
import anime12 from "./source/anime12.jpg";
import anime13 from "./source/anime13.jpg";
import anime14 from "./source/anime14.jpg";
import anime15 from "./source/anime15.jpg";
import anime16 from "./source/anime16.jpg";
import anime17 from "./source/anime17.jpg";
import anime18 from "./source/anime18.jpg";
import anime19 from "./source/anime19.jpg";
import anime20 from "./source/anime20.jpg";
import anime21 from "./source/anime21.jpg";
import anime22 from "./source/anime22.jpg";
import anime23 from "./source/anime23.jpg";
import anime24 from "./source/anime24.jpg";
import anime25 from "./source/anime25.jpg";
import anime26 from "./source/anime26.jpg";
import anime27 from "./source/anime27.jpg";
import anime28 from "./source/anime28.jpg";
import anime29 from "./source/anime29.jpg";
import anime30 from "./source/anime30.jpg";
import anime31 from "./source/anime31.jpg";
import anime32 from "./source/anime32.png";
import anime33 from "./source/anime33.jpg";
import anime34 from "./source/anime34.jpg";
import anime35 from "./source/anime35.jpg";
import anime36 from "./source/anime36.jpg";
import anime37 from "./source/anime37.jpg";
import anime38 from "./source/anime38.jpg";
import anime39 from "./source/anime39.jpg";
import anime40 from "./source/anime40.jpg";
function App() {

  const objAnimes = [
    {
      id:1,
      img: anime1,
      title: "Naruto shippuden",
      describe: "Type:TV/Episodes:500/Status: Finished Airing /Aired:Feb 15, 2007 to Mar 23, 2017/ Premiered:Winter 2007.It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
     link:<iframe width="559" height="409" src="https://www.youtube.com/embed/thh7bVCgDHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
    },
    {
      id:2,
      img: anime2,
      title: "One piece",
      describe: "Type:TV/Episodes:Unknown/Status:Currently Airing/ Aired:Oct 20, 1999 to ?/ Premiered:Fall 1999/Broadcast:Sundays at 09:30 (JST)/Producers- Fuji TV, TAP, Shueisha. Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates.",
      link:<iframe width="585" height="409" src="https://www.youtube.com/embed/grvGc3VvvUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
    },
    {
       id:3,
      img: anime3,
      title: "Bleach",
      describe: "Type:TV/Episodes: 366 / Status:Finished Airing/Aired:Oct 5, 2004 to Mar 27, 2012 /Premiered:Fall 2004 /Broadcast: Tuesdays at 18:00 (JST). Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.",
     link:<iframe width="545" height="409" src="https://www.youtube.com/embed/oZ67d9XSjFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4

    },
   
    {
      id:4,
      img: anime4,
      title: "Death note",
      describe: "Type:Manga/Volumes:12/ Chapters: 108/Status: Finished/Published: Dec 1, 2003 to May 15, 2006 / Genres: Mystery, Drama, Shounen, Supernatural, PsychologicalRyuk, a god of death, drops his Death Note into the human world for personal pleasure. In Japan, prodigious high school student Light Yagami stumbles upon it. Inside the notebook, he finds a chilling message: those whose names are written in it shall die. Its nonsensical nature amuses Light; but when he tests its power by writing the name of a criminal in it, they suddenly meet their demise. ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/NlJZ-YgAt-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 5
  
    },
    {
      id:5,
      img: anime5,
      title: "Detective conan",
      describe: "Type: TV / Episodes: Unknown /Status: Currently Airing/Aired: Jan 8, 1996 to ?/Premiered: Winter 1996 .Shinichi Kudou, a high school student of astounding talent in detective work, is well known for having solved several challenging cases. One day, when Shinichi spots two suspicious men and decides to follow them, he inadvertently becomes witness to a disturbing illegal activity. Unfortunately, he is caught in the act, so the men dose him with an experimental drug formulated by their criminal organization, leaving him to his death.",
     link:<iframe width="490" height="360" src="https://www.youtube.com/embed/1Mz9orl7bDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:6,
      img: anime6,
      title: "Dragon ball",
      describe: "Type: TV /Episodes: 153/Status: Finished Airing/Aired: Feb 26, 1986 to Apr 12, 1989/ Premiered: Winter 1986 / Broadcast: Wednesdays at 19:00 (JST)Gokuu Son is a young boy who lives in the woods all alone—that is, until a girl named Bulma runs into him in her search for a set of magical objects called the Dragon Balls. Since the artifacts are said to grant one wish to whoever collects all seven, Bulma hopes to gather them and wish for a perfect boyfriend.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/TYdcrhyC-8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
      {
      id:7,
      img: anime7,
      title: "Sailor moon",
      describe: "Type: TV/Episodes: 46 / Status: Finished Airing/ Aired: Mar 7, 1992 to Feb 27, 1993 / Premiered: Spring 1992 Usagi Tsukino is an average student and crybaby klutz who constantly scores low on her tests. Unexpectedly, her humdrum life is turned upside down when she saves a cat with a crescent moon on its head from danger. The cat, named Luna, later reveals that their meeting was not an accident: Usagi is destined to become Sailor Moon, a planetary guardian with the power to protect the Earth. Given a special brooch that allows her to transform.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/7lUnzJ30jDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 2
  
    },
    {
      id:8,
      img: anime8,
      title: "Berserk",
      describe: "Type: TV /Episodes: 12 / Status: Finished Airing /Aired: Jul 1, 2016 to Sep 16, 2016 /Premiered: Summer 2016/ Broadcast: Fridays at 22:30 (JST) Now branded for death and destined to be hunted by demons until the day he dies, Guts embarks on a journey to defy such a gruesome fate, as waves of beasts relentlessly pursue him. Steeling his resolve, he takes up the monstrous blade Dragonslayer and vows to exact vengeance on the one responsible, hunting down the very man he once looked up to and considered a friend.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/QcT9N-0xDEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 5
  
    },
    {
      id:9,
      img: anime9,
      title: "Jo jo bizarre",
      describe: "Type: TV /Episodes: 26/Status: Finished Airing/Aired: Oct 6, 2012 to Apr 6, 2013 / Premiered: Fall 2012 /Broadcast: Saturdays at 00:30 (JST).In 1868, Dario Brando saves the life of an English nobleman, George Joestar. By taking in Dario's son Dio when the boy becomes fatherless, George hopes to repay the debt he owes to his savior. However Dio, unsatisfied with his station in life, aspires to seize the Joestar house for his own. Wielding an Aztec stone mask with supernatural properties, he sets out to destroy George and his son, Jonathan JoJo Joestar...",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/EO08vMz73YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:10,
      img: anime10,
      title: "Nana",
      describe: " Type: TV/ Episodes: 47/Status: Finished Airing /Aired: Apr 5, 2006 to Mar 28, 2007 / Premiered: Spring 2006 / Broadcast: Unknown Nana Komatsu is a helpless, naïve 20-year-old who easily falls in love and becomes dependent and clingy to those around her. Even though she nurses ambitious dreams of removing herself from her provincial roots and finding her true calling, she ends up traveling to Tokyo with the humble reason of chasing her current boyfriend Shouji Endo.",
     link:<iframe width="480" height="360" src="https://www.youtube.com/embed/NtXI90cMN10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:11,
      img: anime11,
      title: "Attack on titan",
      describe: "Type: TV/Episodes: 25/ Status: Finished Airing/Aired: Apr 7, 2013 to Sep 29, 2013/ Premiered: Spring 2013 /Broadcast: Sundays at 01:58 (JST) Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/MGRm4IzK1SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:12,
      img: anime12,
      title: "My hero academia",
      describe: "Type: TV/Episodes: 25/ Status: Finished Airing/Aired: Apr 7, 2018 to Sep 29, 2018/Premiered: Spring 2018/ Broadcast: Saturdays at 17:30 (JST)As summer arrives for the students at UA Academy, each of these superheroes-in-training puts in their best efforts to become renowned heroes. They head off to a forest training camp run by UA's pro heroes, where the students face one another in battle and go through dangerous tests, improving their abilities and pushing past their limits.  ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/wIb3nnOeves" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:13,
      img: anime13,
      title: "nanatsu no taizai",
      describe: "Type: TV/Episodes: 24/Status: Finished Airing/Aired: Oct 5, 2014 to Mar 29, 2015/ Premiered: Fall 2014 /Broadcast: Sundays at 17:00 (JST)In a world similar to the European Middle Ages, the feared yet revered Holy Knights of Britannia use immensely powerful magic to protect the region of Britannia and its kingdoms. However, a small subset of the Knights supposedly betrayed their homeland and turned their blades against their comrades in an attempt to overthrow the ruler of Liones.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/wxcvbL6o55M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:14,
      img: anime14,
      title: "Black clover",
      describe: "Type: TV/Episodes: 170 /Status: Finished Airing / Aired: Oct 3, 2017 to Mar 30, 2021 /Premiered: Fall 2017/Broadcast: Tuesdays at 18:25 (JST)Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King —a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/yxPhb2kCNMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:15,
      img: anime15,
      title: "Gto",
      describe: "Type: TV/Episodes: 43/ Status: Finished Airing/Aired: Jun 30, 1999 to Sep 17, 2000/Premiered: Summer 1999/ Broadcast: Wednesdays at 19:30 (JST)Twenty-two-year-old Eikichi Onizuka—ex-biker gang leader, conqueror of Shonan, and virgin—has a dream: to become the greatest high school teacher in all of Japan. This isn't because of a passion for teaching, but because he wants a loving teenage wife when he's old and gray. Still, for a perverted, greedy, and lazy delinquent, there is more to Onizuka than meets the eye. ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/vsjG6XYcBnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:16,
      img: anime16,
      title: "Midori no hibi",
      describe: "Type: TV /Episodes: 13/Status: Finished Airing /Aired: Apr 4, 2004 to Jun 27, 2004/ Premiered: Spring 2004/ Broadcast: Unknown There isn't a single person in Sakuradamon High who hasn't heard the legends about Seiji The Mad Dog  Sawamura's demonically powerful right hand. His reputation makes it fairly difficult for him to approach girls, and after being rejected 20 times straight, he half-jokingly vows to finish high school with his right hand for a girlfriend.",
     link:<iframe width="480" height="360" src="https://www.youtube.com/embed/OboCYK7jr68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:17,
      img: anime17,
      title: "Peach girl",
      describe: "Episodes: 25 /Status: Finished Airing / Aired: Jan 8, 2005 to Jun 25, 2005 /Premiered: Winter 2005/ Broadcast: UnknownPeach Girl is about an average high school girl, Momo Adachi, who everyone thinks is a beach bunny/slut because of her tanned skin. The actual reason she is so tanned is because she was on the swim team and tans very easily. She likes a boy, Toji, who she heard only likes non-tanned girls. This causes her to question who she is and have low self esteem. She spends a lot of time trying to remake herself into the girl she believes he wants; ",
     link:<iframe width="480" height="360" src="https://www.youtube.com/embed/ns2S47D_Kh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:18,
      img: anime18,
      title: "Pokemon",
      describe: "Type: TV /Episodes: 276 / Status: Finished Airing/Aired: Apr 1, 1997 to Nov 14, 2002/ Premiered: Spring 1997 / Broadcast: Thursdays at 19:00 (JST)Pokemon are peculiar creatures with a vast array of different abilities and appearances; many people, known as Pokemon trainers, capture and train them, often with the intent of battling others. Young Satoshi has not only dreamed of becoming a Pokemon trainer but also a Pokemon Master, and on the arrival of his 10th birthday, he finally has a chance to make that dream a reality. ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/nS0ico6na_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:19,
      img: anime19,
      title: "Diabolic lover",
      describe: "Type: TV /Episodes: 12 / Status: Finished Airing / Aired: Sep 16, 2013 to Dec 9, 2013 / Premiered: Fall 2013 / Broadcast: Unknown At the behest of her father, Yui Komori goes to live in a secluded mansion, home to the six Sakamaki brothers—Shuu, Reiji, Ayato, Kanato, Laito, and Subaru—a family of vampires. Though at first the siblings are confused as to why the girl has arrived, they soon realize that she is to be their new sacrificial bride, not to mention their other, more carnal intentions for her.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/QdNJO9i_pLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 2
  
    },
    {
      id:20,
      img: anime20,
      title: "Kuroko no basket",
      describe: "Type: TV / Episodes: 25 / Status: Finished Airing/Aired: Apr 8, 2012 to Sep 22, 2012 / Premiered: Spring 2012/ Broadcast: Sundays at 01:58 (JST) Teikou Junior High School's basketball team is crowned champion three years in a row thanks to five outstanding players who, with their breathtaking and unique skills, leave opponents in despair and fans in admiration. However, after graduating, these teammates, known as The Generation of Miracles, go their separate ways and now consider each other as rivals. ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/nb7e5_4CGag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:21,
      img: anime21,
      title: "Yu yu hakusho",
      describe: "Type: TV/Episodes: 112 /Status: Finished Airing /Aired: Oct 10, 1992 to Jan 7, 1995/ Premiered: Fall 1992 / Broadcast: Unknown One fateful day, Yuusuke Urameshi, a 14-year-old delinquent with a dim future, gets a miraculous chance to turn it all around when he throws himself in front of a moving car to save a young boy. His ultimate sacrifice is so out of character that the authorities of the spirit realm are not yet prepared to let him pass on. Koenma, heir to the throne of the spirit realm, ",
     link:<iframe width="727" height="409" src="https://www.youtube.com/embed/AtjinyUUh6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:22,
      img: anime22,
      title: "Wolf s rain",
      describe: "Type: TV /Episodes: 26 / Status: Finished Airing /Aired: Jan 7, 2003 to Jul 29, 2003/ Premiered: Winter 2003/Broadcast: Tuesdays at 02:10 (JST).In a dying world, there exists an ancient legend: when the world ends, the gateway to paradise will be opened. This utopia is the sole salvation for the remnants of life in this barren land, but the legend also dictates that only wolves can find their way to this mythical realm. Though long thought to be extinct, wolves still exist and live amongst humans, disguising themselves through elaborate illusions. ",
     link:<iframe width="727" height="409" src="https://www.youtube.com/embed/AXoTxTizh2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 5
  
    },
    {
      id:23,
      img: anime23,
      title: "Saiyuki",
      describe: "Type: TV /Episodes: 50 /Status: Finished Airing / Aired: Apr 4, 2000 to Mar 27, 2001/ Premiered: Spring 2000 /Broadcast: Tuesdays at 18:30 (JST).Many years ago, humans and demons lived in harmony. But that unity ended when demons started attacking humans and plotted a mission to unleash Gyumao—an evil demon imprisoned for thousands of years. Now, Genjo Sanzo, a rogue priest, must team up with three demons—Sha Gojyo, Son Goku, and Cho Hakkai—and embark on a perilous journey to the west to stop these demons from resurrecting Gyumao and restore the balance . ",
     link:<iframe width="729" height="409" src="https://www.youtube.com/embed/--4vlHw_4ac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 1
  
    },
    {
      id:24,
      img: anime24,
      title: "Get backers",
      describe: "Type: TV/Episodes: 49 /Status: Finished Airing / Aired: Oct 5, 2002 to Sep 20, 2003 /Premiered: Fall 2002 /Broadcast: Saturdays at 17:30 (JST)Mido Ban and Amano Ginji are known as the Get Backers, retrievers with a success rate of 100%. Whatever is lost or stolen, they can definitely get it back. Despite their powerful abilities and enthusiastic behavior, Ban and Ginji are terminally broke no matter what they do simply because few people would actually desire to hire them. ",
     link:<iframe width="545" height="409" src="https://www.youtube.com/embed/Och-uZvtJ0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:25,
      img: anime25,
      title: "Slayers",
      describe: "Type: TV /Episodes: 26/Status: Finished Airing /Aired: Apr 7, 1995 to Sep 29, 1995/Premiered: Spring 1995Powerful, avaricious sorceress Lina Inverse travels around the world, stealing treasures from bandits who cross her path. Her latest victims, a band of thieves, wait in ambush in a forest, thirsting for revenge. When Lina is about to effortlessly pummel her would-be attackers, the swordsman Gourry Gabriev suddenly announces his presence. ",
     link:<iframe width="559" height="409" src="https://www.youtube.com/embed/p2LBvB-zOAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 2
  
    },
    {
      id:26,
      img: anime26,
      title: "Demon slayer",
      describe: "Type: TV /Episodes: 26 / Status: Finished Airing/Aired: Apr 6, 2019 to Sep 28, 2019 /Premiered: Spring 2019 /Broadcast: Saturdays at 23:30 (JST)Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. ",
     link:<iframe width="727" height="409" src="https://www.youtube.com/embed/VQGCKyvzIM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:27,
      img: anime27,
      title: "Itazura na kiss",
      describe: "Type: TV /Episodes: 25 / Status: Finished Airing / Aired: Apr 5, 2008 to Sep 25, 2008/ Premiered: Spring 2008 /Broadcast: Saturdays at 02:25 (JST)When her newly-built home is razed to the ground by an earthquake, low-achieving, clumsy, and troublesome third-year high school student Kotoko Aihara is forced to share a roof with the school's—and possibly Japan's—smartest student, Naoki Irie. Kotoko is not actually a complete stranger to Irie-kun; unfortunately, a single love letter that she tried to give him in the past has already sealed her fate as far as he is concerned. ",
     link:<iframe width="545" height="409" src="https://www.youtube.com/embed/sFNqtx7Tr5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:28,
      img: anime28,
      title: "zero no tsukaima",
      describe: "Type: TV/Episodes: 13 / Status: Finished Airing/Aired: Jul 3, 2006 to Sep 25, 2006 /Premiered: Summer 2006 /Broadcast: Mondays at 00:30 (JST)Louise Françoise Le Blanc de La Vallière is a self-absorbed mage in a world of wands, cloaks, and royalty. Although she studies at Tristain Academy, a prestigious school for magicians, she has a major problem: Louise is unable to cast magic properly, earning her the nickname of Louise the Zero from her classmates. ",
     link:<iframe width="727" height="409" src="https://www.youtube.com/embed/j-UofYKswhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 2
  
    },
    {
      id:29,
      img: anime29,
      title: "City hunter",
      describe: "Type: TV / Episodes: 51/Status: Finished Airing/ Aired: Apr 6, 1987 to Mar 28, 1988 / Premiered: Spring 1987 /Broadcast: Mondays at 19:00 (JST) .City Hunter is a notorious contractor group with the call sign XYZ. No matter the job, they will take it, cleaning up the scum on the streets of Tokyo. The key member of City Hunter is Ryou Saeba; armed with his trusty Colt Python and pinpoint accuracy, he works alongside willful tomboy Kaori Makimura.",
     link:<iframe width="727" height="409" src="https://www.youtube.com/embed/6aZW8Byf0gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:30,
      img: anime30,
      title: "kaichou wa maid-sama",
      describe: "Type: TV/ Episodes: 26 / Status: Finished Airing/ Aired: Apr 2, 2010 to Sep 24, 2010/ Premiered: Spring 2010 / Broadcast: Fridays at 01:55 (JST).Being the first female student council president isn't easy, especially when your school just transitioned from an all boys high school to a co-ed one. Aptly nicknamed Demon President by the boys for her strict disciplinary style, Misaki Ayuzawa is not afraid to use her mastery of Aikido techniques to cast judgment onto the hordes of misbehaving boys and defend the girls at Seika High School. ",
     link:<iframe width="727" height="409" src="https://www.youtube.com/embed/jW7quAVPKOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:31,
      img: anime31,
      title: "evangelion ",
      describe: "Type: TV /Episodes: 26 /Status: Finished Airing /Aired: Oct 4, 1995 to Mar 27, 1996/Premiered: Fall 1995 / Broadcast: Wednesdays at 18:30 (JST).In the year 2015, the world stands on the brink of destruction. Humanity's last hope lies in the hands of Nerv, a special agency under the United Nations, and their Evangelions, giant machines capable of defeating the Angels who herald Earth's ruin. Gendou Ikari, head of the organization, seeks compatible pilots who can synchronize with the Evangelions and realize their true potential.",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/13nSISwxrY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 5
  
    },
    {
      id:32,
      img: anime32,
      title: "the vision of escaflowne",
      describe: "Type: TV /Episodes: 26/ Status: Finished Airing/ Aired: Apr 2, 1996 to Sep 24, 1996 / Premiered: Spring 1996 / Broadcast: Tuesdays at 18:00 (JST) Hitomi Kanzaki is just an ordinary 15-year-old schoolgirl with an interest in tarot cards and fortune telling, but one night, a boy named Van Fanel suddenly appears from the sky along with a vicious dragon. Thanks to a premonition from Hitomi, Van successfully kills the dragon, but a pillar of light appears and envelopes them both. As a result, Hitomi finds herself transported to the world of Gaea",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/YNTYLr3PF-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:33,
      img: anime33,
      title: "vandread ",
      describe: "Type: TV / Episodes: 13/Status: Finished Airing /Aired: Oct 3, 2000 to Dec 19, 2000 / Premiered: Fall 2000 /Broadcast: Tuesdays at 18:30 (JST)In Vandread, men are from Mars and women are from Venus! Well, not quite. Technology has allowed mankind to colonize the entire Milky Way galaxy, and in one star system, the men and women live on two different planets, Taraak and Mejere. A bitter and very literal gender war rages, to the point where they don't even see each other as the sames species anymore! .",
     link:<iframe width="630" height="352" src="https://www.youtube.com/embed/kNLR2RruvRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:34,
      img: anime34,
      title: "Witch Hunter Robin",
      describe: "Type: TV /Episodes: 26 /Status: Finished Airing / Aired: Jul 2, 2002 to Dec 24, 2002 /Premiered: Summer 2002 / Broadcast: Tuesdays at Unknown Witches are individuals with special powers like ESP, telekinesis, mind control, etc. Robin, a 15-year-old craft user, arrives from Italy to Japan to work for an organization named STN Japan Division (STN-J) as a replacement for one of STN-J's witch hunters who was recently killed. Unlike other divisions of STN, STN-J tries to capture the witches alive in order to learn why and how they became witches in the first place.",
     link:<iframe width="477" height="360" src="https://www.youtube.com/embed/hU_TmMOCHrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:35,
      img: anime35,
      title: "Akikan",
      describe: "Type: TV/ Episodes: 12/Status: Finished Airing / Aired: Jan 4, 2009 to Mar 29, 2009/Premiered: Winter 2009  /Broadcast: Sundays at 00:00 (JST)Hobbies are often a great way of meeting new people, but how could Kakeru Diachi, who collects rare juice cans, have ever suspected that he'd meet a fascinating new girl when he attempted to DRINK her? Naming her Melon, because she's got great melon... soda, Kakeru quickly learns that she's an Akikan—a beautiful girl who's also a special can created to fight other Akikans in a strange experiment ",
     link:<iframe width="480" height="360" src="https://www.youtube.com/embed/wCnLLN9IEII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 2
  
    },
    {
      id:36,
      img: anime36,
      title: "Lupin",
      describe: "Type: TV /Episodes: 23/Status: Finished Airing /Aired: Oct 24, 1971 to Mar 26, 1972/Premiered: Fall 1971 /Broadcast: Sundays at 19:30 (JST)Arsène Lupin III is the grandson of world-famous thief Arsène Lupin, and he's living up to his grandfather's memory as a high-profile thief himself. Due to his infamy, Lupin III attracts the attention of the persistent Inspector Zenigata of the ICPO, as well as rival criminals. Lupin III's criminal lifestyle even seeps into his love life. The main woman in Lupin III's world is femme fatale Fujiko Mine, ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/MBbMWEDF4R4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    
    {
      id:37,
      img: anime37,
      title: "Cowboy bebop",
      describe: "Type: TV/Episodes: 26 / Status: Finished Airing / Aired: Apr 3, 1998 to Apr 24, 1999/Premiered: Spring 1998 / Broadcast: Saturdays at 01:00 (JST)In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as Cowboys. The ragtag team aboard the spaceship Bebop are two such individuals. ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/QCaEJZqLeTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
  
    },
    {
      id:38,
      img: anime38,
      title: "Cobra",
      describe: "Type: TV /Episodes: 13 /Status: Finished Airing/Aired: Jan 2, 2010 to Mar 27, 2010 /Premiered: Winter 2010 /Broadcast: Saturdays at 23:30 (JST) / Producers: Happinet Pictures / Licensors: Sentai Filmworks/Studios: Magic Bus / Source: Manga/ Genres: Action, Adventure, Space, Sci-FiThis Cobra adaptation features short arcs of Cobra saving the world, his friends or himself. ",
     link:<iframe width="640" height="360" src="https://www.youtube.com/embed/nMPp2NPSntQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:39,
      img: anime39,
      title: "Hellsing",
      describe: "Type: TV /Episodes: 13/ Status: Finished Airing/ Aired: Oct 11, 2001 to Jan 17, 2002 / Premiered: Fall 2001 / Broadcast: UnknownHellsing, an organization specializing in dealing with supernatural threats, is called in to eliminate a vampire that is turning the villagers of Cheddar into ghouls. To put an end to this, the leader of the organization, Sir Integra Fairbrook Wingates Hellsing, dispatches her most formidable asset: a powerful vampire known as Alucard.",
     link:<iframe width="640" height="352" src="https://www.youtube.com/embed/timQfVW-MyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
    {
      id:40,
      img: anime40,
      title: "Trigun",
      describe: "Type: TV /Episodes: 26 / Status: Finished Airing/Aired: Apr 1, 1998 to Sep 30, 1998 / Premiered: Spring 1998/ Broadcast: Thursdays at 01:15 (JST)Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he's a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title The Humanoid Typhoon. He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say.  ",
     link:<iframe width="480" height="360" src="https://www.youtube.com/embed/vWWYXlCkq6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
  
    },
  ]

  const [filtredAnimes, setFiltredAnimes] = useState(objAnimes)

  const handelChange = (item) => {
    let filter = objAnimes.filter((val) => val.title.toLowerCase().includes(item.toLowerCase()));
    console.log(filter)
    setFiltredAnimes(filter)
  }

  const ratingChanged = (newRating) => {
    console.log(newRating)
    let filter = objAnimes.filter((val) => val.rate === newRating);
    console.log(filter)

    setFiltredAnimes(filter)
  }
  return (
    <div className="App">
    <img className="img" src={Cover} alt="cover" />;
      <h1 id="t">Anime go</h1>
      
      <BrowserRouter>
            <Filter changeFn={handelChange} ratingFilter={ratingChanged} />

        <Switch>
          <Route exact path="/" >      
            <AnimeList obj={filtredAnimes} />
          </Route>
          <Route  path="/description/:id" render={ (props) => <Description data= {objAnimes} {...props} />}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;