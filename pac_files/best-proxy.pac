function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.78.67.134:8088",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 34.222.65.100:1976",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 185.93.89.165:10522",
        "SOCKS 47.236.164.244:1011",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 185.93.89.180:9990",
        "SOCKS 45.166.93.113:999",
        "SOCKS 40.172.232.213:8989",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}