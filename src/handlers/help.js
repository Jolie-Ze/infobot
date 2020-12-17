const helpContent = `
/* Available AracredBot commands:

 - !ac addaddress <address> → Links your Discord account with the Ethereum address <address>. Example:

> !ac addaddress 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B

- !ac help → This command.

- !ac signup <platform1/username> <platform2/username>... → Links your Discord account with platforms <platform1/username> <platform2/username>... to be able to gain cred. Supported platforms: github, discourse. NOTE: Discord will be linked to your username automatically.

> !ac signup github/foo discourse/foo */

Welcome to the SourceCred Discord! I know bots aren’t advanced enough to have feelings (yet), but I’m still really glad you’re here. I’d love to give you some next steps to connect you with the community and to get you earning Cred! Here are some **commands** to get you started:
           
            - **!read** // docs curated by the community that provide insight on the project
                
            - **!listen** // voices from the community 
             
            - **!watch** //  videos that make additional entry to your diving in SourceCred

            - **!cred** & *[discord-userrname]* // it returns your cred balance from the ledger

> !cred @discord-username

`

module.exports = function help(message) {
  message.reply(helpContent)
}
