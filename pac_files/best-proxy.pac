function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.228.212.223:29272",
        "SOCKS 103.133.68.43:8080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 47.82.78.254:1100",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 47.83.8.254:1122",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 177.11.67.163:8999",
        "SOCKS 198.54.124.88:8080",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 184.95.220.42:1080",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 72.10.160.91:2473",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}