function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.210.39.153:8561",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 114.80.37.199:3081",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 125.77.135.240:80",
        "SOCKS 49.156.44.117:8080",
        "SOCKS 38.194.246.34:999",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 160.25.48.33:9090",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 222.129.33.141:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}