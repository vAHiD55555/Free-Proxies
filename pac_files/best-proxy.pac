function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.224.56.210:10013",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 144.31.27.165:1080",
        "SOCKS 45.88.0.113:3128",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 185.21.141.238:1080",
        "SOCKS 176.65.128.180:3128",
        "SOCKS 213.35.110.67:10888",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 13.229.47.109:80",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 110.235.255.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}