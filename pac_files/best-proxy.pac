function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.89.68.78:9050",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 183.232.157.102:1145",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 194.29.60.220:8080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 89.58.45.94:37599",
        "SOCKS 67.43.228.250:1861",
        "SOCKS 89.58.45.94:20952",
        "SOCKS 89.58.45.94:39155",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 8.221.138.111:31433",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 190.97.254.180:8080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 163.172.161.35:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}