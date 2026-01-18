function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 62.60.131.193:4495",
        "SOCKS 115.127.178.50:6969",
        "SOCKS 36.255.98.175:9100",
        "SOCKS 195.35.113.29:1080",
        "SOCKS 62.60.131.189:5005",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 37.120.162.180:12089",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 164.163.40.1:10000",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 62.60.131.194:13969",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 36.255.98.180:6969",
        "SOCKS 62.60.131.194:9999",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 37.120.133.137:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}