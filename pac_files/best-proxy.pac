function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.33.250.53:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 36.255.98.168:5204",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 119.81.189.194:80",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 36.255.98.168:4070",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 49.13.48.65:9821",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 94.103.93.14:53943",
        "SOCKS 223.113.134.118:22222",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 181.78.217.50:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}