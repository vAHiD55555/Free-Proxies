function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 79.122.230.20:8080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 38.145.208.227:8447",
        "SOCKS 92.118.10.43:3128",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 206.123.156.230:4979",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 38.145.203.35:8450",
        "SOCKS 38.34.179.23:8444",
        "SOCKS 38.34.179.35:8443",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 38.34.179.46:8443",
        "SOCKS 159.223.71.162:8080",
        "SOCKS 206.123.156.236:5909",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 206.123.156.187:5470",
        "SOCKS 38.145.220.175:8449",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 206.123.156.193:4754",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}