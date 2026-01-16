function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.2.26:1080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 47.119.22.156:8081",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 163.5.128.56:14270",
        "SOCKS 65.108.159.129:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}