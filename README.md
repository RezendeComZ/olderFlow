# ![OlderFlow logo](https://raw.githubusercontent.com/rezendecomz/olderFlow/main/icon/OlderFlow_readmeLogo.png) OlderFlow

A WebExtension for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/olderflow/) and [Google Chrome](https://chrome.google.com/webstore/detail/olderflow/eefooohfadkajapciekcgiapibdlicld) (coming soon for Opera, Edge), made to facilitate the search process on Q&A sites using colors, copy buttons and shortcuts. For now is compatible with Stackoverflow and Stackexchange. Search compatible with Google and DuckDuckGo.

Main features:

- It processes time and transforms it into colors, red is older and green is newer. It also creates a direct link to the best answer.
  ![printScreen](https://github.com/rezendecomz/olderFlow/raw/main/screenshots/directLink.png "printScreen")

- It shows emojis in the browser tabs, 💾 is older, 💿 is old, ✳️ is new and 🔥 is the newest.
  ![printScreen](https://github.com/rezendecomz/olderFlow/raw/main/screenshots/emojisOnTabs.png "printScreen")

- Highlights the results of the Stack Overflow and Stack Exchange searches and creates a direct link to the best answer (support for Google and DuckDuckGo).
  ![printScreen](https://raw.githubusercontent.com/rezendecomz/olderFlow/main/screenshots/search.png "printScreen")

- Copy the question and answer codes to the clipboard. Experimental: directly copy the results of DuckDuckGo.
  ![printScreen](https://raw.githubusercontent.com/rezendecomz/olderFlow/main/screenshots/copyFunction.png "printScreen")

TODO:

- Create an option to not use "warning function"
- Show on Google/Duck/Bing/Yahoo a color tag 'Asked about two years ago'(based on: https://stackoverflow.com/questions/:id)
- Create an option to customize title
- Customize emojis
- Customize color/time/emoji

Download:
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/olderflow/)
- [Google Chrome](https://chrome.google.com/webstore/detail/olderflow/eefooohfadkajapciekcgiapibdlicld)

Logo created using mixed arts from [Kiranshastry](https://www.flaticon.com/authors/kiranshastry)

Known issues:
- DuckDuckGo: 'Copy code' function has a bug with some tags, copying more than necessary, but work.
- Some direct links to answers texts without numbers like "yesterday" cannot be colored.
