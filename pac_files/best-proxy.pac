function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.91.242.198:6688",
        "SOCKS 116.102.242.52:10017",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 79.255.80.145:80",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 123.54.197.18:21294",
        "SOCKS 95.140.158.135:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 116.242.89.230:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}