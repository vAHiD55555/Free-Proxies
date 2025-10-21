function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:36733",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 137.184.152.66:20256",
        "SOCKS 137.184.152.66:20090",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 89.58.45.94:50000",
        "SOCKS 157.175.42.134:20201",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 89.58.45.94:24551",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 120.77.203.0:443",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 89.58.45.94:40145",
        "SOCKS 78.157.57.71:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}