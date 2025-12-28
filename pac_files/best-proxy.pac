function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.138.123.242:8082",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 194.87.77.22:80",
        "SOCKS 202.62.59.138:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 62.60.131.195:38551",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 138.68.21.132:40467",
        "SOCKS 77.41.167.137:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 115.127.182.138:2589",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 103.187.39.21:1080",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 103.242.175.241:8899",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}