function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.164.226.253:4216",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 27.71.132.134:16000",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 27.79.226.61:16000",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 135.181.203.208:80",
        "SOCKS 27.79.197.95:16000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}