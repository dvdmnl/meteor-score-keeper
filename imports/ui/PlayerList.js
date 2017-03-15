/**
 * Created by David on 3/11/2017.
 */
import React from 'react'
import Player from './Player'
import FlipMove from 'react-flip-move';

class PlayerList extends React.Component {

    renderPlayers () {

        if(this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add First Player</p>
                </div>
            )
        } else {
            return this.props.players.map((player) => {
                return (
                    <Player key={player._id} {...player} />
                )
            })
        }


    }

    render () {
        const players = this.props.players
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: React.PropTypes.array.isRequired
}

export default PlayerList