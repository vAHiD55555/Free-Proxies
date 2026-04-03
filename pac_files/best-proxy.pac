function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.145.218.161:8445",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 38.145.220.196:8452",
        "SOCKS 5.42.103.183:1080",
        "SOCKS 38.34.179.228:8453",
        "SOCKS 38.145.220.198:8446",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 45.136.131.35:8452",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 13.229.47.109:80",
        "SOCKS 38.145.208.226:8448",
        "SOCKS 38.145.208.241:8447",
        "SOCKS 38.34.179.150:8449",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}