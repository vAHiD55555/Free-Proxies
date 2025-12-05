function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.203.139.209:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 38.12.32.174:10808",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 171.238.88.27:1072",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 3.24.178.81:80",
        "SOCKS 35.180.188.216:80",
        "SOCKS 195.175.31.222:8080",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 171.238.103.65:2070",
        "SOCKS 115.127.95.82:8080",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 45.32.94.217:8888",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 180.183.97.16:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}