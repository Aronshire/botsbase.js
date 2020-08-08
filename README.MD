# Bots Base API

# Installation / Kurulum
`npm i botsbase.js`

### Glitch
`pnpm i botsbase.js`

# Examples / Örnek

```js
const BaseAPI = require('botsbase.js')
const BotsBase = new BaseAPI();

// Events
BotsBase.on('error', console.error)
```

#### Checking user has voted

```js
const BaseAPI = require('botsbase.js')
const BotsBase = new BaseAPI();

// Events
BotsBase.on('error', console.error)

client.on('ready', async() => {
   const check = await BotsBase.voted("USER_ID", "BOT_ID")
   if(check === true) {
       console.log("true") // Voted
   } else {
       console.log("false") // No Voted
   }
})
```

#### Bot Fetch

```js
const BaseAPI = require('botsbase.js')
const BotsBase = new BaseAPI();

// Events
BotsBase.on('error', console.error)

 const data = await BotsBase.fetchBot("BOT_ID")
   console.log(data) // { isim: "...", prefix: "..." }
  // const isim = await BotsBase.fetchBot("BOT_ID").then(x => x.id)

})
```

#### Last Vote

```js
const BaseAPI = require('botsbase.js')
const BotsBase = new BaseAPI();

// Events
BotsBase.on('error', console.error)

const lastvote = await BotsBase.lastVote("BOT_ID")
console.log(lastvote)

})
```

#### Roxza <3