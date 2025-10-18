function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.145.200.184:3128",
        "SOCKS 146.70.164.210:1080",
        "SOCKS 152.53.36.101:46753",
        "SOCKS 176.119.36.76:1081",
        "SOCKS 112.216.83.10:3128",
        "SOCKS 185.93.89.157:11288",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 185.93.89.183:13267",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 185.93.89.182:12179",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 185.93.89.179:6327",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 152.53.36.101:55733",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 203.150.128.194:8080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 185.93.89.164:4153",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 176.74.197.163:36918",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}