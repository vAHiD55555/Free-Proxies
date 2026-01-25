function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.159.43:39019",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 36.255.98.167:6529",
        "SOCKS 36.255.98.160:4005",
        "SOCKS 36.255.98.163:4061",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 36.255.98.163:4165",
        "SOCKS 36.255.98.163:4149",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 77.221.141.244:21406",
        "SOCKS 36.255.98.161:4076",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 62.60.131.183:6214",
        "SOCKS 36.255.98.175:12299",
        "SOCKS 13.229.107.106:80",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}