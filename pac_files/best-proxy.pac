function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.43.165.140:10802",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 185.121.13.73:3128",
        "SOCKS 65.20.105.241:10001",
        "SOCKS 46.37.123.166:1081",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 77.239.108.222:11064",
        "SOCKS 217.77.223.2:9050",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 116.204.231.88:1080",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 92.124.152.191:1080",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 203.189.135.140:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 147.45.60.136:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}