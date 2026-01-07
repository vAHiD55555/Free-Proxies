function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.133.32.102:3128",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 38.156.14.34:999",
        "SOCKS 38.159.62.32:999",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 62.60.131.185:24085",
        "SOCKS 47.91.109.17:123",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 137.184.228.194:40886",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}