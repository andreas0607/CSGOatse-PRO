var s = document.createElement('script');
s.src = chrome.extension.getURL('injects/roulette.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
chrome.runtime.sendMessage({
      action : 'roulette'
});