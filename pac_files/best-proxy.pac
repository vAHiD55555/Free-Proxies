function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.80.54.224:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 51.250.108.153:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 184.95.235.194:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 103.146.38.7:1111",
        "SOCKS 8.148.4.166:17947",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.240.9.63:80",
        "SOCKS 115.127.112.34:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 104.248.158.27:25100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}