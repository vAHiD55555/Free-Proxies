function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.140.113.110:3128",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 67.43.236.22:20051",
        "SOCKS 92.242.184.2:4153",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 182.160.106.205:1080",
        "SOCKS 103.81.175.218:28022",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 38.7.221.191:8080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 47.79.94.191:1122",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 34.222.65.100:1976",
        "SOCKS 135.181.203.208:80",
        "SOCKS 34.88.57.53:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}