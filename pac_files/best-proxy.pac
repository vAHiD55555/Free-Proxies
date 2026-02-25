function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.127:1080",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 37.110.225.76:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 35.225.22.61:80",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 154.64.235.206:58367",
        "SOCKS 185.244.49.248:1080",
        "SOCKS 5.57.38.64:27913",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 103.174.178.145:2005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}