function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 82.200.235.134:19170",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 103.126.87.181:7777",
        "SOCKS 185.13.230.210:8082",
        "SOCKS 116.98.187.95:1014",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 171.237.59.49:10001",
        "SOCKS 27.79.147.116:16000",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 171.228.154.82:4001",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 124.65.117.38:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}