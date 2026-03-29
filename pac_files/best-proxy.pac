function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 38.34.179.21:8443",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 38.145.208.173:8443",
        "SOCKS 38.34.179.85:8450",
        "SOCKS 38.145.218.229:8450",
        "SOCKS 38.145.218.102:8443",
        "SOCKS 38.34.183.164:8444",
        "SOCKS 38.145.218.234:8443",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 38.34.179.193:8443",
        "SOCKS 169.57.157.148:80",
        "SOCKS 38.145.208.174:8443",
        "SOCKS 38.145.208.203:8451",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 119.81.189.194:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}