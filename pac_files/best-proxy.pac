function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.229.107.106:80",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 43.247.13.234:5678",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 89.110.80.195:10149",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 205.185.116.159:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}