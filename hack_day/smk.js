window.addEventListener('DOMContentLoaded', e => {
    window.addEventListener('keydown', e => {
        if (e.keyCode === 116) {
            curWindow.reload()
        }
        if (e.keyCode === 123) {
            try {
                smk.remote.getCurrentWindow().toggleDevTools();
            } catch (e) {
                alert(e.message)
            }
        }
    }, true)
}, true)