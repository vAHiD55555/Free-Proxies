function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.138.62.182:43715",
        "SOCKS 117.74.65.207:443",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 91.205.131.251:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 128.140.76.145:19633",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 213.178.39.170:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 38.253.88.242:999",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 203.25.208.163:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}