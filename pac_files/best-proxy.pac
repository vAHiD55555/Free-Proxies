function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.218.99.137:3356",
        "SOCKS 72.10.160.172:5699",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 27.72.100.236:4996",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 67.43.228.254:28187",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 27.74.215.131:30245",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 200.174.198.158:8888",
        "SOCKS 173.249.48.227:3128",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 103.133.26.119:8080",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 31.193.193.69:1488",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 49.156.44.115:8080",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 72.10.164.178:2493",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}