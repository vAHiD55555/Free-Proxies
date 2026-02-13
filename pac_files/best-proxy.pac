function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.131:1020",
        "SOCKS 152.32.213.178:1080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 123.54.197.25:21728",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 123.54.197.53:23366",
        "SOCKS 123.54.197.53:22345",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 123.54.197.52:21419",
        "SOCKS 123.54.197.25:21731",
        "SOCKS 47.91.109.17:6969",
        "SOCKS 185.176.94.75:1080",
        "SOCKS 47.251.74.38:8080",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 123.54.197.25:20813",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}