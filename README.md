![](./assets/promo/Shorts%20Deflector%20Promo%20Tile%201400%20560.png)

# Introduction

Why does clicking on a YouTube Short on a desktop bring up the mobile-optimized interface with no video scrubbing, harder to access comments, less accessible view count, and an overall worse experience than the normal viewer?

Shorts Deflector is an extension that allows you to automatically OR manually redirect YouTube Shorts to the normal desktop interface. This is accomplished by redirecting you from www.youtube.com/shorts/xyz to www.youtube.com/watch?v=xyz.

By using the convenient "Switch to Desktop" button, you can continue to watch YouTube Shorts normally while having a easy way to switch to the desktop format.

# Screenshots
<details>
  <summary><b>User Interface w/ Light Mode</b></summary>
  <img src="./assets/promo/Shorts%20Deflector%20User%20Interface%20Light.png">
</details>

<details>
  <summary><b>User Interface w/ Dark Mode</b></summary>
  <img src="./assets/promo/Shorts%20Deflector%20User%20Interface%20Dark.png">
</details>

# Home Page
[https://shortsdeflector.attituding.live/](https://attituding.github.io/Shorts-Deflector/)

# API Table
#### [Chromium](https://chrome.google.com/webstore/detail/shorts-deflector/gilmponliddppjjcfjmanmmfgiilikhg)
|                Method/API                |  Open in New Tab | Open in New Window | External Hyperlinks | Reload Page |    Left Click    |  Navigation Bar  |
|:----------------------------------------:|:----------------:|:------------------:|:-------------------:|:-----------:|:----------------:|:----------------:|
| Requests<br>chrome.declaritiveNetRequest |     Redirects    |      Redirects     |      Redirects      |  Redirects  | Doesn't Redirect | Doesn't Redirect |
| Page Updates<br>chrome.tabs              | Doesn't Redirect |  Doesn't Redirect  |   Doesn't Redirect  |  Redirects  |     Redirects    |     Redirects    |

#### [Firefox](https://addons.mozilla.org/en-CA/firefox/addon/shorts-deflector/)
|           Method/API           | Open in New Tab | Open in New Window | External Hyperlinks | Reload Page |    Left Click    |  Navigation Bar  |
|:------------------------------:|:---------------:|:------------------:|:-------------------:|:-----------:|:----------------:|:----------------:|
| Requests<br>browser.webRequest |    Redirects    |      Redirects     |      Redirects      |  Redirects  | Doesn't Redirect | Doesn't Redirect |
| Page Updates<br>browser.tabs   |     Redirects   |      Redirects      |       Redirect     |  Redirects  |     Redirects    |     Redirects    |