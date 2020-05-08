const previousBoardIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.70711 8.29289L6 12L9.70711 15.7071C10.0976 16.0976 10.7308 16.0976 11.1213 15.7071C11.5118 15.3166 11.5118 14.6834 11.1213 14.2929L8.82843 12L11.1213 9.70711C11.5118 9.31658 11.5118 8.68342 11.1213 8.29289C10.7308 7.90237 10.0976 7.90237 9.70711 8.29289Z" fill="#050038"/>
<path d="M15.7071 8.29289L12 12L15.7071 15.7071C16.0976 16.0976 16.7308 16.0976 17.1213 15.7071C17.5118 15.3166 17.5118 14.6834 17.1213 14.2929L14.8284 12L17.1213 9.70711C17.5118 9.31658 17.5118 8.68342 17.1213 8.29289C16.7308 7.90237 16.0976 7.90237 15.7071 8.29289Z" fill="#050038"/>
</svg>`

miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            toolbar: {
                  title: 'Previous Board',
                  toolbarSvgIcon: previousBoardIcon,
                  librarySvgIcon: previousBoardIcon,
                  onClick: previousBoard
                },
                toolbar: {
                      title: 'Next Board',
                      toolbarSvgIcon: nextBoardIcon,
                      librarySvgIcon: nextBoardIcon,
                      onClick: nextBoard
                    }
            }
    })
})

function previousBoard(){
  console.log('previous board')
}
