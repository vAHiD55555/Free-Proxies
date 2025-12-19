function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.227.225.157:3389",
        "SOCKS 67.43.228.253:1551",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 128.140.76.145:22413",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 72.240.9.63:80",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 103.178.3.246:8080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 128.140.76.145:23636",
        "SOCKS 128.140.76.145:10003",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}