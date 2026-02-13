function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.214.94.28:3128",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 169.57.157.148:80",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 120.77.203.0:443",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 119.81.189.194:80",
        "SOCKS 47.252.11.233:14186",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 123.54.197.52:21600",
        "SOCKS 115.69.208.6:1080",
        "SOCKS 123.54.197.20:20084",
        "SOCKS 91.242.229.96:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 217.76.245.80:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}