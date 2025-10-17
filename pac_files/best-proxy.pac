function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:45908",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 185.93.89.158:19201",
        "SOCKS 185.93.89.187:8128",
        "SOCKS 103.153.34.2:1111",
        "SOCKS 185.93.89.158:8141",
        "SOCKS 89.58.45.94:28751",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 185.93.89.182:9999",
        "SOCKS 185.93.89.187:8088",
        "SOCKS 185.93.89.158:5509",
        "SOCKS 185.93.89.158:9091",
        "SOCKS 185.93.89.144:10071",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 47.82.110.21:1024",
        "SOCKS 185.93.89.180:7475",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 13.212.76.113:8763",
        "SOCKS 185.93.89.187:10586",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}