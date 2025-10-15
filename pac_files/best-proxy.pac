function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 72.10.160.174:8097",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 198.54.124.88:8080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 94.131.82.71:3128",
        "SOCKS 13.115.193.75:1210",
        "SOCKS 59.153.16.167:10521",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 103.44.19.220:3127",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 98.190.102.40:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}