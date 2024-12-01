# Get shit done
This browser extension will "**block**" some specific sites by turning them to a black background with 👁️ (Yes, I am watching you 🙂).

## Features
- Currently support sites: Facebook, Messenger, Instagram, TikTok (block forever, can be unblocked by turning off the extension ~~permanently~~ **temporarily**.)
- Can manage specific sites to block in `manifest.json`, using [match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)
- Can block sites in a specific time range, or block forever
   - `getshitdone.js`: general case
   - `getshitdone-night.js`: from 10 PM today to 6 AM tomorrow
   - `getshitdone-except-morning.js`: all day except from 6 to 10 AM
   - `getshitdone-forever.js`: as the name implies, **block forever**
- Can display your favorite motivational quotes
- And more, if you know JavaScript, there are lots of things you can do with this extension 😉

## Todo/Idea
- [ ] Redirect to specific website if blocking
- [ ] Only allow limit time for each site, using cookie to store time spent

## How to use
1. Clone this repository/[download zip](https://github.com/ngntrgduc/get-shit-done/archive/refs/heads/master.zip) and extract to a folder on your local machine. 
```git
git clone --depth 1 https://github.com/ngntrgduc/get-shit-done.git
```

2. Load extension:
- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**  `Extensions` -> `Manage Extensions`. 

 Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.


## Contributing
If you found a bug or want to contribute, feel free to open a issue/pull requests. All contributions are welcomed.

## Coffee
If you like this project and want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc).
