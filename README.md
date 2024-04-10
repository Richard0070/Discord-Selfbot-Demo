# 🔮 Discord Selfbot Demo (For Mobile Users)

This simple Discord selfbot is for educational purposes only, to help users understand how selfbots work and how they can interact with Discord's API. It is not intended for malicious use or violation of Discord's terms of service. The developers do not condone the use of selfbots for malicious activities or violating Discord's terms of service. Use responsibly and at your own risk.


## So, let's get started!

**Apps Required:** [Termux](https://play.google.com/store/apps/details?id=com.termux), [Spck Code Editor](https://play.google.com/store/apps/details?id=io.spck.editor.node) (or any other code editor)

***We'll also require a discord user token for this to work. Here's a short tutorial on how to get your token on mobile —***

a. Open Google Chrome. Go to **Bookmarks**. Save a new Bookmark named `Token` and put this code in the **URL**:

```
javascript:(function () {    location.reload();    var i = document.createElement("iframe");    document.body.appendChild(i);    prompt("Here is your token. Keep it secret", i.contentWindow.localStorage.token.replace(/"/g,""));})();
```

b. Once you've saved it, open [Discord](https://discord.com/app) on chrome. Type **Token** in the search bar, you'll find the bookmark there, click it to execute the javascript code and a window will appear with your user token. Copy that token and save it in clipboard.

⚠️ **Never share your Discord token with anyone. It bypasses 2FA and your account can be compromised.**

c. Once we have obtained our token, we'll proceed to the next section.

<hr>

## How to use this selfbot?

1. Download this repository in `.zip` format.

![Download-Repo](https://i.ibb.co/jbcvFjq/IMG-20240410-172700.jpg)

2. Extract the zip file, you'll find a folder named `Discord-SelfBot-Demo`. Open it and you'll find another folder with the same name. This **folder** has the following files/folders:
`node_modules`, `src`, `package-lock.json` and `package.json`. Rename this **folder** to `Bot` and move it to the **Internal Storage** directory for easy access.

![Save-to-internal-storage](https://i.ibb.co/4dnBxVx/IMG-20240410-160830.jpg)

3. Open the file **index.js** (`Bot/src/index.js`) using the code editor, edit the line `client.login('PUT_YOUR_TOKEN_HERE')` and add your user token.

4. Save this new `index.js` file to `Bot/src/`.

5. Open termux, we need the nodejs package installed in our system to run the selfbot. Run these commands step by step:

```
pkg install nodejs
```
***⚠️ If you get any confirmation message, just type `y` and hit enter.***

Run the following command if nodejs isn't working properly.

```
apt update && apt upgrade -y
```

Now,
```
termux-setup-storage
```
```
cd path/to/index.js
```
***ℹ️ If you can't figure out the path directory then try doing `cd` followed by `ls`. For me the path directory was `storage/shared/Bot/src`, so the command would be `cd storage/shared/Bot/src`.***
![Path-Directory-Help]()

![Termux-Path-Directory-Help](https://i.ibb.co/J7dNWP9/IMG-20240410-163123.jpg)

Now start your selfbot,
```
node index.js
```
6. Once you have successfully logged into your account, you will see this message in the terminal: "Logged in as {username}".


**😝 Please do the steps carefully. You can also change your selfbot's prefix by editing the `index.js` file. The default prefix is `d!`. For more info about the commands, run `d!help`.**

<hr>

## Credits

This project utilizes the [discord.js-selfbot-v13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13) package developed by [aiko-chan-ai](https://github.com/aiko-chan-ai), which provides the foundation for the selfbot functionality. Huge thanks to them for their contribution to the Discord community.



♥️ **STAR THIS REPOSITORY PLZ!!!**
