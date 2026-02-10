function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 115.69.208.6:1080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 125.129.39.95:3128",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 188.214.35.161:10801",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 159.8.114.37:80",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 123.54.197.20:20724",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}