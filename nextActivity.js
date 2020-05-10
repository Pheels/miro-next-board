const nextBoardIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7072 15.7071L17.4143 12L13.7072 8.29289C13.3167 7.90237 12.6835 7.90237 12.293 8.29289C11.9025 8.68342 11.9025 9.31658 12.293 9.70711L14.5859 12L12.293 14.2929C11.9025 14.6834 11.9025 15.3166 12.293 15.7071C12.6835 16.0976 13.3167 16.0976 13.7072 15.7071Z" fill="#050038"/>
<path d="M7.7072 15.7071L11.4143 12L7.7072 8.29289C7.31668 7.90237 6.68351 7.90237 6.29299 8.29289C5.90246 8.68342 5.90246 9.31658 6.29299 9.70711L8.58588 12L6.29299 14.2929C5.90246 14.6834 5.90246 15.3166 6.29299 15.7071C6.68351 16.0976 7.31668 16.0976 7.7072 15.7071Z" fill="#050038"/>
</svg>`

miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
          bottomBar: async () => {
               return {
                 title: 'Next Board',
                 svgIcon: nextBoardIcon,
                 onClick: getUserboards
               }
           }
        }
    })
})

function getUserboards(){
  var data = null;

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      var jsonResponse = JSON.parse(this.responseText)
      var currentBoard = parseBoardId(document.referrer)
      for (var i = 0; i < jsonResponse['body']['data'].length; i++){
        var viewLink = parseBoardId(jsonResponse['body']['data'][i]['viewLink'])
        if (viewLink == currentBoard){

          var newUrl = ""
          // account for end of the array
          if (i == jsonResponse['body']['data'].length -1){
            newUrl = jsonResponse['body']['data'][0]['viewLink']
          } else {
            newUrl = jsonResponse['body']['data'][i+1]['viewLink']
          }
          console.log("switching to board " + newUrl)
          top.window.location.href = newUrl;
        }
      }
    }

  });

  xhr.open("GET", "https://u2iz0bxu56.execute-api.eu-west-2.amazonaws.com/v1/userBoards");
  xhr.send(data);
}

function parseBoardId(string){
  return string.split('board/')[1].split('/')[0]
}
