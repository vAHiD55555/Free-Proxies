function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.83.142:1088",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 47.237.120.182:1100",
        "SOCKS 113.212.109.40:1080",
        "SOCKS 58.219.240.19:8989",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 152.53.36.101:20147",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 176.117.237.132:1080",
        "SOCKS 152.53.36.101:15305",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 47.115.42.157:8044",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}