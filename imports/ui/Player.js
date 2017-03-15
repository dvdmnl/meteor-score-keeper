/**
 * Created by David on 3/11/2017.
 */
import React from 'react'
import {Players} from './../api/players'

class Player extends React.Component {
    render () {
        const {_id, name, score} = this.props
        return (
            <div className="item" key={_id}>
                <div className="player">
                    <div>
                        <h3 className="player__name">{name}</h3>
                        <p className="player__stats">has score of {score}</p>
                    </div>
                    <div className="player__actions">
                    <button className="button button--round" onClick={() => {
                    Players.update(_id,{
                    $inc : {score : 1 }
                    })
                    }}>+</button>
                    <button className="button button--round" onClick={() => {
                    Players.update(_id,{
                    $inc : {score : -1 }
                    })
                    }}>-</button>
                    <button className="button button--round" onClick={() => {
                    Players.remove(_id)
                }}>X</button>
                    </div>
                </div>
            </div>
        )
    }
}


Player.propTypes = {
    _id: React.PropTypes.string.isRequired,
    name:React.PropTypes.string.isRequired,
    score:React.PropTypes.number.isRequired,
}

export default Player