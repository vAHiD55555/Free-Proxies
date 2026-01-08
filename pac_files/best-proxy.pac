function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.173:13349",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 72.10.160.91:9607",
        "SOCKS 93.43.251.159:80",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 202.5.37.104:17382",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}