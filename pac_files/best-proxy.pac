function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.156.74.154:1111",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 171.238.66.124:1022",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 43.251.86.69:1080",
        "SOCKS 103.81.194.165:8080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 43.159.54.102:8888",
        "SOCKS 117.74.65.207:443",
        "SOCKS 47.90.205.231:33333",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 1.53.72.195:16000",
        "SOCKS 152.53.194.55:21609",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}