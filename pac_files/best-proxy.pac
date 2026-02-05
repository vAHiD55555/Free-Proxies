function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.128.167.129:1080",
        "SOCKS 146.235.19.84:10808",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 192.111.135.21:4145",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 213.35.110.67:10850",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}