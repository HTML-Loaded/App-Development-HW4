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

var result;


function consoleLogResults(Result) {
  for (const [key, value] of Object.entries(Result)) {
    console.log(`${key}: ${value}`);
  }
}

function injectArtist(input){
  let nameElement = $("#artist-name");
  let imgElement = $(".artist-image img");

  nameElement.html(input.name);
  imgElement.attr("src", input.image);
}

function injectAlbum(num, input) {
  let nameElement = $(`.album-card:nth-of-type(${num}) h3`);
  let imgElement = $(`.album-card:nth-of-type(${num}) img`);
  let albumReleaseDateAndType = $(`album-card:nth-of-type(${num}) p`);

  nameElement.html(input.name);
  imgElement.attr("src", input.image);
  albumReleaseDateAndType.html(`${input.release_date} • ${input.type}`);
}

function injectTrack(num, input) {
  let track = $(`.track:nth-of-type(${num})`);

  track.find(".track-title").text(input.name);
  track.find(".track-album").text(input.album_name);
  track.find("img").attr("src", input.image);
  track.find(".track-number").text(input.track_number);
  track.find(".track-duration").text(
    convertMsToMinSec(input.track_duration)
  );
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
localStorage.setItem("access_token", "");
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
  injectArtist(result);

  result = await getAlbum(accessToken, albumID1);
  injectAlbum(1, result);

  result = await getAlbum(accessToken, albumID2);
  injectAlbum(2, result);

  result = await getAlbum(accessToken, albumID3);
  injectAlbum(3, result);

  result = await getAlbum(accessToken, albumID4);
  injectAlbum(4, result);

  result = await getTrack(accessToken, trackID1);
  injectTrack(1, result);

  result = await getTrack(accessToken, trackID2);
  injectTrack(2, result);

  result = await getTrack(accessToken, trackID3);
  injectTrack(3, result);

};





    

load();
   