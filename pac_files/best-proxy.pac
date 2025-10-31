function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 82.209.251.53:45678",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 213.250.198.146:7777",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 51.15.133.214:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}