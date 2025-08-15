function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.47.126.220:8888",
        "SOCKS 103.131.19.44:8080",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 186.215.43.69:3128",
        "SOCKS 103.126.86.199:3127",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 46.161.194.93:8085",
        "SOCKS 122.2.79.75:8082",
        "SOCKS 27.147.140.129:58080",
        "SOCKS 20.54.244.246:3128",
        "SOCKS 187.125.52.250:8080",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 103.122.0.52:8181",
        "SOCKS 185.191.236.162:3128",
        "SOCKS 42.96.16.158:1311",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 185.236.182.114:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}