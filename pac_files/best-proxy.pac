function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:8822",
        "SOCKS 45.74.31.42:4004",
        "SOCKS 201.7.31.163:8080",
        "SOCKS 45.74.31.42:5119",
        "SOCKS 45.74.31.42:17282",
        "SOCKS 45.74.31.30:8594",
        "SOCKS 165.140.167.167:9050",
        "SOCKS 185.204.170.179:1148",
        "SOCKS 45.74.31.42:12723",
        "SOCKS 45.74.31.30:8116",
        "SOCKS 103.165.128.75:1080",
        "SOCKS 45.74.31.42:20487",
        "SOCKS 45.74.31.30:7982",
        "SOCKS 45.74.31.30:8697",
        "SOCKS 45.74.31.42:4863",
        "SOCKS 45.74.31.30:4105",
        "SOCKS 45.74.31.41:10407",
        "SOCKS 45.74.31.42:13018",
        "SOCKS 45.74.31.42:19015",
        "SOCKS 45.74.31.30:17477",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}