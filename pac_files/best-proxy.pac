function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.19:21085",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 103.109.96.86:21225",
        "SOCKS 62.60.131.203:27700",
        "SOCKS 123.16.15.41:1452",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 45.166.93.113:999",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}