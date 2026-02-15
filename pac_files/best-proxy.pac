function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.216.224.108:8192",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 18.192.100.176:8080",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 45.12.151.226:2828",
        "SOCKS 67.43.236.18:11851",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 178.253.22.108:65431",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 123.54.197.50:21632",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 8.211.200.183:8081",
        "SOCKS 115.69.208.6:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 81.12.119.171:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}