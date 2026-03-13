function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.64.130:16379",
        "SOCKS 85.198.98.179:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 195.19.49.119:1080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 120.77.203.0:443",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 190.61.118.115:999",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 104.251.81.37:14270",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 39.105.27.30:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}