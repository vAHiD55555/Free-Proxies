function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.38.21:57114",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 206.123.156.179:10219",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 38.34.179.74:8449",
        "SOCKS 38.34.178.155:8448",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 38.34.179.52:8445",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 38.34.179.186:8444",
        "SOCKS 104.248.59.38:80",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 45.136.130.173:8447",
        "SOCKS 123.54.197.20:20511",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 13.229.107.106:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}