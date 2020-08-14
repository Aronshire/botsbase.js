const request = require('node-superfetch')
const superagent = require('superagent');
const { EventEmitter } = require('events')

class BotsBase {
    constructor(token) {
        this.anahtar = token;
        this.postStats = this.constructor.postStats;
    };
// POST SOON

    static async postStats(sunucusayısı, uyesayısı) {
        if(!this.anahtar) throw new Error("[BotsBase] Veuillez saisir le token.")
        if(!sunucusayısı) throw new Error("[BotsBase] Un problème est survenu")
        if(!uyesayısı) throw new Error("[BotsBase] Un problème est survenu")
        const { body } = await request.get(`https://botsbase.net/api/token/${this.anahtar}`);
        if(body.message === false) { 
        throw new Error("[BotsBase] Entrez un token valide.") 
        return }
        try{
           var rewq = require("request");
           rewq({
            url: `https://botsbase.net/api/post`,
            method: "POST",
              headers: {
                token: this.anahtar,
                sunucu_sayisi: sunucusayısı,
                uye_sayisi: uyesayısı, 
              } 
            },(e,r,b) => console.log("Guild & User count posted."));
        } catch(err) {
            return console.log(err)
        }
    }

    async voted(userID, botID) {
        if(!botID) throw new Error(`[BotsBase] Veuillez entrer l’ID du bot.`)
        if (!userID) throw new TypeError(`[BotsBase] Veuillez entrer ID du Utilisateur`)
        try {
           const { body } = await request.get(`https://botsbase.net/api/vote?botid=${botID}&user=${userID}`);
            if (!body) return this.emit('error', "Une erreur inconnue a été émise, veuillez en informer les autorités.")
            return body.message
        } catch (err) {
            return console.log("Une erreur inconnue a été émise, veuillez en informer les autorités.")
        }
    }

    async fetchBot(botID) {
        if(!botID) throw new TypeError("[BotsBase] Veuillez entrer l’ID du bot.")

        try {
            const { body } = await request.get(`https://botsbase.net/api?bot=${botID}`)
            return body
        } catch(err) {
            return console.log("Une erreur inconnue a été émise, veuillez en informer les autorités.")
        }
    }

    async lastVote(botID) {
        if(!botID) throw new TypeError("[BotsBase] Veuillez entrer l’ID du bot.")

        try {
            const { body } = await request.get(`https://botsbase.net/api/lastvote?id=${botID}`)
            return body.user
        } catch(err) {
            return console.log("Une erreur inconnue a été émise, veuillez en informer les autorités.")
        }
    } 
    async lastVote(botID) {
        if(!botID) throw new TypeError("[BotsBase] Veuillez entrer l’ID du bot.")

        try {
            const { body } = await request.get(`https://botsbase.net/api/lastvote?id=${botID}`)
            return body.user
        } catch(err) {
            return console.log("Une erreur inconnue a été émise, veuillez en informer les autorités.")
        }
    } 
	

}

module.exports = BotsBase
