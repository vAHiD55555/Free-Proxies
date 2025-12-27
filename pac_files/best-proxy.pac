function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.71.131.131:1080",
        "SOCKS 36.255.98.177:20000",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 47.105.98.23:3128",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 3.85.42.63:3128",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 36.93.8.34:11000",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 203.189.137.122:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 51.158.124.167:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}