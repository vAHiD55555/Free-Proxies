function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.160:6690",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 36.255.98.160:5722",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 62.60.131.203:5133",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 36.255.98.184:8858",
        "SOCKS 36.255.98.180:4187",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}