function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.210.38.50:3128",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 195.211.45.87:5050",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 104.194.90.19:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 67.43.228.251:28401",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}