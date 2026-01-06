function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 137.184.228.194:40886",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 185.238.72.222:53128",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 103.152.238.146:1080",
        "SOCKS 203.189.136.7:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 67.43.236.20:26001",
        "SOCKS 194.163.182.6:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}