function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 103.82.23.118:6188",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 72.10.160.91:9537",
        "SOCKS 8.213.222.247:8081",
        "SOCKS 47.236.98.2:1025",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 202.181.16.45:52929",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 103.73.161.148:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 157.180.121.252:42206",
        "SOCKS 176.9.238.173:47679",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}