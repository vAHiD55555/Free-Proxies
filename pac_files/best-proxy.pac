function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.86.249:3128",
        "SOCKS 36.255.98.163:4946",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 36.255.98.151:9796",
        "SOCKS 37.120.162.180:51787",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 37.120.162.180:22361",
        "SOCKS 178.22.31.205:1081",
        "SOCKS 37.120.162.180:14455",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 62.60.131.197:4054",
        "SOCKS 37.120.162.180:46361",
        "SOCKS 200.201.134.184:8787",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 62.60.131.194:4445",
        "SOCKS 119.81.71.27:80",
        "SOCKS 36.255.98.151:10017",
        "SOCKS 37.120.162.180:39232",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}