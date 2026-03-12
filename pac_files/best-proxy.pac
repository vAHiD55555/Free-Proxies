function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.51:20910",
        "SOCKS 123.54.197.20:21554",
        "SOCKS 120.77.203.0:443",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 77.50.235.130:1080",
        "SOCKS 123.54.197.20:20667",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 47.238.134.126:8081",
        "SOCKS 123.54.197.53:21221",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 206.123.156.222:4569",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 123.54.197.20:22312",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 47.238.79.105:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 138.2.47.198:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}