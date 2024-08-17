# Get shit done
No more procrastination.

## How it works?
The extension will "**block**" some specific sites by turning it to a black background with a random motivating quote.

![](/images/getshitdone.png)

## Features
- ~~Easily toggle on/off (when you really need to procrastinate), auto reload page after toggle.~~ (No more toggle extension by keyboard shortcut, **more strict**)
- Currently support sites: Facebook, Messenger, Instagram, TikTok (block forever).
- Can manage specific sites to block in [`manifest.json`](/manifest.json).
- Can block sites in a specific time range
   - `getshitdone.js`: all day except from 6 AM to 10 AM
   - `getshitdone-night.js`: from 10 PM today to 6 AM tommorow
   - `getshitdone-forever.js`: as the name implies, **block forever**
- Have multiple motivation quotes or you can create your own
- And more, if you know JavaScript, there more and more thing to do with this extension 😉

## How to use
1. Clone this repository/[download zip](https://github.com/ngntrgduc/get-shit-done/archive/refs/heads/master.zip) and extract to a folder on your local machine. 
```git
git clone https://github.com/ngntrgduc/get-shit-done.git
```

2. Load extension:
- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**  `Extensions` -> `Manage Extensions`. 

   Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.

---
- If you want to add/delete sites, go to the source code folder and add/delete sites you want in `manifest.json`, using [match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/).
- If you want to add/delete quotes, go to `getshitdone.js` and change it in `quotes` array.
- If you want to unblock site forever, just delete it in `manifest.json`, or you can turn off the extension ~~permanently~~ **temporarily**.

## Todo/Idea
- [ ] Redirect to specific website if blocking

## Coffee
If you like this project and want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc).
