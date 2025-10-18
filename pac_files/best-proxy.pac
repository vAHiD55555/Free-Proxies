function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.126.51:5556",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 185.93.89.180:9991",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 185.93.89.182:9999",
        "SOCKS 185.93.89.182:12359",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 138.2.64.185:8118",
        "SOCKS 45.225.181.254:8085",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 89.58.45.94:32241",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}