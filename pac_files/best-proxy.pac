function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.18:17781",
        "SOCKS 117.74.65.207:80",
        "SOCKS 47.86.41.142:1100",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 141.94.195.25:22563",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 114.80.36.176:3081",
        "SOCKS 37.221.193.221:20935",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 152.53.36.101:52639",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 121.165.169.133:8282",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}