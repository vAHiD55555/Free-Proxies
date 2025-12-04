function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.113.73.99:3128",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 198.23.134.57:8080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 103.176.97.223:3127",
        "SOCKS 121.40.51.48:1080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 138.68.73.161:1080",
        "SOCKS 84.17.51.240:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}