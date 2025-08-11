function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 154.72.204.78:8080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 38.172.156.64:999",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 5.188.183.253:8080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 116.98.181.51:1009",
        "SOCKS 5.28.35.226:9812",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 34.215.51.159:1080",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 115.72.12.24:10003",
        "SOCKS 103.81.194.162:8080",
        "SOCKS 115.77.35.33:1001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}