function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.191.236.162:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 178.170.43.121:8082",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 3.24.178.81:80",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 83.171.252.150:8080",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 103.41.88.182:83",
        "SOCKS 193.34.95.110:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}