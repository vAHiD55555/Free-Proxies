function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.140.164.179:3510",
        "SOCKS 202.40.190.74:1080",
        "SOCKS 149.248.76.55:10012",
        "SOCKS 221.176.85.238:1080",
        "SOCKS 8.211.42.167:25565",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 134.122.199.224:10001",
        "SOCKS 213.230.121.41:1080",
        "SOCKS 45.32.160.61:1088",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 8.212.168.170:2067",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 104.207.153.122:10808",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 185.49.110.155:1080",
        "SOCKS 45.143.94.111:1080",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 138.199.25.13:3908",
        "SOCKS 194.163.182.6:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}