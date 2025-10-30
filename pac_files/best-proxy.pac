function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.211.130.237:8192",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 67.43.228.254:11053",
        "SOCKS 13.59.113.45:31280",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 103.25.111.246:8080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 77.50.104.110:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 103.192.158.115:46",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 188.120.245.247:12432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}