function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.93.213.242:1080",
        "SOCKS 152.53.171.242:15553",
        "SOCKS 40.192.27.104:16825",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 152.53.171.242:28985",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 37.192.133.82:1080",
        "SOCKS 89.58.45.94:24813",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 137.184.228.194:40886",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}