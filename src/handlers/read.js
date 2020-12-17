const readContent = async (message) => {

        const readTitle1 = "1. [A living history of sourcecred]"
        const readLink1 = "(https://discourse.sourcecred.io/t/a-living-history-of-sourcecred/310)"

        const readTitle2 = "2. [Separation of power checks & balances]"
        const readLink2 = "(https://discourse.sourcecred.io/t/separation-of-powers-checks-and-balances/360)"

        const readTitle3 = "3. [about champions & heroes]"
        const readLink3 = "(https://discourse.sourcecred.io/t/about-champions-and-heroes/291)"

        const readTitle4 = "1. [DAO and reputation protocols]"
        const readLink4 = "(https://medium.com/sourcecred/the-dao-missing-link-reputation-protocols-8e141355cef2)"

        const readTitle5 = "2. [SourceCred as a store of community value]"
        const readLink5 = "(https://discourse.sourcecred.io/t/sourcecred-as-store-of-community-value-socv/129)"

        const readTitle6 = "1. [Exploring subjectivity in algorithms]"
        const readLink6 = "(https://medium.com/sourcecred/exploring-subjectivity-in-algorithms-5d8bf1c91714)"

        const readTitle7 = "2. [Network formation game]"
        const readLink7 = "(https://medium.com/sourcecred/network-formation-games-7a74491abf0e)"


            let embedREAD = new MessageEmbed()
            .setColor("#ff3864")
            .setThumbnail("https://raw.githubusercontent.com/sourcecred/sourcecred/master/src/assets/logo/rasterized/logo_64.png")

            .setDescription(" Hey, thanks for asking.")
            .addFields(                        
        
                        {
                            name: "Cred culture",
                            value: readTitle1 + readLink1 + "\n " + readTitle2 + readLink2 + "\n " +readTitle3 + readLink3,
                            inline: true,                                                                                                      
                        },
                                                                 
                        {
                            name: "Community & DAO",
                            value: readTitle4 + readLink4 + "\n " + readTitle5 + readLink5 ,
                          //  inline: true,                                                                                                      
                        },

                        {
                            name: "Data science",
                            value: readTitle6 + readLink6 + "\n " + readTitle7 + readLink7 ,
                          //  inline: true,                                                                                                      
                        },

                        );
                        
                                                
       
                                        
                                
 message.reply(embedREAD);

}  
module.exports = readContent
