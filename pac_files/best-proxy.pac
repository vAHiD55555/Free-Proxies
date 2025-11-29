function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.238.88.27:1088",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 171.238.102.99:1081",
        "SOCKS 54.74.104.194:45318",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 152.53.36.101:53721",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 157.180.121.252:28128",
        "SOCKS 152.53.36.101:16453",
        "SOCKS 72.10.160.172:5361",
        "SOCKS 171.238.103.65:1068",
        "SOCKS 171.238.103.65:1120",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 194.87.77.22:80",
        "SOCKS 188.93.213.242:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}