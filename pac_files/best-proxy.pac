function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.220.149.222:80",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 49.151.185.52:8082",
        "SOCKS 45.78.192.15:3128",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 51.75.126.150:57328",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}