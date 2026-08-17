function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.136.106.5:1081",
        "SOCKS 84.8.248.36:3128",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 185.125.200.80:1090",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 212.227.186.120:5678",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 47.251.87.199:999",
        "SOCKS 91.226.172.214:1080",
        "SOCKS 85.209.132.156:8000",
        "SOCKS 66.59.197.63:4000",
        "SOCKS 47.251.87.199:5060",
        "SOCKS 130.49.187.61:1082",
        "SOCKS 65.108.203.35:18080",
        "SOCKS 91.107.122.209:1080",
        "SOCKS 159.69.21.0:9050",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 79.105.155.166:1080",
        "SOCKS 185.133.239.244:16299",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}