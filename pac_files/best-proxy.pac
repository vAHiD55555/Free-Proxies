function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.142.3.145:3306",
        "SOCKS 45.61.188.134:44499",
        "SOCKS 61.118.38.234:60808",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 137.184.239.147:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 51.250.0.71:1080",
        "SOCKS 8.212.151.166:8008",
        "SOCKS 221.176.85.238:1080",
        "SOCKS 8.220.204.92:81",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 139.180.142.71:10811",
        "SOCKS 178.248.3.76:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 45.13.237.201:3128",
        "SOCKS 194.190.169.197:3701",
        "SOCKS 194.164.125.208:57422",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}