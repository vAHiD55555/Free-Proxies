function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.248.191.117:1080",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 206.123.156.226:4809",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 198.23.189.151:8118",
        "SOCKS 218.80.112.210:7000",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 125.128.12.124:3128",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 117.1.48.242:20046",
        "SOCKS 38.60.209.216:20002",
        "SOCKS 154.64.235.206:58367",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 194.233.68.54:1088",
        "SOCKS 103.122.3.46:60000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}