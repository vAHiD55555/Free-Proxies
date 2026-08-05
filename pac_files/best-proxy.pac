function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.110.102.252:1080",
        "SOCKS 175.27.250.85:44158",
        "SOCKS 137.184.58.163:9050",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 103.111.136.82:8199",
        "SOCKS 83.222.24.37:1080",
        "SOCKS 94.131.230.127:1080",
        "SOCKS 27.131.14.9:1088",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 120.133.82.62:44142",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 176.126.83.123:9443",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 95.161.168.250:1080",
        "SOCKS 185.196.61.251:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}