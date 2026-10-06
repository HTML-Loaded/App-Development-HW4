// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 

var artistName;
var artistImg;

async function getArtist() {
  const response = await fetch("https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq", {
    headers: {Authorization: `Bearer BQCo-OrDapmf25kUZlWndMSSCLO8pKouHlJ8xlomraaWLCR3vkGpfdFQzCawfGkQqbQG79JiUPi_AlJ9YY_d2uo7TlF7_BECbNnXZKM7ft7-q7x1QpRHa5-t2SRwadoSb2AALb6TPG9f`},
  });

  const artist = await response.json();
  artistName = artist.name;
  artistImg = artist.images[0]?.url;
}

async function getAlbums() {
  const response = await fetch();
  const albums = await response.json();
}

async function getTracks() {
  const response = await fetch();
  const tracks = await response.json();
}

// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "3MZsBdqDrRTJihTHQrO6Dq");
localStorage.setItem("access_token", "");
localStorage.setItem("track_id_1", "");
localStorage.setItem("track_id_2", "");
localStorage.setItem("track_id_3", "");

function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    






    
}
load();
getArtist().then(() => {
  console.log(artistName);
  console.log(artistImg);
});
   