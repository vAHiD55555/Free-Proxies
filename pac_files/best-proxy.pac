function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:41239",
        "SOCKS 152.53.36.101:38267",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 43.153.64.222:18302",
        "SOCKS 135.181.203.208:80",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 202.136.89.134:11311",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 163.61.134.145:8081",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 93.184.4.254:1080",
        "SOCKS 157.180.121.252:24886",
        "SOCKS 72.10.160.90:1237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}