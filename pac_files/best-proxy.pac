function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.135.105.217:50504",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 36.255.98.175:9090",
        "SOCKS 62.60.131.183:8084",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 97.79.251.186:80",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 185.241.5.57:3128",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 203.189.152.30:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 124.248.184.247:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 202.62.52.206:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}