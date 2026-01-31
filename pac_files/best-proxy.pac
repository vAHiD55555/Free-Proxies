function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:5083",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 45.166.93.113:999",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 16.147.202.226:80",
        "SOCKS 125.129.69.79:3128",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 36.255.98.160:6690",
        "SOCKS 36.255.98.165:12456",
        "SOCKS 62.60.131.204:4924",
        "SOCKS 36.255.98.168:4185",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 62.60.131.253:6984",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 62.60.131.205:19541",
        "SOCKS 62.60.131.204:5882",
        "SOCKS 62.60.131.205:4369",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}