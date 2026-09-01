function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.245.165.201:1080",
        "SOCKS 151.243.153.157:8118",
        "SOCKS 45.74.31.42:13093",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 45.74.31.30:12551",
        "SOCKS 150.241.91.238:7777",
        "SOCKS 202.78.167.58:9050",
        "SOCKS 37.27.245.106:1080",
        "SOCKS 77.238.237.253:41414",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 5.75.133.113:10811",
        "SOCKS 91.103.120.49:443",
        "SOCKS 45.74.31.42:13227",
        "SOCKS 193.24.222.150:33500",
        "SOCKS 45.74.31.42:8641",
        "SOCKS 194.87.147.132:1080",
        "SOCKS 161.35.90.93:1082",
        "SOCKS 43.230.192.242:1080",
        "SOCKS 45.74.31.42:20358",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}