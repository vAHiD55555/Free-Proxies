function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.33.162.89:58574",
        "SOCKS 47.243.198.12:1011",
        "SOCKS 162.251.108.145:3128",
        "SOCKS 137.184.152.66:20540",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 135.181.203.208:80",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 152.53.36.101:18080",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 47.91.121.127:3128",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 67.43.228.251:31891",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 152.53.36.101:11011",
        "SOCKS 51.20.192.194:15311",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}