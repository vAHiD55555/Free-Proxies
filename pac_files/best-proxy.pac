function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.205:5204",
        "SOCKS 62.60.131.253:5317",
        "SOCKS 36.255.98.182:10030",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 62.60.131.253:4005",
        "SOCKS 43.240.83.70:8080",
        "SOCKS 62.60.131.253:6488",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 36.255.98.179:7880",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 62.60.131.253:4016",
        "SOCKS 62.60.131.203:4673",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 36.255.98.167:4045",
        "SOCKS 159.8.114.37:80",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 185.189.112.157:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}