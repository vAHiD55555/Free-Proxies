function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:4508",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 45.74.31.42:4407",
        "SOCKS 45.74.31.42:7121",
        "SOCKS 118.145.141.251:44093",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 93.183.88.197:9052",
        "SOCKS 152.70.107.226:1080",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 118.145.141.251:44161",
        "SOCKS 103.197.243.244:1080",
        "SOCKS 194.163.174.78:1087",
        "SOCKS 45.74.31.42:5487",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 85.198.81.83:1080",
        "SOCKS 80.211.131.230:9050",
        "SOCKS 141.147.109.224:1080",
        "SOCKS 111.119.162.248:10950",
        "SOCKS 118.145.141.251:44168",
        "SOCKS 118.145.141.251:44011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}