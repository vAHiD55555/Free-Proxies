function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.117.116.200:1080",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 79.137.196.250:1080",
        "SOCKS 38.55.145.46:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 43.242.227.10:9053",
        "SOCKS 46.161.27.244:995",
        "SOCKS 103.197.241.209:1080",
        "SOCKS 119.28.13.138:1080",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 103.248.47.230:1080",
        "SOCKS 124.220.148.234:1145",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 45.202.254.8:1080",
        "SOCKS 85.121.50.25:1080",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 145.239.95.118:10084",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}