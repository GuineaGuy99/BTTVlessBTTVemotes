/* BTTVless BTTVemotes by GuineaGuy99 v1.5 */
$.getJSON('https://api.betterttv.net/2/emotes',(e)=>{
	checkOnlyInstance();
	log('BTTVless BTTVemotes by GuineaGuy99 v1.5');
	
	var emotes = e.emotes;
	removeEmoteDuplicates(emotes);

	var	observer = new MutationObserver((mutations)=>{
			mutations.forEach((mutation)=>{
				var messageElement = mutation.addedNodes[0];
				if (messageElement == undefined) return false;
				if (messageElement.nodeType !== 1) return false;
				var messageTextElement = $(`#${messageElement.id} .message`);
				emotes.forEach((emote)=>{
					var regexp = new RegExp(escapeRegExp(emote.code), 'g'),
						newMessageHTML = messageTextElement.html().replace(regexp, `
							<span class="balloon-wrapper">
								<img class="emoticon" src="https://cdn.betterttv.net/emote/${emote.id}/1x" srcset="https://cdn.betterttv.net/emote/${emote.id}/1x" alt="${emote.code}">
								<div class="balloon balloon--tooltip balloon--up balloon--center mg-t-1">${emote.code}</div>
							</span>
						`);
					messageTextElement.html(newMessageHTML);
				});
			});
		});
	observer.observe($(".chat-lines")[0], { childList: true });

	function checkOnlyInstance(){
		if (window.BTTVlessBTTVemotes) throw new Error('BTTVless BTTVemotes by GuineaGuy99 is already running!');
		window.BTTVlessBTTVemotes = true;
	}
	function log(str){
		console.log(str);
		TMI._sessions[0]._rooms[Object.keys(TMI._sessions[0]._rooms)[0]]._showAdminMessage(str);
	}
	function removeEmoteDuplicates(emotes){
		var emotesSeen = {};
		for (var i=emotes.length-1;i>=0;i--){
			if (emotesSeen[emotes[i].code]) emotes.splice(i, 1);
			emotesSeen[emotes[i].code] = true;
		}
	}
	function escapeRegExp(str) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
});