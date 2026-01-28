function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.133.32.102:3128",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 62.60.131.179:6311",
        "SOCKS 62.60.131.204:8131",
        "SOCKS 62.60.131.253:7649",
        "SOCKS 62.60.131.204:4795",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 202.58.77.19:3127",
        "SOCKS 62.60.131.183:4554",
        "SOCKS 36.255.98.160:6115",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 62.60.131.253:19101",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 36.255.98.182:10030",
        "SOCKS 36.255.98.180:10349",
        "SOCKS 62.60.131.253:5427",
        "SOCKS 40.192.100.189:7809",
        "SOCKS 36.255.98.184:5705",
        "SOCKS 36.255.98.177:9609",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}