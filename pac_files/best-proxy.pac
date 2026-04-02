function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.204:4802",
        "SOCKS 77.110.113.24:40000",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 37.59.112.197:80",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 103.208.102.2:8080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 38.145.208.242:8451",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 38.34.179.105:8449",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 206.123.156.187:11791",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 119.84.215.127:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}