function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 78.13.231.158:3128",
        "SOCKS 159.65.230.91:20540",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 103.152.254.195:1080",
        "SOCKS 193.233.254.82:1080",
        "SOCKS 137.220.150.22:6005",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 169.57.157.148:80",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 94.100.18.111:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}