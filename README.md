# 🔮 Discord Selfbot Demo

A simple experimental Discord selfbot project built to explore Discord's API and Node.js on Android.

> [!WARNING]
> Selfbots violate Discord's Terms of Service and may result in account termination. This project is for educational purposes only.

## Requirements

- [Termux](https://play.google.com/store/apps/details?id=com.termux)
- [Spck Editor](https://play.google.com/store/apps/details?id=io.spck.editor.node) or any code editor
- Node.js

## Setup

<br>

### 1. Download

Download the repository as a `.zip` file and extract it.

![Download-Repo](https://i.ibb.co/jbcvFjq/IMG-20240410-172700.jpg)

<br>

Move the project folder to your Android internal storage.

![Save-to-internal-storage](https://i.ibb.co/4dnBxVx/IMG-20240410-160830.jpg)

<br>

### 2. Configure

Open `src/index.js` in your code editor, edit the line `client.login('PUT_YOUR_TOKEN_HERE')` with your user token. 

<br>

> [!NOTE]
> To get your Discord User Token, follow this simple tutorial -
> Open Google Chrome. Go to **Bookmarks**. Save a new Bookmark named `Token` and put this code in the **URL**:  
> ```  
> javascript:(function () {    location.reload();    var i = document.createElement("iframe"); document.body.appendChild(i); prompt("Here is your token. Keep it secret", i.contentWindow.localStorage.token.replace(/"/g,""));})();  
> ```
> Once you've saved it, open [Discord](https://discord.com/app) on chrome. Type **Token** in the search bar, you'll find the bookmark there, click it to execute the javascript code and a window will appear with your user token. Copy that token and save it in clipboard.  

<br>

> [!CAUTION]
> Never share your Discord credentials or authentication tokens.

<br>

### 3. Install Node.js

Open Termux and run:

```bash
pkg install nodejs
```

Then allow storage access:

```bash
termux-setup-storage
```

<br>

### 4. Navigate to the project

```bash
cd storage/shared/Bot/src
```

![Termux-Path-Directory-Help](https://i.ibb.co/J7dNWP9/IMG-20240410-163123.jpg)

<br>

### 5. Install dependencies

```bash
npm install
```

### 6. Run

```bash
node index.js
```

The default prefix is `d!`.

## Credits

Built using [discord.js-selfbot-v13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13) by [aiko-chan-ai](https://github.com/aiko-chan-ai).

> This project is not affiliated with or endorsed by Discord.
