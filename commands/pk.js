module.exports = async (context) => {
    const { client, m, Keithspeed } = context;

    try {
        // Prepare the response text with speed data
        const menuText = `*Pon\n${Keithspeed.toFixed(4)}Ms🏆*`;

        // Send message with contextInfo and mention the sender
        await client.sendMessage(m.chat, {
            text: menuText,
            contextInfo: {
                mentionedJid: [m.sender], // Mention the sender
                externalAdReply: {
                    title: "*Marisel*",
                    body: "DELTA-MD-V1",
                    sourceUrl: "https://whatsapp.com/channel/0029Vb5Xj7xGzzKYC7hKle2b",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        });
    } catch (error) {
        console.error("Error sending message:", error);
        m.reply('An error occurred while sending the menu.');
    }
};
