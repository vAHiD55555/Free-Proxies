function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.22.240.121:3128",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 5.190.36.4:3128",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 1.55.60.120:16000",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 108.181.215.187:8888",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 67.43.228.252:21045",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}