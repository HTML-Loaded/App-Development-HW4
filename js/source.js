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
var result;

function consoleLogResults(list = []) {
  list.forEach(Item => {
    console.log(Item);
  });
}

async function getArtist(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const artist = await response.json();

  // artistName = artist.name;
  // artistImg = artist.images[0]?.url;
  artistList = [artist.name, artist.images[0]?.url];
  return artistList;
}

async function getAlbum(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const album = await response.json();

  albumList = [album.images[0]?.url, album.name, album.release_date, album.type];
  return albumList;
}

async function getTrack(token, id) {
  const response = await fetch();
  const tracks = await response.json();
}

// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "3MZsBdqDrRTJihTHQrO6Dq");
localStorage.setItem("access_token", "BQCo-OrDapmf25kUZlWndMSSCLO8pKouHlJ8xlomraaWLCR3vkGpfdFQzCawfGkQqbQG79JiUPi_AlJ9YY_d2uo7TlF7_BECbNnXZKM7ft7-q7x1QpRHa5-t2SRwadoSb2AALb6TPG9f");
localStorage.setItem("album_id_1", "")
localStorage.setItem("album_id_2", "")
localStorage.setItem("album_id_3", "")
localStorage.setItem("album_id_4", "")
localStorage.setItem("track_id_1", "6rY5FAWxCdAGllYEOZMbjW?si=828ddff63a764b0c");
localStorage.setItem("track_id_2", "2mlNgAeIBnL78ZriXgrRHz?si=2b5dba916a1d4098");
localStorage.setItem("track_id_3", "42D9aaKTLw47faFhRCQfHF?si=6dbac7eb2eb94d6f");

async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    
  // getArtist(artistID, accessToken).then(() => {
  // console.log(artistName);
  // console.log(artistImg);

  result = await getArtist(accessToken, artistID);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID1);
  consoleLogResults(result);
};





    

load();
   