function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 200.48.35.125:999",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 91.217.33.161:8080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 16.78.93.162:338",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 36.255.98.176:10162",
        "SOCKS 46.8.69.128:1080",
        "SOCKS 62.60.131.194:4315",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 149.51.63.127:8080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 176.113.73.104:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}