function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.28.121.58:80",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 14.56.177.118:3128",
        "SOCKS 52.72.76.228:80",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 154.64.235.206:58367",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}