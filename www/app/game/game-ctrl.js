// $.ajax({
//   url: rootUrl,
//   method: 'GET'
// })
// .done(function(response) {
//   userPlaylistSongs = response
// });

function setHeader() {
    return {
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid,
      "id": window.sessionStorage.id
    };
  };

function playlistShuffle(){
  index = Math.floor(Math.random() * userPlaylistSongs.length + 1)
  return userPlaylistSongs[index]
}

karaoke.controller('GameCtrl', ['$http', '$scope', function($http, $scope){



}]);
