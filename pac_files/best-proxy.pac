function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.71.139.254:16000",
        "SOCKS 34.101.127.208:3128",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 27.79.186.173:16000",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 154.194.35.243:7124",
        "SOCKS 27.79.255.99:16000",
        "SOCKS 46.229.66.241:1080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 8.211.194.78:1081",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 27.79.167.97:16000",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}