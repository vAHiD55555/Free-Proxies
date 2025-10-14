function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.34.42:4145",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 171.228.119.30:1001",
        "SOCKS 193.43.149.72:8080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 103.227.187.13:6080",
        "SOCKS 47.79.91.116:1122",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 182.253.93.3:53281",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 181.224.226.154:8080",
        "SOCKS 211.175.140.8:8000",
        "SOCKS 113.128.33.60:53405",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}