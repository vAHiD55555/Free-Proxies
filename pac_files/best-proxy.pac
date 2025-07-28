function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:42824",
        "SOCKS 171.7.3.71:8080",
        "SOCKS 27.71.141.120:16000",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 115.72.8.31:10001",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 67.43.236.21:5423",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}