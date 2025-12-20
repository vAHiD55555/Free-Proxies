function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.159.99.242:8080",
        "SOCKS 117.74.65.207:80",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 103.122.0.151:8181",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 91.205.131.251:1080",
        "SOCKS 128.140.76.145:18762",
        "SOCKS 54.173.77.49:8080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 80.253.246.238:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}