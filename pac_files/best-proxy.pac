function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.235.155.77:47287",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 8.211.194.78:80",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 176.124.219.49:3128",
        "SOCKS 170.64.233.94:8080",
        "SOCKS 3.232.220.76:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}