/**
 * Todo: doc
 */

const express = require('express');
const routes = express.Router();
const playerSchema = require('../schemas/player');

routes.post('/update_player_info/:id', async (req, res, next) => 
    {
        const _playerId = req.params.id;
        try { await playerSchema.findOne({_id: _playerId}).updateOne({nickname: 'Zé'}); res.end(); } 
        catch (err) { console.log(err); res.status(500).end(); }
    }
);
routes.get('/get_all_players', async (req,res,next) => 
    {
        try 
        { 
            const response = await playerSchema.find({});
            res.status(200).json(response).end(); 
        }
        catch (err) { console.log(err); res.status(500).end(); }
    }
);

module.exports = routes;