function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.89.28.226:12915",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 103.187.226.52:8082",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 36.64.214.203:6969",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 152.53.194.46:8065",
        "SOCKS 51.178.68.226:6042",
        "SOCKS 37.187.29.43:42450",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 24.173.217.114:55443",
        "SOCKS 116.107.173.169:10001",
        "SOCKS 209.14.98.6:8080",
        "SOCKS 91.84.99.28:80",
        "SOCKS 182.253.38.179:3128",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 49.254.107.191:22685",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}