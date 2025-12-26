function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 113.11.126.18:36909",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 67.201.58.190:4145",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 103.159.96.190:1080",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 62.60.131.179:11726",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 193.233.254.7:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}