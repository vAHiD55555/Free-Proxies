function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.71.134.202:16000",
        "SOCKS 58.187.70.96:16000",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 200.174.198.86:8888",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 20.13.34.208:8118",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 223.135.156.183:8080",
        "SOCKS 47.90.205.231:33333",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 113.120.61.189:43644",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}