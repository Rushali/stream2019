//https://cdn.jwplayer.com/libraries/TVRdx7Eu.js
let player;
function resizePlayer(){

  let h = window.innerHeight * 0.571;
  let w = document.getElementById("wrapperLeft").offsetWidth;
  if(w > (h*1.77 + 20)){
    player.resize(h*1.77, h);
    document.getElementById("stream").style.height = "57.1%";
  }else{
    player.resize((w-20), (w-20)*0.56);
    document.getElementById("stream").style.height = (w-20)*0.56;
  }
}

window.addEventListener("load", function() {
  player = jwplayer('player');
  player.setup(
// {
//   "playlist": [
//     {
//       "sources": [
//         {
//           "default": false,
//           "file": "https://128.122.151.187:1935/live/itp/playlist.m3u8",
//           "label": "0",
//           "type": "hls"
//         }
//       ]
//     }
//   ],
//   "primary": "html5",
//   "hlshtml": true,
//   "autostart": true,
//
// }

{
      playlist: [{
          sources: [{
              file: "rtmp://128.122.151.187:1935/live/itp"
          }, {
              file: "http://128.122.151.187:1935/live/itp/playlist.m3u8"
          }]
      }],
      
      primary: "flash",
      "Browser": {
          "chrome": true,
          "edge": true,
          "facebook": true,
          "firefox": true,
          "ie": true,    // Used for IE 11+
          "msie": true,    // Used for IE 10 and below
          "safari": true,
          "version": {
            "version": "60.0.3112.113",
            "major": 60,
            "minor": 0
          }
        },
        "OS": {
          "android": true,   // Android Chrome
          "androidNative": true,   // Android native browser
          "iOS": true,
          "mobile": true,
          "mac": true,
          "iPad": true,
          "iPhone": true,
          "windows": true,
          "version": {
            "version": "10_12_6",
            "major": 10,
            "minor": 12
          }
        },
        "Features": {
          "flash": true,   // Does the browser environment support Flash?
          "flashVersion": 26,
          "iframe": false    // Is the session in an iframe?
        }
  }
	);
  resizePlayer();
});

// {
//   "Browser": {
//     "chrome": true,
//     "edge": false,
//     "facebook": false,
//     "firefox": false,
//     "ie": false,    // Used for IE 11+
//     "msie": false,    // Used for IE 10 and below
//     "safari": false,
//     "version": {
//       "version": "60.0.3112.113",
//       "major": 60,
//       "minor": 0
//     }
//   },
//   "OS": {
//     "android": false,   // Android Chrome
//     "androidNative": false,   // Android native browser
//     "iOS": false,
//     "mobile": false,
//     "mac": true,
//     "iPad": false,
//     "iPhone": false,
//     "windows": false,
//     "version": {
//       "version": "10_12_6",
//       "major": 10,
//       "minor": 12
//     }
//   },
//   "Features": {
//     "flash": true,   // Does the browser environment support Flash?
//     "flashVersion": 26,
//     "iframe": false    // Is the session in an iframe?
//   }
// }
