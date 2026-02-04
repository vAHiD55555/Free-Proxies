function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.130.47.129:1082",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 217.154.207.198:1080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 146.235.19.84:10819",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 85.133.227.150:80",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 193.163.72.88:10808",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 2.144.6.212:12111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}