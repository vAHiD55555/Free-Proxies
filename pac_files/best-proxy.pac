function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 15.204.235.27:1080",
        "SOCKS 109.120.133.253:9999",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 194.87.10.38:1234",
        "SOCKS 92.118.234.124:1080",
        "SOCKS 109.236.57.144:1080",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 171.253.95.238:1041",
        "SOCKS 178.156.206.253:8118",
        "SOCKS 38.54.15.87:8888",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 171.253.95.24:1045",
        "SOCKS 27.155.93.29:5080",
        "SOCKS 192.142.52.65:1080",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 203.189.155.68:1080",
        "SOCKS 43.133.13.187:8889",
        "SOCKS 118.69.148.120:20000",
        "SOCKS 172.171.83.26:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}