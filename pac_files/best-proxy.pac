function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 150.242.218.137:1080",
        "SOCKS 160.250.54.8:9000",
        "SOCKS 72.56.73.224:80",
        "SOCKS 103.236.190.197:1080",
        "SOCKS 93.123.30.53:1080",
        "SOCKS 43.230.193.154:1080",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 34.87.80.221:30000",
        "SOCKS 45.179.145.12:6080",
        "SOCKS 118.145.141.251:44225",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 209.38.214.48:1080",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 77.90.8.154:9116",
        "SOCKS 118.145.141.251:44125",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 103.197.242.95:1080",
        "SOCKS 67.207.92.87:1088",
        "SOCKS 194.67.207.95:19080",
        "SOCKS 72.195.34.60:27391",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}