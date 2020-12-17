const helpContent = ` welcome to the SourceCred Discord! 
I know bots aren’t advanced enough to have feelings (yet), but I’m still really glad you’re here. I’d love to give you some next steps to connect you with the community and to get you earning Cred! Here are some **commands** to learn about SourceCred:
           
            - **!ac read** // docs curated by the community that provide additional insight
                
            - **!ac listen** // get to hear people from the community 
             
            - **!ac watch** //  videos to dive into SourceCred 

            - **!cred** & *@[discord-userrname]* // it returns your cred balance from the ledger

> !cred @discord-username

`

module.exports = function help(message) {
  message.reply(helpContent)
}
