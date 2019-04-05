// import React, {Component} from 'react';
// import queryString from 'query-string';
// //TODO copied from mpj 
// class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             serverData : {},
//             filterString: ''
//         }
//     }
//     componentDidMount(){
//         let parsed = queryString.parse(window.location.search);
//         let accessToken = parsed.access_token;

//         fetch('https://api.spotify.com/v1/me', {
//             headers: {'Authorization' : 'Bearer' + accessToken}
//         }).then(response => response.json())
//         .then(data => this.setState({
//             user: {
//                 name : data.display_name
//             }
//         }))

//         fetch('https://api.spotify.com/v1/me/playlists', {
//             headers: {'Authorization': 'Bearer' + accessToken}
//             .then(response => response.json()).then(data => this.setState({
//                 playlists: data.items.map(item => {
//                     console.log(data.items)
//                     return {
//                         name : item.name,
//                         imageUrl : item.images[0].url,
//                         songs : []
//                     }
//                 })
//             })) 
//         })
//     }

//     render() {
//         //show the list that the users upvote and downvote
//         let playlistToRender = this.state.user && this.state.playlists?
        
//         this.state.playlists.filter(
//             playlist => 
//                 playlist.name.toLowerCase().includes(
//                     this.state.filterString.toLowerCase() )
//         ): []
//         return(
//             <div className = "App">
//             {this.state.user ? 
//                 <div>
//                 <h1 style ={{...defaultStyle, 'font-size':'54px'}}>
//                 {this.state.user.name}'s playlists
//                 </h1>
               
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;