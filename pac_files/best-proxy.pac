function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.224.10.43:6667",
        "SOCKS 185.93.89.181:5053",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 103.66.47.9:8080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 43.156.27.59:20201",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 221.1.104.177:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}