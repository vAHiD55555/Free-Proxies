function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.36.104.46:10808",
        "SOCKS 8.211.195.139:3333",
        "SOCKS 49.13.22.249:10801",
        "SOCKS 93.87.38.20:1090",
        "SOCKS 51.89.253.203:10808",
        "SOCKS 77.37.209.86:1081",
        "SOCKS 45.74.31.30:4408",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 8.211.194.78:8999",
        "SOCKS 65.109.196.122:2091",
        "SOCKS 111.119.162.248:10919",
        "SOCKS 45.74.31.30:14682",
        "SOCKS 45.74.31.30:10531",
        "SOCKS 125.24.156.113:7080",
        "SOCKS 159.69.21.0:9050",
        "SOCKS 65.109.219.215:9094",
        "SOCKS 47.251.87.199:20125",
        "SOCKS 5.75.133.113:10809",
        "SOCKS 116.103.251.241:1080",
        "SOCKS 45.74.31.30:10536",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}