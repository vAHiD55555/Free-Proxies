function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.172.165:8811",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 5.129.246.218:1081",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 20.78.213.56:80",
        "SOCKS 67.43.228.250:8539",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 162.144.74.156:3620",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}