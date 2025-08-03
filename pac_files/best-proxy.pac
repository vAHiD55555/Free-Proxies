function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.159.65:8081",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 178.178.100.188:8080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 3.135.6.138:443",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 159.255.163.153:47193",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}