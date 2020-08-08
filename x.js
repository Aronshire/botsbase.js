const request = require('node-superfetch')
const superagent = require('superagent');
const { EventEmitter } = require('events')

class BotsBase extends EventEmitter {

// POST SOON

    async voted(userID, botID) {
        if(!botID) throw new Error(`[BotsBase] Veuillez entrer l’ID du bot.`)
        if (!userID) throw new TypeError(`[BotsBase] Veuillez entrer ID du Utilisateur`)
        try {
           const { body } = await request.get(`https://botsbase.net/api/vote?botid=${botID}&user=${userID}`);
            if (!body) return this.emit('error', "Une erreur inconnue a été émise, veuillez en informer les autorités.")
            return body.message
        } catch (err) {
            return this.emit('error', "Une erreur inconnue a été émise, veuillez en informer les autorités.")
        }
    }

    async fetchBot(botID) {
        if(!botID) throw new TypeError("[BotsBase] Veuillez entrer l’ID du bot.")

        try {
            const { body } = await request.get(`https://botsbase.net/api?bot=${botID}`)
            return body
        } catch(err) {
            return this.emit('error', "Une erreur inconnue a été émise, veuillez en informer les autorités.")
        }
    }

    async lastVote(botID) {
        if(!botID) throw new TypeError("[BotsBase] Veuillez entrer l’ID du bot.")

        try {
            const { body } = await request.get(`https://botsbase.net/api/lastvote?id=${botID}`)
            return body.user
        } catch(err) {
            return this.emit('error', "Une erreur inconnue a été émise, veuillez en informer les autorités.")
        }
    }    

}

module.exports = BotsBase