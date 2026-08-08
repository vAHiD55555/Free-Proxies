function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.164.136.189:1080",
        "SOCKS 103.191.218.119:69",
        "SOCKS 144.79.177.134:8090",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 103.153.159.217:80",
        "SOCKS 145.241.223.213:805",
        "SOCKS 43.134.58.45:1080",
        "SOCKS 142.93.21.46:61616",
        "SOCKS 31.220.163.133:1080",
        "SOCKS 43.156.201.214:1080",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 175.27.250.85:44103",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 144.31.75.120:11112",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 20.78.118.91:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}