/**
 * Created by David on 3/11/2017.
 */
import React from 'react'
import AppTitle from './AppTitle'
import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer'



class App extends React.Component {
    render () {
        const {title,subtitle, players} = this.props
        console.log("Players-App:", players)
        return(
            <div>
                <AppTitle title={title} subtitle={"Created by David Manela"}/>
                <div className="wrapper">
                    <PlayerList players={players}/>
                    <AddPlayer/>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
}

export default App