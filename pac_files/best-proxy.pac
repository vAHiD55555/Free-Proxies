function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.1.108:14070",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 43.135.136.131:59394",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 202.62.59.138:1080",
        "SOCKS 72.10.160.172:8001",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 116.62.140.59:7890",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 47.237.92.86:80",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 181.214.39.72:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}