function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.73.161.148:1080",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 203.3.112.2:6666",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 91.185.56.115:1080",
        "SOCKS 216.218.249.28:8181",
        "SOCKS 20.241.208.201:3128",
        "SOCKS 43.207.128.251:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 128.140.76.145:24755",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 77.110.122.229:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 52.87.167.25:80",
        "SOCKS 35.152.252.253:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}