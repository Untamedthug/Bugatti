import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
  let who =
    m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://api.shannmoderz.xyz/server/file/XyjKP6IA0VnyFZF.jpg')

  //reply link wa
  global.rpl = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: dygp,
        mediaType: 'VIDEO',
        description: 'support group',
        title: packname,
        body: 'support group',
        thumbnailUrl: pp,
        sourceUrl: dygp,
      },
    },
  }

  //reply link PayPal
  global.rpyp = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: dygp,
        mediaType: 'VIDEO',
        description: 'Donate',
        title: 'YOUTUBE',
        body: 'Keep Bugatti alive',
        thumbnailUrl: pp,
        sourceUrl: fgyt,
      },
    },
  }

  //reply link yt
  global.rpyt = {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: fgyt,
        mediaType: 'VIDEO',
        description: 'Suscribe : ' + fgyt,
        title: 'YouTube',
        body: 'learn to Deploy Bugatti',
        thumbnailUrl: pp,
        sourceUrl: fgyt,
      },
    },
  }

  global.fcon = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      contactMessage: {
        displayName: `FIRE MD`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Bugatti'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
}
export default handler