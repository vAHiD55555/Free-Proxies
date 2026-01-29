function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.152:8768",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 62.60.131.204:4179",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 62.60.131.179:10608",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 54.37.72.89:80",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 36.255.98.151:20986",
        "SOCKS 36.255.98.167:4045",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 62.60.131.203:4673",
        "SOCKS 61.130.151.230:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}