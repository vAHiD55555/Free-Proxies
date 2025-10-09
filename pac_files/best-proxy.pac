function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.172.225.227:8080",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 103.226.232.205:8099",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 114.130.153.122:58080",
        "SOCKS 186.182.104.177:8080",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 177.11.67.161:8999",
        "SOCKS 103.191.92.157:1009",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 103.171.82.213:8080",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 72.10.160.92:16287",
        "SOCKS 202.73.27.110:8081",
        "SOCKS 62.171.152.87:8888",
        "SOCKS 118.179.5.177:6248",
        "SOCKS 121.169.46.116:1090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}