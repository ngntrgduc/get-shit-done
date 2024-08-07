# Get shit done
No more procrastination.

## Why?
Because procrastination.

## How it works?
When toggle, this extension will "block" some specific sites by turning it to a black background with a random motivating quote.

![image](https://github.com/ngntrgduc/get-shit-done/assets/47920109/798e2248-9fd7-4427-8dac-4123c0c72f79)

## Features
- No more procrastination, **time-saving**.
- Easily toggle on/off (when you really need to procrastinate), auto reload page after toggle.
- Can block sites **forever** (cannot toggle on/off).
- Currently support sites: Facebook, Messenger, Instagram, Discord, TikTok (block forever).
- Can manage specific sites to block in [`manifest.json`](/manifest.json).
- Can block site in a specific time range (default: 10:00 PM - 6:00 AM).
- Have multiple motivation quotes or you can create your own.

## How to use
1. Clone this repository/[download zip](https://github.com/ngntrgduc/get-shit-done/archive/refs/heads/master.zip) and extract to a folder on your local machine. 
```git
git clone https://github.com/ngntrgduc/get-shit-done.git
```

2. Load extension:
- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**  `Extensions` -> `Manage Extensions`. \
Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.

3. - Make the extension more visible by `Pin` (Chrome) / `Show in toolbar` (Edge). 
   - Create a shortcut to toggle the extension easier (default is `Alt + G`).
   - If you want to add/delete sites, go to the source code folder and add/delete sites you want in `manifest.json`, using [match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/).
   - If you want to add/delete quotes, go to `getshitdone.js` and change it in `quotes` array.
   - If you want to unblock site forever (ex. Facebook), just delete it in `manifest.json`, or you can turn off the extension temporarily.
   - If you want to change / remove block time range, go to `getshitdone.js`.
4. No more procrastination ✨.

## Coffee
If you like this project and want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc).
