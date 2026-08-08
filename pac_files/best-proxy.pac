function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.50.52:1080",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 103.156.86.197:8199",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 165.245.187.193:3128",
        "SOCKS 199.247.29.193:50000",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 102.0.14.42:1080",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 195.26.254.173:8915",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 3.76.208.202:10006",
        "SOCKS 140.238.241.74:1080",
        "SOCKS 216.106.179.216:49231",
        "SOCKS 13.140.164.179:3559",
        "SOCKS 107.150.1.250:9050",
        "SOCKS 47.82.65.128:1011",
        "SOCKS 199.247.18.115:9050",
        "SOCKS 8.220.205.172:6379",
        "SOCKS 103.172.121.52:47821",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}