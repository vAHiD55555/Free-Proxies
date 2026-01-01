function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.181:4183",
        "SOCKS 161.49.176.173:1338",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 157.173.201.10:1080",
        "SOCKS 195.162.19.75:80",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 62.60.131.191:14526",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 203.189.153.168:1080",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 72.10.160.90:21963",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 165.22.110.253:1080",
        "SOCKS 62.60.131.184:4433",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}