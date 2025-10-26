function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 152.53.36.101:15593",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 198.54.124.88:8080",
        "SOCKS 8.211.49.86:8008",
        "SOCKS 103.66.197.2:8080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 217.25.90.44:5050",
        "SOCKS 185.93.89.181:4642",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 146.56.150.146:32241",
        "SOCKS 94.158.49.82:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}