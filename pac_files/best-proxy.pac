function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.222.205:57226",
        "SOCKS 1.54.111.112:16000",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 35.161.94.92:1080",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 47.83.112.163:8888",
        "SOCKS 102.209.56.21:80",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 47.242.155.60:1111",
        "SOCKS 27.71.131.186:16000",
        "SOCKS 178.156.191.112:3128",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 27.79.244.75:16000",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 45.59.117.2:8080",
        "SOCKS 43.130.34.135:5432",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 103.109.57.42:3629",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}