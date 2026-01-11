function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 201.77.110.33:999",
        "SOCKS 190.242.157.215:8080",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 72.10.160.94:11791",
        "SOCKS 157.175.147.228:10011",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 31.56.78.170:8181",
        "SOCKS 190.7.138.78:8080",
        "SOCKS 61.49.87.3:80",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}