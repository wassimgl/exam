
import './App.css';
import React,{useState} from 'react';
import MovieCard from './component/MovieCard';
import Search from './component/Search';

function App() {
  const [movies,setMovies]=useState[{
    title:"Rush",
    posterUrl:"https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:"2013’s Rush is a tremendously underrated film, but if you're a fan of racing dramas or true stories about perseverance, it hits the spot.",
    rate: 5,
  },
  {
    title:"Bad Trip",
    posterUrl:"https://m.media-amazon.com/images/M/MV5BNDgzMTgxOTktNmM2Ny00Nzk5LTgxNjAtNzJlNjBjNjMyOWZkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description:"If you just want to watch something that's going to make you laugh really, really hard, check out Bad Trip. The film is a riff on the Jackass formula as it tells the story of two friends who take a road trip cross country, but their encounters are almost all pranks that are caught on hidden cameras",
    rate: 7,
  },
  {
    title:"21 Jump Street ",
    posterUrl:"https://fr.web.img2.acsta.net/medias/nmedia/18/73/46/24/20086654.jpg",
    description:"Nobody takes a terrible on paper idea and turns it into a winning movie quite like Phil Lord and Christopher Miller. The duo behind Cloudy with a Chance of Meatballs and The LEGO Movie reinvented the 80s crime comedy 21 Jump Street into one of the funniest new comedies of the 21st Century",
    rate: 4,  
  },
  {
    title:"The Power of the Dog",
    posterUrl:"https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    description:"The Power of the Dog is a slow, sly movie that reveals itself to you in subtle, measured glimpses at tenderness that are otherwise caked in grit, cruelty and crudity.",
    rate: 3,
  },
  {
    title:"Nightbooks",
    posterUrl:"https://cdn.justjared.com/wp-content/uploads/headlines/2021/08/nightbooks-trailer.jpg",
    description:"A delightful “gateway horror” film for the whole family (ok, maybe not the super young kids), Nightbooks is adapted from the book of the same name and follows two kids trapped by a vicious (but fabulous) witch who demands a new scary story each night",
    rate: 6,
  },
  {
    title:"The Mitchells vs. the Machines",
    posterUrl:"https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg",
    description:"You’ve seen a zillion animated family comedy movies, but The Mitchells vs. the Machines is undoubtedly one of the best.",
    rate: 5,
  },
  {
    title:"ParaNorman",
    posterUrl:"https://flxt.tmsimg.com/assets/p9047424_p_v10_ay.jpg",
    description:"If you’re looking for a fun family movie that’s also genuinely spooky and has a surprising message, I urge you to check out ParaNorman. The stop-motion animated film hails from LAIKA, the same studio behind Coraline and Kubo and the Two Strings, and it’s absolutely one of their best films",
    rate: 4,
  },
  {
    title:"How to Train Your Dragon 2",
    posterUrl:"https://m.media-amazon.com/images/I/91VAVkBjSBL._SL1500_.jpg",
    description:"The 2014 sequel How to Train Your Dragon 2 takes place five years after the events of the first film and finds Hiccup coming into contact with his long-lost mother (played by Cate Blanchett) and battling a madman (Djimon Hounsou) who wants to take over the world",
    rate: 3,
  },
  {
    title:"Da 5 Bloods",
    posterUrl:"https://collider.com/wp-content/uploads/2020/05/da-5-bloods-netflix-poster-spike-lee.jpeg",
    description:"When legendary filmmaker Spike Lee tackles the Vietnam War, you know he's going to do it unlike any other filmmaker before him. Indeed, Lee's 2020 drama Da 5 Bloods follows four Vietnam War veterans in present day who travel back to Vietnam to search for the remains of their fallen squad leader, as well as a cadre of gold they buried and left behind all those years ago.",
    rate: 7,
  }
];
  
  return (
   <div className='movie-container'>
   <MovieCard/>
   <Search/>
   <h1>movienp</h1>
</div>

  );
  
}

export default App;
