function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 66.42.59.155:443",
        "SOCKS 206.123.156.204:4973",
        "SOCKS 172.86.126.35:443",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 38.145.208.245:8443",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 206.123.156.184:5810",
        "SOCKS 43.167.227.161:1080",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 27.147.137.234:9108",
        "SOCKS 45.207.200.120:1080",
        "SOCKS 206.123.156.181:4392",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 51.158.68.68:8811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}