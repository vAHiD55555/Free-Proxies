function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.182.6:1080",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 212.220.113.31:1080",
        "SOCKS 5.141.29.96:1080",
        "SOCKS 212.48.134.145:1080",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 45.77.155.196:50000",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 195.19.48.214:1080",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 212.33.250.53:1080",
        "SOCKS 144.24.15.246:1080",
        "SOCKS 79.76.59.115:1080",
        "SOCKS 8.213.128.6:87",
        "SOCKS 221.10.57.128:5138",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 103.165.157.206:8088",
        "SOCKS 185.189.12.146:3128",
        "SOCKS 57.183.28.232:1080",
        "SOCKS 185.128.104.152:8443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}