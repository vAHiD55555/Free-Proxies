function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.40:4145",
        "SOCKS 152.53.36.101:35657",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 72.10.160.91:9537",
        "SOCKS 103.54.217.82:8199",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 118.137.63.17:8080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 152.53.36.101:45775",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 152.53.36.101:20299",
        "SOCKS 171.238.103.65:1088",
        "SOCKS 103.180.126.42:8181",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 125.227.225.157:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}