function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 134.122.21.142:33346",
        "SOCKS 109.122.197.81:10808",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 115.127.105.163:6699",
        "SOCKS 121.165.169.217:8050",
        "SOCKS 152.53.36.101:10927",
        "SOCKS 54.37.72.89:80",
        "SOCKS 152.53.36.101:31557",
        "SOCKS 171.238.88.27:1046",
        "SOCKS 152.53.36.101:20671",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 72.10.160.172:5361",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 152.53.36.101:21749",
        "SOCKS 117.74.65.207:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}