function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.206.68.241:1080",
        "SOCKS 207.148.71.11:1080",
        "SOCKS 8.219.229.53:84",
        "SOCKS 23.27.141.243:3080",
        "SOCKS 72.56.106.48:443",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 103.179.189.64:9191",
        "SOCKS 8.219.229.53:8081",
        "SOCKS 175.27.250.85:44166",
        "SOCKS 175.27.250.85:44171",
        "SOCKS 77.246.98.48:1080",
        "SOCKS 216.106.179.216:49168",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 175.27.250.85:44142",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 195.19.51.79:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}