window.cbExt = {
    addBackdropClass: function(backdropClass) {
        const classes = document.getElementById('backdrop').classList;

        if (!classes.contains(backdropClass)) {
            classes.add(backdropClass);
        }
    },
    removeBackdropClass: function(backdropClass) {
        const classes = document.getElementById('backdrop').classList;

        if (classes.contains(backdropClass)) {
            classes.remove(backdropClass);
        }
    }
};
