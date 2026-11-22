function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 93.174.129.169:3128",
        "SOCKS 146.158.39.217:1080",
        "SOCKS 194.187.149.198:1085",
        "SOCKS 43.161.199.217:1080",
        "SOCKS 178.105.82.248:9150",
        "SOCKS 45.195.129.91:1080",
        "SOCKS 45.74.31.40:4084",
        "SOCKS 102.0.14.42:1080",
        "SOCKS 2.56.119.138:9080",
        "SOCKS 107.174.181.67:1024",
        "SOCKS 89.58.42.118:3129",
        "SOCKS 69.174.54.157:12699",
        "SOCKS 47.239.75.118:8484",
        "SOCKS 109.176.229.220:1080",
        "SOCKS 8.211.195.173:8072",
        "SOCKS 156.245.246.51:7890",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 45.74.31.41:4084",
        "SOCKS 116.237.190.62:1081",
        "SOCKS 163.181.117.60:9898",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}