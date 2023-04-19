/*[[Ini untuk setting Bot
Untuk gambar background menu 
ada 
di plugins menu
untuk lainya saran jangan 
di ubah bre nanti eror]]*/

/*global owner*/
global.owner = ['6281383141734']  
global.mods = ['6287843026804'] 
global.prems = ['6281383141734']
/*Nomor Owner & payment*/
global.nameowner = 'David'
global.numberowner = '6281383141734' 
global.mail = 'yaebotZ@gmail.com' //enter your email 🗿
global.dana = '6281383141734'
global.pulsa = '6281383141734'
global.gopay = '6281383141734'
/*Nama Bot & Grouplink*/
global.namebot = '𝚈𝚊𝚎-𝙱𝚘𝚝𝚉'
global.gc = 'https://chat.whatsapp.com/HoSU1UPPnro4v5n1A3yVMh'
global.web = 'https://github.com/Bruh9838'
global.instagram = 'https://instagram.com/olangcina'
/*global wm*/
global.lolkey = 'rey2k22'
global.zenzkey = 'BagasPrdn'
global.apikeyaAi = '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' //fill apikey openai here (register https://beta.openai.com/)
global.wm = '© 𝚈𝚊𝚎-𝙱𝚘𝚝𝚉'
global.watermark = wm
global.wm2 = '⫹⫺ 𝚈𝚊𝚎-𝙱𝚘𝚝𝚉'
global.wm3 = '© 𝚈𝚊𝚎-𝙱𝚘𝚝𝚉'
global.wm4 = '© 𝚈𝚊𝚎-𝙱𝚘𝚝𝚉'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with David'
global.author = '\n\n\n\n\n\n\n\n\n\n\nBy NANZ MODZ'
/*Rest api setting*/
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.biz.id',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.botcahx.biz.id': 'Admin', //daftar sendiri kalo abis
  'https://api.lolhuman.xyz': 'Deffbotz',
}

/*Setting Rpg*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Jangan merubah bagian ini!*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
