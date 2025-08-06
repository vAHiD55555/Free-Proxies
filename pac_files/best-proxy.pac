function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.20:6231",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 42.96.16.158:1311",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 147.75.34.105:443",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 103.141.106.142:6969",
        "SOCKS 114.9.24.2:1452",
        "SOCKS 47.242.155.60:1111",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 83.222.184.87:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}