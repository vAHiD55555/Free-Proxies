function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.230.8.80:1080",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 103.82.23.118:5247",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 123.54.197.24:23776",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 123.54.197.24:21967",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 185.86.195.166:8080",
        "SOCKS 103.247.23.28:9223",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 123.54.197.19:22349",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 217.76.245.80:999",
        "SOCKS 47.251.87.74:4444",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}