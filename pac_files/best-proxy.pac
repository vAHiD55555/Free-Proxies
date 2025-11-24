function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.80.1:9090",
        "SOCKS 159.89.13.83:8888",
        "SOCKS 35.183.64.191:29715",
        "SOCKS 15.160.151.84:27147",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 199.127.62.89:1084",
        "SOCKS 72.211.46.99:4145",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 51.15.133.214:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}