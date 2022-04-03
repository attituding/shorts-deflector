"use strict";
(async () => {
    const newPagesKey = 'new-pages';
    const directKey = 'direct';
    const newPagesButton = document.getElementById(newPagesKey);
    const directButton = document.getElementById(directKey);
    const enabledObject = await browser.storage.sync.get([newPagesKey]);
    const directObject = await browser.storage.sync.get([directKey]);
    newPagesButton.checked = enabledObject[newPagesKey];
    directButton.checked = directObject[directKey];
    newPagesButton.addEventListener('click', async () => {
        await browser.storage.sync.set({
            [newPagesKey]: newPagesButton.checked,
        });
    });
    directButton.addEventListener('click', async () => {
        await browser.storage.sync.set({
            [directKey]: directButton.checked,
        });
    });
})();
