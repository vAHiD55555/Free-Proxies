function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 168.119.173.104:41346",
        "SOCKS 102.36.127.249:1080",
        "SOCKS 111.119.162.248:10943",
        "SOCKS 8.213.128.6:102",
        "SOCKS 118.145.141.251:44101",
        "SOCKS 111.119.162.248:10916",
        "SOCKS 140.245.238.56:53",
        "SOCKS 8.221.138.111:3128",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 118.145.141.251:44146",
        "SOCKS 45.140.169.209:1080",
        "SOCKS 195.133.26.196:1080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 8.213.128.6:20000",
        "SOCKS 45.74.31.30:5400",
        "SOCKS 171.22.182.164:1080",
        "SOCKS 104.236.171.128:41047",
        "SOCKS 45.74.31.42:8001",
        "SOCKS 45.74.31.42:8007",
        "SOCKS 118.145.141.251:44095",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}