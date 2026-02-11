function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.214.62.25:6881",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 222.129.137.54:9000",
        "SOCKS 119.81.71.27:80",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 58.187.104.67:1080",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 91.199.45.79:1080",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 190.242.157.215:8080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 223.25.109.146:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}