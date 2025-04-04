// DOM элементы
const extensionToggle = document.getElementById('extension-toggle');
const blocklistItems = document.getElementById('blocklist-items');
const newSiteInput = document.getElementById('new-site');
const addSiteBtn = document.getElementById('add-site-btn');

// Инициализация состояния
document.addEventListener('DOMContentLoaded', async () => {
  const { isEnabled, blocklist } = await chrome.storage.local.get(['isEnabled', 'blocklist']);

  // Устанавливаем состояние переключателя
  extensionToggle.checked = isEnabled;

  // Отображаем список сайтов
  renderBlocklist(blocklist);
});

// Обработчик переключения расширения
extensionToggle.addEventListener('change', async (e) => {
  const isEnabled = e.target.checked;
  await chrome.storage.local.set({ isEnabled });

  // Обновляем состояние во всех активных вкладках
  const tabs = await chrome.tabs.query({ active: true });
  for (const tab of tabs) {
    chrome.tabs.sendMessage(tab.id, { type: 'toggle', isEnabled });
  }
});

// Обработчик добавления нового сайта
addSiteBtn.addEventListener('click', async () => {
  const site = newSiteInput.value.trim();
  if (!site) return;

  const { blocklist } = await chrome.storage.local.get(['blocklist']);
  if (!blocklist.includes(site)) {
    const newBlocklist = [...blocklist, site];
    await chrome.storage.local.set({ blocklist: newBlocklist });
    renderBlocklist(newBlocklist);
    newSiteInput.value = '';
  }
});

// Обработчик удаления сайта
blocklistItems.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const site = e.target.dataset.site;
    const { blocklist } = await chrome.storage.local.get(['blocklist']);
    const newBlocklist = blocklist.filter(s => s !== site);
    await chrome.storage.local.set({ blocklist: newBlocklist });
    renderBlocklist(newBlocklist);
  }
});

// Рендеринг списка сайтов
function renderBlocklist(blocklist) {
  blocklistItems.innerHTML = blocklist.map(site => `
    <div class="blocklist-item">
      <span>${site}</span>
      <button class="delete-btn" data-site="${site}">×</button>
    </div>
  `).join('');
}
