// Инициализация состояния расширения при установке
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    isEnabled: true,
    blocklist: [
      "tiktok.com",
      "youtube.com/shorts",
      "instagram.com/reels",
      "twitter.com",
      "vk.com/video",
      "reddit.com"
    ]
  });
});

// Слушаем изменения в активной вкладке
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  checkAndBlock(tab.url, tab.id);
});

// Слушаем изменения URL в активной вкладке
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    checkAndBlock(changeInfo.url, tabId);
  }
});

// Проверяем URL на соответствие блоклисту
async function checkAndBlock(url, tabId) {
  const { isEnabled, blocklist } = await chrome.storage.local.get(['isEnabled', 'blocklist']);

  if (!isEnabled) return;

  const isBlocked = blocklist.some(domain => url.includes(domain));

  if (isBlocked) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  }
}
