function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:6475",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 116.111.99.220:10001",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 169.57.157.148:80",
        "SOCKS 91.107.154.88:443",
        "SOCKS 36.255.98.163:4145",
        "SOCKS 62.60.131.193:5123",
        "SOCKS 50.222.120.243:1080",
        "SOCKS 62.60.131.178:25837",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 62.60.131.180:27547",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 103.174.178.145:2005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}