const MessageEmbed = require('discord.js').MessageEmbed
const listenContent = async (message) => {

            const listenTitle1 = "1. [Project lead : Dandelion]"
            const listenLink1 = "(https://sourcecred.podbean.com/e/dandelion-sourcecred/)"
    
            const listenTitle2 = "2. [Data science : Michael Zargham]"
            const listenLink2 = "(https://sourcecred.podbean.com/e/michael-zargham-sourcecred/)"
    
            const listenTitle3 = "3. [Dev contributor : William Chargin]"
            const listenLink3 = "(https://sourcecred.podbean.com/e/william-chargin-sourcecred/)"
            
            const listenTitle4 = "4. [Defying status quo : building SourceCred]"
            const listenLink4 = "(https://anchor.fm/metagame/episodes/MetaView-E04---Defying-Status-Quo--Building-SourceCred-efc6gq)"

            
            let embedLISTEN = new MessageEmbed()
                .setColor("#ff3864")
                .setThumbnail("https://raw.githubusercontent.com/sourcecred/sourcecred/master/src/assets/logo/rasterized/logo_64.png")
    
                .setDescription(" Hey, thanks for asking.")
    
                
    
                .addFields(                        
            
                            {
                                name: "people & the SourceCred project",
                                value: listenTitle1 + listenLink1 + "\n " + listenTitle2 + listenLink2 + "\n " + listenTitle3 + listenLink3+ "\n " + listenTitle4 + listenLink4,
                                inline: true,                                                                                                      
                            }
                           
    
                            );
                        
                                                
       
                                        
                                
 message.reply(embedLISTEN);

}  
module.exports = listenContent
