function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.217.143.102:90",
        "SOCKS 89.58.45.94:22949",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 89.58.45.94:13920",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 24.172.82.94:53281",
        "SOCKS 155.94.163.200:1080",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 89.58.45.94:42653",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 89.58.45.94:17612",
        "SOCKS 121.169.46.116:1090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}