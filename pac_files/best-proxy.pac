function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.49:5566",
        "SOCKS 36.255.98.161:4888",
        "SOCKS 36.255.98.180:4301",
        "SOCKS 77.246.108.10:21238",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 36.255.98.167:4525",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 37.120.162.180:21009",
        "SOCKS 36.255.98.161:4147",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 36.255.98.184:4223",
        "SOCKS 36.255.98.175:4403",
        "SOCKS 202.62.34.102:1080",
        "SOCKS 36.255.98.160:4163",
        "SOCKS 146.235.19.84:10810",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 37.120.162.180:51787",
        "SOCKS 36.255.98.180:5494",
        "SOCKS 120.77.203.0:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}