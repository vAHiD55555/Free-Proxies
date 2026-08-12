function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.76.215.92:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 104.200.135.46:4145",
        "SOCKS 177.52.25.34:1080",
        "SOCKS 129.153.194.16:1080",
        "SOCKS 195.245.238.86:1080",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 154.223.77.54:10002",
        "SOCKS 27.124.43.203:1080",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 45.179.145.12:6080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 8.213.128.6:9080",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 13.140.164.179:3504",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}