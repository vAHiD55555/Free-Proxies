function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.183:6423",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 185.93.89.146:4592",
        "SOCKS 159.223.164.184:20201",
        "SOCKS 152.53.171.242:11288",
        "SOCKS 47.79.22.55:1011",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 54.154.27.41:357",
        "SOCKS 159.223.164.184:20410",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 103.133.110.243:20000",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 103.192.158.115:46",
        "SOCKS 89.58.45.94:34941",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 20.78.26.206:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}