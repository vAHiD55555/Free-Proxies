function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:10025",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 89.58.45.94:20445",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 172.111.146.153:443",
        "SOCKS 89.58.45.94:45247",
        "SOCKS 89.58.45.94:43325",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 157.180.121.252:57411",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 175.208.129.130:8447",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 89.58.45.94:36631",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}