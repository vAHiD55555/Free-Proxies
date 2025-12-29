function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.245.231.73:8192",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 62.60.131.183:11214",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 200.59.186.176:999",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}