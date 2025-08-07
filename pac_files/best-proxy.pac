function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 87.107.48.53:1080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 8.217.151.114:1111",
        "SOCKS 98.190.102.62:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}