function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.131:1020",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 202.62.39.118:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 202.62.37.36:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 68.71.249.158:4145",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 5.183.70.46:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 221.134.152.75:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}