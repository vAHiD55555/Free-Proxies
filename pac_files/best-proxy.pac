function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.83.142:1088",
        "SOCKS 117.74.65.207:443",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 138.199.25.13:3908",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 115.127.178.42:2589",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 185.125.23.109:8899",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 62.60.131.181:5091",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 51.15.240.207:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}