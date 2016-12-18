# BTTVless BTTVemotes
Ever wanted to have Better Twitch TV (BTTV) emotes on Twitch without the bloat of BTTV? Well now you can use this simple script to enable BTTV emotes on vanilla Twitch!
## Script
Simply paste the following code into your javascript console while viewing a stream in order to initiate BTTVless BTTVemotes!
```javascript
/* BTTVless BTTVemotes by GuineaGuy99 */
!function(){var e=document.createElement("script");e.src="https://cdn.rawgit.com/GuineaGuy99/BTTVlessBTTVemotes/master/BTTVlessBTTVemotes.min.js",e.onerror=function(){throw new Error("could not load BTTVless BTTVemotes by GuineaGuy99, please try again later.")},document.body.appendChild(e)}();
```
## Bookmarklet
Prefer the convenience of a bookmarklet? Here is the above code in bookmarklet form!
```javascript
javascript:(function()%7B%2F*%20BTTVless%20BTTVemotes%20by%20GuineaGuy99%20*%2F!function()%7Bvar%20e%3Ddocument.createElement(%22script%22)%3Be.src%3D%22https%3A%2F%2Fcdn.rawgit.com%2FGuineaGuy99%2FBTTVlessBTTVemotes%2Fmaster%2FBTTVlessBTTVemotes.min.js%22%2Ce.type%3D%22text%2Fjavascript%22%2Ce.onerror%3Dfunction()%7Bthrow%20newError(%22could%20not%20load%20BTTVless%20BTTVemotes%20by%20GuineaGuy99%2C%20please%20try%20again%20later.%22)%7D%2Cdocument.body.appendChild(e)%7D()%7D)()
```
if you don't know what a bookmarklet is, here is an explanation on what a bookmarklet is and instructions on how to create one!
 
Explanation: https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks

Instructions: https://mreidsma.github.io/bookmarklets/installing.html
## Help
if you experience any bugs or issues, please send me a tweet at @GuineaGuy99
## Changelog
- v1.5
	- fixed an issue with duplicate emotes showing.
- v1.4 
	- Fixed a bug where the emotes would not show. (special thanks to Agnostics).

- v1.3
	- A message is now displayed in Twitch chat when the script initializes.
	- Will now abort initialization if an instance is already running.

- v1.2 
	- Fixed a bug with fast moving chats when multiple messages are received at the same time. Only the first message in a bunch 	   actually showed emotes.
 
- v1.1
	- Twitch changed some stuff which broke 1.0.
 
- v1.0
	- Release!