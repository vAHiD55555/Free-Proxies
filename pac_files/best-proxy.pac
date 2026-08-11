function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.76.15.189:1080",
        "SOCKS 45.77.37.39:2078",
        "SOCKS 62.106.66.13:1080",
        "SOCKS 178.156.206.253:8118",
        "SOCKS 202.62.52.120:1080",
        "SOCKS 103.97.140.64:8080",
        "SOCKS 5.230.201.154:1080",
        "SOCKS 216.106.179.216:49463",
        "SOCKS 221.10.57.128:5138",
        "SOCKS 157.245.196.151:9090",
        "SOCKS 8.243.71.182:999",
        "SOCKS 147.45.66.117:1082",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 103.204.211.48:32255",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 165.22.161.41:8118",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 88.201.248.85:1080",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 66.175.236.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}