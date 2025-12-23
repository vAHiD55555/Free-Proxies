function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.151.218:5566",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 128.199.37.92:1080",
        "SOCKS 72.10.160.90:5885",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 109.238.14.123:52663",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}