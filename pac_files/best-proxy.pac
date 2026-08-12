function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.73.251.19:1080",
        "SOCKS 193.30.123.61:9050",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 103.39.49.101:1082",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 23.94.123.223:1080",
        "SOCKS 188.131.155.235:1088",
        "SOCKS 85.122.114.135:10808",
        "SOCKS 165.232.49.16:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 194.163.174.78:1090",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 171.253.92.42:1111",
        "SOCKS 27.131.14.9:1088",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 61.9.32.30:58765",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}