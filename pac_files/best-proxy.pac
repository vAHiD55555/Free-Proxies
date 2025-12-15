function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.222.241.8:42378",
        "SOCKS 67.43.236.18:25943",
        "SOCKS 67.43.228.252:2357",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 103.151.30.133:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 196.204.83.237:1976",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 67.43.228.251:10865",
        "SOCKS 94.131.82.71:10800",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 115.127.181.62:2026",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 93.113.63.73:33100",
        "SOCKS 5.183.70.46:1080",
        "SOCKS 115.127.179.86:2026",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 37.228.137.183:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}