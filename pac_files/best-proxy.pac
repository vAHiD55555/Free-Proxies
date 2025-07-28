function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.68.60.8:1080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 42.119.156.139:16000",
        "SOCKS 34.131.207.30:3128",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 8.222.197.104:1080",
        "SOCKS 103.81.194.17:8080",
        "SOCKS 45.91.201.100:8082",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 47.243.75.202:58854",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}