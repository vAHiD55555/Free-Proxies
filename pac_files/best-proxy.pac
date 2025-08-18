function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.204.37:16000",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 176.9.238.155:16379",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 49.156.44.115:8080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 117.161.170.163:9082",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 72.10.160.91:18749",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}