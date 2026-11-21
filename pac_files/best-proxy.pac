function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 82.9.133.51:9150",
        "SOCKS 193.107.75.242:33500",
        "SOCKS 64.227.186.105:1080",
        "SOCKS 171.238.101.122:1116",
        "SOCKS 131.153.163.86:37600",
        "SOCKS 185.232.205.31:1080",
        "SOCKS 103.191.218.119:69",
        "SOCKS 8.215.12.103:8006",
        "SOCKS 31.76.46.224:1081",
        "SOCKS 43.163.208.61:1080",
        "SOCKS 120.133.82.62:44110",
        "SOCKS 195.133.47.73:1080",
        "SOCKS 195.133.83.147:1080",
        "SOCKS 69.174.54.212:14703",
        "SOCKS 161.97.119.1:8888",
        "SOCKS 34.139.66.173:40001",
        "SOCKS 27.74.14.42:5000",
        "SOCKS 3.23.54.126:10804",
        "SOCKS 47.238.130.212:8081",
        "SOCKS 180.149.44.118:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}