function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.176:10162",
        "SOCKS 81.177.166.169:10808",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 62.60.131.204:5454",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 62.60.131.205:4959",
        "SOCKS 62.60.131.253:5355",
        "SOCKS 115.190.91.223:7897",
        "SOCKS 36.255.98.151:9963",
        "SOCKS 62.60.131.180:11378",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 36.255.98.153:12029",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 62.60.131.203:4060",
        "SOCKS 36.255.98.160:8021",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 47.245.117.43:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}