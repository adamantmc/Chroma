function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        theme: 'default',
    }, function(items) {
        document.getElementById('curr_theme').innerHTML = items.theme;
    });
}

function save_options() {
    var theme_chooser = document.getElementById('theme_chooser');
    var theme_str = theme_chooser.options[theme_chooser.selectedIndex].text;
    chrome.storage.sync.set({
        theme: theme_str,
    }, function() {
    });
    restore_options();
}

function onload() {
    document.getElementById("save").addEventListener("click", save_options);
    restore_options();
}

document.addEventListener('DOMContentLoaded', function() {
    onload();
});
