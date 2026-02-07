function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.56.98:19190",
        "SOCKS 152.53.171.242:11666",
        "SOCKS 213.35.110.67:10806",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 38.60.214.125:4444",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 202.62.55.43:1080",
        "SOCKS 144.124.228.155:1080",
        "SOCKS 152.53.171.242:22791",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 202.62.42.92:1080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 152.53.171.242:11261",
        "SOCKS 34.174.116.220:80",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}