function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.80.36.254:3081",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 91.84.99.28:80",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 51.250.108.153:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 8.217.34.2:1111",
        "SOCKS 185.93.89.176:4110",
        "SOCKS 27.79.154.94:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}