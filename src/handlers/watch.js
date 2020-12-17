const MessageEmbed = require('discord.js').MessageEmbed
const watchContent = async (message) => {

                const watchTitle1 = "1. [An introduction to SourceCred]"
                const watchLink1 = "(https://www.youtube.com/watch?v=3ZBDiNvddG4)"
        
                const watchTitle2 = "2. [A social algorithm]"
                const watchLink2 = "(https://www.youtube.com/watch?v=EME4CZscPB8)"
        
                const watchTitle3 = "3. [An intro & AMA with OpenCoop]"
                const watchLink3 = "(https://www.youtube.com/watch?v=tGRcPW3LXmU)"
                
                const watchTitle4 = "4. [SourceCred, its Architecure & plugins]"
                const watchLink4 = "(https://www.youtube.com/watch?v=G6cluw6peKM)"

            
            let embedWATCH= new MessageEmbed()
             .setColor("#ff3864")
                    .setThumbnail("https://raw.githubusercontent.com/sourcecred/sourcecred/master/src/assets/logo/rasterized/logo_64.png")
        
                    .setDescription(" Hey, thanks for asking.")
                                  
                    .addFields(                        
                
                                {
                                    name: "Sourcecred videos",
                                    value: watchTitle1 + watchLink1 + "\n " + watchTitle2 + watchLink2 + "\n " +watchTitle3 + watchLink3+ "\n " +watchTitle4 + watchLink4,
                                    inline: true,                                                                                                      
                                }
                                       
                                );
                                                
       
                                        
                                
 message.reply(embedWATCH);

}  
module.exports = watchContent
