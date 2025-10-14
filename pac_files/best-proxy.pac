function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.144:6666",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 135.181.203.208:80",
        "SOCKS 103.166.124.249:8199",
        "SOCKS 95.47.239.75:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 185.93.89.187:4236",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 163.172.161.35:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}