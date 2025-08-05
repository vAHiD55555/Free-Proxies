function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 117.74.65.207:80",
        "SOCKS 192.177.33.71:8000",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 8.219.236.9:1111",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 103.93.93.66:8080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 72.10.160.91:18749",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}