function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.241.156.17:1080",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 120.77.203.0:443",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 38.207.165.2:6005",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 123.54.197.24:21258",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}