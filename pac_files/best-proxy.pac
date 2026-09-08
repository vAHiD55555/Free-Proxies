function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.117.13.129:999",
        "SOCKS 87.249.237.90:1080",
        "SOCKS 65.20.109.90:1082",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 174.138.162.37:36341",
        "SOCKS 103.180.126.236:8080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 103.69.106.94:8181",
        "SOCKS 168.197.104.45:8080",
        "SOCKS 103.136.106.5:1081",
        "SOCKS 45.32.160.61:1088",
        "SOCKS 173.208.243.148:9050",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 85.202.86.224:1080",
        "SOCKS 103.231.236.133:8182",
        "SOCKS 45.74.31.30:34935",
        "SOCKS 47.250.155.254:8004",
        "SOCKS 45.194.41.73:8080",
        "SOCKS 167.86.79.35:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}