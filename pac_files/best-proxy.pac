function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.98:5566",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 177.234.217.84:999",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 187.190.127.212:80",
        "SOCKS 47.91.121.127:50",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 39.105.27.30:3128",
        "SOCKS 179.96.28.58:80",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 128.140.76.145:22413",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 121.205.215.44:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}