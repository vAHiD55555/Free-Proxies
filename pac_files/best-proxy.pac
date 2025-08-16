function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:46206",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 49.254.107.184:28766",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 27.79.128.211:16000",
        "SOCKS 27.79.240.48:16000",
        "SOCKS 171.231.175.71:7010",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 27.71.140.43:16000",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 8.213.129.15:5001",
        "SOCKS 173.209.63.67:8226",
        "SOCKS 27.79.220.146:16000",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 14.239.189.220:8080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 139.59.1.14:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}