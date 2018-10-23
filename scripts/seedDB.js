const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users and Notes collection and inserts the users and notes below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wines101"
);


const userSeed = [
  {
    username: "Stephen King",
    password: "12345",
    isAuthenticated: "12345",
    name: "Stephen",
    phone: "619123456",
    street: "123 Four Steet",
    city: "Lemon Grove",
    state: "Ca",
    zipcode: "91945",
    email: "sum1kool@yahoo.com",
    age: 22,
    image: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2F1428elm.com%2Ffiles%2F2018%2F01%2FStephen-King-Courtesy-of-BookBub-Blog.jpg&c=sc&w=850&h=560",
    notes: [{
      title: "Best Winery",
      discription: "My Top 10 Wineries",
      synopsis:
        "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
      date: new Date(Date.now())
    },
    {
      title: "Best Red",
      discription: "1998 Rosemont Cabernet",
      synopsis:
        "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
      date: new Date(Date.now())
    },
    {
      title: "Favorite White",
      discription: "Just about anything rose",
      synopsis:
        "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
      date: new Date(Date.now())
    },
    {
      title: "What to do this weekend?!",
      discription: "Where the wine at?",
      synopsis:
        "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
      date: new Date(Date.now())
    },],
    favs:[{
      title: "Altipiano Vineyard",
      discription: "Altipiano Vineyard and Tasting room in Escondido",
      image: "http://www.altipianovineyard.com/images/ap-vineyard-merged768x445.jpg"
    }],
    date: new Date(Date.now())
  },
  {
    username: "Test",
    password: "test",
    authenticate: "test",
    name: "Test",
    phone: "619123456",
    street: "567 Eight Steet",
    city: "Lemon Grove",
    state: "Ca",
    zipcode: "91945",
    email: "sum1new@yahoo.com",
    age: 23,
    image: "http://epmgaa.media.clients.ellingtoncms.com/img/photos/2013/08/19/Dave_Chapelle_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33",
    notes: [{
      title: "Don't forget, BevMo 5cent wine sale",
      discription: "next weekend",
      synopsis:
        "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
      date: new Date(Date.now())
    },
    {
      title: "Best Wine Lounge?!",
      discription: "Where do get a good lunch wine",
      synopsis:
        "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life.",
      date: new Date(Date.now())
    },
    {
      title: "Red or White",
      discription: "What's the grape?",
      synopsis:
        "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, discription Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
      date: new Date(Date.now())
    },
    {
      title: "Have you had a Rhone?",
      discription: "If you do, try this one...",
      synopsis:
        "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.",
      date: new Date(Date.now())
    },
    {
      title: "What's on your lips?",
      discription: "What my friends are drinking...",
      synopsis:
        "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.",
      date: new Date(Date.now())
    }],
    favs:[{
      title: "Beach House Winery",
      discription: "Winery located in Oceanside",
      image: "http://nebula.wsimg.com/caf44750dfabb627b01af32d0f18f006?AccessKeyId=988182F37D4CD728376B&disposition=0&alloworigin=1"
    }],
    date: new Date(Date.now())
  },
  {
    username: "lmerck0",
    password: "5c5b5fc87af9d16868499a7af894bd095e7cd4e9",
    name: "Yankee Norway",
    email: "ywhiff0@sciencedirect.com",
    image: "https://robohash.org/voluptatumbeataesit.jpg?size=50x50&set=set1",
    notes: [
      {
        title: "3 Ninjas Kick Back",
        discription: "amet sapien dignissim vestibulum vestibulum ante",
        synopsis: "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec"
      },
      {
        title: "Creator",
        discription: "nunc vestibulum ante ipsum primis in faucibus orci luctus",
        synopsis: "ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras"
      },
      {
        title: "Our Daily Bread",
        discription: "duis aliquam convallis nunc proin at turpis",
        synopsis: "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien"
      },
      {
        title: "Ali",
        discription: "ut massa quis augue luctus tincidunt nulla mollis molestie",
        synopsis: "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus"
      }
    ],
    favs: [
      {
        title: "focus group",
        discription: "lacinia erat vestibulum sed magna at nunc commodo",
        image: "http://dummyimage.com/207x131.jpg/dddddd/000000"
      },
      {
        title: "encryption",
        discription: "curae mauris viverra diam vitae quam suspendisse potenti nullam",
        image: "http://dummyimage.com/137x100.bmp/5fa2dd/ffffff"
      },
      {
        title: "foreground",
        discription: "consequat morbi a ipsum integer a nibh in",
        image: "http://dummyimage.com/199x239.png/cc0000/ffffff"
      },
      {
        title: "Extended",
        discription: "eu tincidunt in leo maecenas pulvinar lobortis est",
        image: "http://dummyimage.com/102x199.png/5fa2dd/ffffff"
      }
    ],
    friends: [],
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
