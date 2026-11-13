function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.4.79.158:1080",
        "SOCKS 45.77.235.30:1080",
        "SOCKS 81.162.123.152:10808",
        "SOCKS 43.165.135.162:60000",
        "SOCKS 119.63.130.153:1080",
        "SOCKS 98.159.107.16:1080",
        "SOCKS 43.230.193.154:1080",
        "SOCKS 45.74.31.40:7251",
        "SOCKS 145.220.227.196:3128",
        "SOCKS 84.52.227.36:9050",
        "SOCKS 171.233.87.227:5005",
        "SOCKS 69.174.54.81:15164",
        "SOCKS 69.174.54.54:12591",
        "SOCKS 58.187.44.103:1087",
        "SOCKS 16.5.7.5:1080",
        "SOCKS 112.118.58.33:5001",
        "SOCKS 45.159.189.203:1080",
        "SOCKS 43.245.226.70:1080",
        "SOCKS 78.29.53.117:1080",
        "SOCKS 138.2.12.69:21080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}