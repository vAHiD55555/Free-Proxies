function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:46206",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 42.118.202.2:16000",
        "SOCKS 103.82.22.129:10001",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 185.13.230.212:8082",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 47.245.117.43:80",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 124.115.21.11:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}