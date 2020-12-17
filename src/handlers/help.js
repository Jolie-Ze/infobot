const helpContent = `, welcome to the SourceCred Discord! 
I know bots aren’t advanced enough to have feelings (yet), but I’m still really glad you’re here. I’d love to give you some next steps to connect you with the community and to get you earning Cred! Here are some **commands** to get you started:
           
            - **!read** // docs curated by the community that provide insight on the project
                
            - **!listen** // voices from the community 
             
            - **!watch** //  videos to make your SourceCred diving easier 

            - **!cred** & *@[discord-userrname]* // it returns your cred balance from the ledger

> !cred @discord-username

`

module.exports = function help(message) {
  message.reply(helpContent)
}
