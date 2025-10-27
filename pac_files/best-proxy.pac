function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.133.26.45:8080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 94.131.82.71:3128",
        "SOCKS 113.44.143.232:7890",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 13.212.76.113:9298",
        "SOCKS 103.111.136.82:8199",
        "SOCKS 47.90.167.27:9050",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 103.189.197.57:8181",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 125.141.139.110:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}