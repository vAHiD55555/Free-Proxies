function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.95.39.58:59999",
        "SOCKS 178.105.177.105:9087",
        "SOCKS 140.245.238.56:53",
        "SOCKS 88.218.206.170:22",
        "SOCKS 5.75.168.247:8023",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 103.151.177.221:8080",
        "SOCKS 103.166.184.104:9191",
        "SOCKS 193.107.75.242:33500",
        "SOCKS 178.156.224.42:3128",
        "SOCKS 206.123.156.204:5449",
        "SOCKS 70.35.196.194:8087",
        "SOCKS 8.213.128.6:1234",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 47.243.59.250:1011",
        "SOCKS 206.123.156.228:20146",
        "SOCKS 206.123.156.222:9336",
        "SOCKS 206.123.156.223:8610",
        "SOCKS 47.86.42.224:1011",
        "SOCKS 203.189.153.170:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}