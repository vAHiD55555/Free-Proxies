function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.38.217.179:29788",
        "SOCKS 93.123.118.15:1080",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 14.109.230.240:1080",
        "SOCKS 45.155.54.75:1080",
        "SOCKS 118.145.141.251:44073",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 91.107.188.68:1083",
        "SOCKS 34.69.61.247:80",
        "SOCKS 128.199.104.190:41354",
        "SOCKS 77.90.8.154:9083",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 45.74.31.30:8010",
        "SOCKS 152.70.237.238:3128",
        "SOCKS 47.57.242.244:5080",
        "SOCKS 93.93.207.219:8088",
        "SOCKS 45.74.31.30:4885",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 124.248.177.43:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}