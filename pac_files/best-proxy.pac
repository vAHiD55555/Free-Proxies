function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 52.87.167.25:80",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 135.181.203.208:80",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 172.211.197.17:8080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 143.244.143.104:8080",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 185.248.101.52:60005",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 111.61.73.175:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}