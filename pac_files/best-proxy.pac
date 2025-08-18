function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.80.36.254:3081",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 89.19.175.122:8008",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 113.162.238.200:20399",
        "SOCKS 154.236.177.102:1977",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 23.171.9.140:8888",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 27.79.192.226:16000",
        "SOCKS 143.107.205.72:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}