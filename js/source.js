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


function consoleLogResults(Result) {
  for (const [key, value] of Object.entries(Result)) {
    console.log(`${key}: ${value}`);
  }
}

//div.track:nth-of-type(3)
//article.album-card:nth-of-type(2)

function injectArtist(input){
  artistName = $("#artist-name");
  artistImg = $(".artist-image img");

  artistName.html(input.name);
  artistImg.html(input.image);
}

function injectAlbum(num, input) {
  albumName = $(`album-card:nth-of-type(${num}) h3`);
  albumImage = $(`album-card:nth-of-type(${num}) img`);
  albumReleaseDateAndType = $(`album-card:nth-of-type(${num}) p`);

  albumName.html(input.name);
  albumImage.html(input.image);
  albumReleaseDateAndType.html(`${input.release_date} • ${input.type}`);
}

function injectTrack(num, input) {
  trackName = $(`.track-title:nth-of-type(${num})`);
  trackAlbumName = $(`.track-album:nth-of-type(${num})`);
  trackAlbumImage = $(`.track:nth-of-type(${num}) img`);
  trackDuration = $(`.track-duration:nth-of-type(${num})`);

  trackName.html(input.name);
  trackAlbumName.html(input.album_name);
  trackAlbumImage.html(input.image);
  trackDuration.html(convertMsToMinSec(input.track_duration));
}

async function getArtist(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const artist = await response.json();

  let artistInfo = {
  name: artist.name,
  image: artist.images[0]?.url
  };

  return artistInfo;
}

async function getAlbum(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const album = await response.json();

  let albumInfo = {
  name: album.name,
  image: album.images[0]?.url,
  release_date:  album.release_date,
  type: album.type
  };

  return albumInfo;
}

async function getTrack(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const track = await response.json();

  let trackInfo = {
  image: track.album.images[0]?.url,
  name: track.name,
  album_name: track.album.name,
  track_number: track.track_number,
  track_duration: track.duration_ms
  };
  
  return trackInfo;
} 

// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "3MZsBdqDrRTJihTHQrO6Dq");
localStorage.setItem("access_token", "BQCyHaGNd1GE5CMl4QcBtTRTZ5rXqE0sfgrQTFE6OnldiD9MlhHTVcbzgPEKkbaO7Xa-xw-jf7b0qKAZn3v0Teqd3izPLOx468TBndn-uLsquabSP8R9C0udTM76j6fm8HlFa7j9byRh");
localStorage.setItem("album_id_1", "5xiwCNC26RvgfwElNmIJoL")
localStorage.setItem("album_id_2", "5mIImcsuqpiSXg8XvFr81I")
localStorage.setItem("album_id_3", "39VuC5rYQHAnR6xQwm1WDk")
localStorage.setItem("album_id_4", "65edimIChzNNK8VGn56pIK")
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


  result = await getArtist(accessToken, artistID);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID1);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID2);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID3);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID4);
  consoleLogResults(result);

  result = await getTrack(accessToken, trackID1);
  consoleLogResults(result);

  result = await getTrack(accessToken, trackID2);
  consoleLogResults(result);

  result = await getTrack(accessToken, trackID3);
  consoleLogResults(result);

};





    

load();
   