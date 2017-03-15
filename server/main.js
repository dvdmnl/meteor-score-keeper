import {Meteor} from 'meteor/meteor'
import {Players, calculatePlayerPositions} from './../imports/api/players'
import numeral from 'numeral';


Meteor.startup(() => {
    export const calculatePlayerPositions = (players) => {
        let rank = 1;

        return players.map((player, index) => {
            if (index !== 0 && players[index - 1].score > player.score) {
                rank++;
            }

            return {
                ...player,
                rank,
                position: numeral(rank).format('0o')
            };
        });
    };
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    console.log(calculatePlayerPositions(players))


})