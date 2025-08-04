function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 47.90.205.231:33333",
        "SOCKS 51.158.125.47:16379",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 51.159.159.73:80",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 8.219.229.53:1081",
        "SOCKS 116.107.169.233:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}