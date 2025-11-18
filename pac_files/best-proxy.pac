function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.227.225.157:3389",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 89.58.45.94:42687",
        "SOCKS 89.58.45.94:38871",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 89.58.45.94:45137",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 89.58.45.94:48673",
        "SOCKS 89.58.45.94:12496",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}