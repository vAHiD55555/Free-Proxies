function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.79.86.137:1080",
        "SOCKS 116.101.84.186:1095",
        "SOCKS 43.155.165.117:1080",
        "SOCKS 45.74.31.46:9664",
        "SOCKS 138.128.247.206:9050",
        "SOCKS 42.113.229.111:20001",
        "SOCKS 183.6.115.212:19450",
        "SOCKS 193.93.72.47:1080",
        "SOCKS 64.227.146.239:10000",
        "SOCKS 45.74.31.47:8546",
        "SOCKS 91.231.186.233:1080",
        "SOCKS 144.31.185.67:1080",
        "SOCKS 43.163.81.35:1080",
        "SOCKS 103.171.92.242:9050",
        "SOCKS 192.99.152.131:8888",
        "SOCKS 45.74.31.42:14804",
        "SOCKS 171.245.71.194:1085",
        "SOCKS 78.37.45.233:1080",
        "SOCKS 37.1.80.222:1080",
        "SOCKS 116.101.76.225:1118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}