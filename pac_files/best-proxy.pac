function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.120.61.189:43644",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 185.93.89.144:9772",
        "SOCKS 162.223.89.83:1080",
        "SOCKS 185.93.89.145:9315",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 191.103.219.225:48612",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 185.93.89.145:8047",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 185.93.89.187:10586",
        "SOCKS 67.43.228.252:4419",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 185.93.89.182:8880",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}