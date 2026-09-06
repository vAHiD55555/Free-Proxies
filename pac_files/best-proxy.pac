function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.40.190.74:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 8.215.15.163:8888",
        "SOCKS 185.197.74.126:2080",
        "SOCKS 45.194.41.51:8080",
        "SOCKS 217.77.2.242:3128",
        "SOCKS 150.241.70.126:1080",
        "SOCKS 82.22.174.113:1080",
        "SOCKS 8.211.51.115:5060",
        "SOCKS 8.215.15.163:111",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 118.179.199.74:9090",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 174.138.162.37:35820",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 103.141.174.38:11411",
        "SOCKS 193.233.199.21:1080",
        "SOCKS 118.179.93.216:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}