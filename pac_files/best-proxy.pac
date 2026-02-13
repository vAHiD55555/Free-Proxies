function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 94.176.3.109:7443",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 147.75.34.105:443",
        "SOCKS 47.238.134.126:8443",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 103.28.121.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}