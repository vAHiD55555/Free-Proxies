function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.196.61.251:8081",
        "SOCKS 46.173.26.104:1080",
        "SOCKS 2.56.108.184:1080",
        "SOCKS 8.219.94.23:7890",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 182.204.176.128:1080",
        "SOCKS 77.239.108.222:11041",
        "SOCKS 185.133.239.244:16299",
        "SOCKS 178.236.16.4:1080",
        "SOCKS 45.74.31.42:4508",
        "SOCKS 185.49.110.155:1080",
        "SOCKS 36.137.204.11:1081",
        "SOCKS 43.155.204.231:1080",
        "SOCKS 128.140.82.50:8443",
        "SOCKS 45.74.31.30:5162",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 103.118.85.146:1080",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 80.78.25.87:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}