function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.91:18749",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 188.19.15.242:8080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 27.79.187.88:16000",
        "SOCKS 42.117.243.39:16000",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 47.91.121.127:8888",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 135.181.203.208:80",
        "SOCKS 115.78.135.4:3334",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}