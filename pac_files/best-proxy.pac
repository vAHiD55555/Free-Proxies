function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.93.213.242:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 206.123.156.223:4181",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 154.3.236.202:3128",
        "SOCKS 39.104.201.40:7890",
        "SOCKS 71.168.71.12:8888",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 8.210.17.35:8081",
        "SOCKS 128.127.144.44:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 45.10.69.40:8888",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 45.140.147.82:1081",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 45.136.198.40:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 123.54.197.53:20779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}