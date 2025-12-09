function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.203.234:1080",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 3.11.74.154:8080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 219.99.198.4:8080",
        "SOCKS 43.208.240.77:12587",
        "SOCKS 120.77.203.0:443",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 185.123.143.251:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}