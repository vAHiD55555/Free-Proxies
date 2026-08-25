function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.76.164.255:1085",
        "SOCKS 59.36.210.211:13552",
        "SOCKS 140.238.28.230:10808",
        "SOCKS 45.74.31.30:30514",
        "SOCKS 160.250.54.5:9000",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 103.174.122.83:3128",
        "SOCKS 193.233.86.198:1080",
        "SOCKS 43.153.84.220:9050",
        "SOCKS 129.153.71.186:80",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 138.124.10.104:443",
        "SOCKS 31.202.49.61:33761",
        "SOCKS 89.47.113.13:9150",
        "SOCKS 128.199.104.190:41354",
        "SOCKS 49.13.22.249:10808",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 45.74.31.30:4552",
        "SOCKS 137.184.58.163:9050",
        "SOCKS 43.252.107.217:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}