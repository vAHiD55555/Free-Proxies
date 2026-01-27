function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.35.113.29:1080",
        "SOCKS 62.60.131.195:37074",
        "SOCKS 36.255.98.168:4185",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 36.255.98.151:20986",
        "SOCKS 62.60.131.253:7649",
        "SOCKS 36.255.98.180:8970",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 62.60.131.204:5394",
        "SOCKS 62.60.131.253:4005",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 62.60.131.253:7181",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 15.204.231.254:3128",
        "SOCKS 36.255.98.184:5705",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}