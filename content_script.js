var msg = {
  target1: $('#cnblogs_post_body').text()
};
chrome.runtime.sendMessage(msg);