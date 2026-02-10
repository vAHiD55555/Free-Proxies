function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.76.245.80:999",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 58.37.218.15:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 5.102.109.41:999",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 146.235.19.84:10801",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 46.21.153.16:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}