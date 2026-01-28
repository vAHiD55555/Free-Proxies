function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.172.161.35:16379",
        "SOCKS 36.255.98.168:4017",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 36.255.98.168:6956",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 36.255.98.160:6690",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 36.255.98.167:4863",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 62.60.131.205:5441",
        "SOCKS 147.45.179.84:1082",
        "SOCKS 36.255.98.160:16955",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 36.255.98.168:6713",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 209.97.149.157:80",
        "SOCKS 8.219.229.53:8080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 91.121.48.221:38711",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}