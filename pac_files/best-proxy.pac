function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.81.189.194:8123",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 36.94.232.177:3113",
        "SOCKS 159.8.114.37:80",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 103.175.202.178:8090",
        "SOCKS 160.20.55.235:8080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 147.75.34.105:443",
        "SOCKS 47.83.236.189:1011",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 176.108.146.180:1080",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 104.244.78.150:5555",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 20.78.118.91:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}