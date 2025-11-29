function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.162.19.75:80",
        "SOCKS 164.163.43.102:10000",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 157.180.121.252:12380",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 137.59.48.130:5566",
        "SOCKS 190.7.138.78:8080",
        "SOCKS 47.239.10.198:1025",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 171.238.90.238:1088",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 194.26.135.215:1080",
        "SOCKS 171.238.88.111:1088",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 159.65.158.30:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}