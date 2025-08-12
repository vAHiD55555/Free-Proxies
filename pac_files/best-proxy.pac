function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.251:28401",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 123.16.15.41:1452",
        "SOCKS 34.215.51.159:1080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 103.81.194.120:8080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 38.194.253.228:999",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 47.83.234.100:1111",
        "SOCKS 115.72.41.61:10002",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}