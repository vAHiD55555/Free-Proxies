function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.250.54.7:9000",
        "SOCKS 45.81.131.137:8888",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 95.81.103.220:1080",
        "SOCKS 194.163.174.78:1089",
        "SOCKS 223.111.182.16:1011",
        "SOCKS 72.255.38.180:1080",
        "SOCKS 151.185.59.36:8080",
        "SOCKS 103.161.104.105:1080",
        "SOCKS 195.19.50.135:1080",
        "SOCKS 41.65.103.190:8080",
        "SOCKS 103.109.96.161:6321",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 45.74.31.42:30129",
        "SOCKS 45.74.31.42:9668",
        "SOCKS 45.74.31.30:36287",
        "SOCKS 45.74.31.30:39055",
        "SOCKS 15.235.21.254:8080",
        "SOCKS 4.241.6.169:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}