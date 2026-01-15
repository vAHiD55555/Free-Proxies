function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.172.131.178:16379",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 184.170.251.30:11288",
        "SOCKS 89.22.237.70:80",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 40.177.106.156:8080",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 93.91.162.222:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 35.180.188.216:80",
        "SOCKS 13.158.188.161:3128",
        "SOCKS 179.96.28.58:80",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 194.163.182.6:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}