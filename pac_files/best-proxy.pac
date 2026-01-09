function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.172.165:8811",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 58.147.190.5:8799",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 185.54.178.193:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 103.166.124.249:8199",
        "SOCKS 117.50.7.101:8000",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 202.62.62.51:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 67.43.236.20:17133",
        "SOCKS 102.219.231.22:8080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 115.127.106.226:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}