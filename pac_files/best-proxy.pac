function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:4944",
        "SOCKS 43.209.173.229:27145",
        "SOCKS 45.74.31.30:33110",
        "SOCKS 184.57.87.36:80",
        "SOCKS 45.74.31.42:11974",
        "SOCKS 130.255.94.32:5080",
        "SOCKS 45.194.33.12:30002",
        "SOCKS 47.103.30.64:8080",
        "SOCKS 45.74.31.42:5734",
        "SOCKS 45.74.31.42:4033",
        "SOCKS 45.74.31.30:5166",
        "SOCKS 213.148.6.12:7777",
        "SOCKS 158.94.208.76:9050",
        "SOCKS 62.182.138.3:2080",
        "SOCKS 115.127.53.114:1080",
        "SOCKS 150.129.115.253:6667",
        "SOCKS 45.74.31.30:36212",
        "SOCKS 45.74.31.30:40298",
        "SOCKS 91.107.243.254:9092",
        "SOCKS 37.204.230.182:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}