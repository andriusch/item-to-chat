Hooks.on('getItemSheetPF2eHeaderButtons', (sheet, buttons) => {
    buttons.unshift({
        label: "To Chat",
        class: "to-chat",
        icon: "fas fa-comment-alt",
        onclick: async () => {
            if (sheet.document.actor) {
                await sheet.document.toChat()
            } else {
                const actor = canvas.tokens.controlled[0]?.actor ?? game.user?.character;
                if (actor) {
                    await new sheet.document.constructor(sheet.document.toJSON(), { parent: actor }).toChat();
                } else {
                    ui.notifications.error(`You must select a token`);
                }
            }
        },
    });
})
