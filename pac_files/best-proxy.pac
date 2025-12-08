function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.154.43.198:39522",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 83.221.209.221:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 51.44.182.158:400",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 160.19.16.86:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}