function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.69.186:9200",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 44.251.173.250:368",
        "SOCKS 152.53.36.101:38877",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 137.184.152.66:20090",
        "SOCKS 152.53.36.101:58579",
        "SOCKS 41.174.96.38:32650",
        "SOCKS 103.72.89.30:8097",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 165.232.77.140:3128",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 217.77.102.18:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}