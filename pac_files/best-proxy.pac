function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.35.110.67:10919",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 36.255.98.152:4070",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 36.255.98.161:4089",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 120.77.203.0:443",
        "SOCKS 170.168.64.136:1080",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 62.60.131.183:4190",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 95.111.226.235:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}