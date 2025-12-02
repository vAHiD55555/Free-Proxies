function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 54.74.104.194:45318",
        "SOCKS 167.99.171.156:443",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 67.43.236.22:2911",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.73.161.148:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 171.238.102.99:1092",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 140.237.14.92:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}