function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.178.172.28:15294",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 47.250.11.111:8181",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 47.91.110.148:1000",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 27.79.237.228:16000",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 81.162.242.127:8021",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 47.91.121.127:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}