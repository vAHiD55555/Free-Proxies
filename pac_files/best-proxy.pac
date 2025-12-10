function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 190.119.160.29:56160",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 5.183.70.46:1080",
        "SOCKS 157.66.81.111:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 45.122.123.29:8199",
        "SOCKS 152.53.171.242:17637",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 152.53.171.242:39585",
        "SOCKS 98.90.249.67:8080",
        "SOCKS 72.10.160.90:20231",
        "SOCKS 47.238.167.162:1100",
        "SOCKS 84.54.227.27:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 45.166.93.113:999",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 152.53.36.101:20041",
        "SOCKS 84.17.51.235:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}