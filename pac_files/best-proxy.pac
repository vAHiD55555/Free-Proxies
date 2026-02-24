function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.124.53.25:7443",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 193.233.254.61:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 13.70.6.6:50161",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 14.56.118.164:3128",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 123.54.197.50:21190",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 18.141.177.23:80",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 147.45.141.187:50308",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}