function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.89.98.131:3128",
        "SOCKS 58.186.92.156:16000",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 103.249.200.152:60599",
        "SOCKS 152.32.68.171:65535",
        "SOCKS 206.189.140.195:3128",
        "SOCKS 27.79.199.43:16000",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 42.119.102.244:16000",
        "SOCKS 47.91.110.148:1000",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}