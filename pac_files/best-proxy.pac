function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:43476",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 171.237.115.165:1003",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 141.94.195.25:25043",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 45.166.93.113:999",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 82.223.165.28:38245",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 43.159.54.102:8888",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 45.62.117.248:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}