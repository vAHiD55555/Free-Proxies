function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.198:5566",
        "SOCKS 54.88.116.133:80",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 119.81.189.194:80",
        "SOCKS 84.247.190.79:1080",
        "SOCKS 13.229.47.109:80",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 45.12.151.226:2828",
        "SOCKS 212.227.87.124:2080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 41.216.191.75:8080",
        "SOCKS 123.54.197.16:21020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}