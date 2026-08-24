function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.199.6.82:999",
        "SOCKS 45.74.31.30:40790",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 45.9.75.202:9050",
        "SOCKS 45.74.31.42:38352",
        "SOCKS 45.74.31.30:8123",
        "SOCKS 118.145.141.251:44135",
        "SOCKS 54.151.158.32:3128",
        "SOCKS 118.145.141.251:44104",
        "SOCKS 45.74.31.30:6101",
        "SOCKS 103.133.26.73:3128",
        "SOCKS 45.74.31.42:10976",
        "SOCKS 34.176.215.13:3128",
        "SOCKS 34.43.46.91:80",
        "SOCKS 202.165.47.90:55443",
        "SOCKS 84.254.198.175:1080",
        "SOCKS 79.134.4.192:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 5.75.133.113:10808",
        "SOCKS 174.138.61.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}