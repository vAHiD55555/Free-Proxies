function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 181.78.74.174:999",
        "SOCKS 109.230.92.50:3128",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 103.82.23.118:6260",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 103.176.96.178:1111",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 52.233.203.63:3128",
        "SOCKS 72.10.160.90:12297",
        "SOCKS 43.208.25.125:14",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}