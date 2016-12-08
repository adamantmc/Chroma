function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function highlightCode() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.innerHTML = 'hljs.initHighlighting()';

    head.appendChild(script);
}

var files = ["java", "sql", "c", "c++", "cxx", "cpp", "py", "sh", "pl", "js", "css"];

var xhr = new XMLHttpRequest();
xhr.open('GET', document.location, false);
xhr.send(null);

content_type = xhr.getResponseHeader("content-type");
pos = content_type.indexOf("html");

extension =
    return filename.split('.').pop();

if (files.indexOf(extension) >= 0) {

    chrome.storage.sync.get({
        theme: 'default',
    }, function(items) {
        var code = document.body.textContent;
        document.write("<pre><code>" + code + "</code></pre>");

        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/styles/' + items.theme + '.min.css';
        document.getElementsByTagName('head')[0].appendChild(link);

        loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/highlight.min.js', highlightCode);
    });

}
