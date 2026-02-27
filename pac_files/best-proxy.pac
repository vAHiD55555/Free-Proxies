function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 169.57.157.146:8123",
        "SOCKS 159.65.230.91:20927",
        "SOCKS 13.70.6.6:50161",
        "SOCKS 159.65.230.91:20819",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 42.115.72.172:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 159.65.230.91:20167",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 159.65.230.91:20747",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 38.76.200.182:58367",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 159.65.230.91:20271",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 185.189.112.133:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}