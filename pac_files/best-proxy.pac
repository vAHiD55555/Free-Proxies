function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 78.187.42.187:3310",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 125.128.12.14:3128",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 83.228.227.81:1090",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 103.109.96.193:8080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 206.123.156.184:21536",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 206.123.156.176:4110",
        "SOCKS 148.135.85.87:1080",
        "SOCKS 209.74.81.113:1080",
        "SOCKS 217.76.245.80:999",
        "SOCKS 104.248.146.99:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}