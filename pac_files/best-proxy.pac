function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.56.94.27:1081",
        "SOCKS 45.74.31.42:10044",
        "SOCKS 45.74.31.42:44893",
        "SOCKS 118.145.141.251:44218",
        "SOCKS 47.250.51.110:8081",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 45.140.169.209:1080",
        "SOCKS 45.74.31.42:6096",
        "SOCKS 160.30.113.24:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 45.74.31.42:4903",
        "SOCKS 45.74.31.30:34223",
        "SOCKS 45.74.31.42:7393",
        "SOCKS 118.145.141.251:44191",
        "SOCKS 84.22.132.84:1080",
        "SOCKS 89.47.113.13:9050",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 118.145.141.251:44004",
        "SOCKS 118.145.141.251:44163",
        "SOCKS 162.243.102.207:9764",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}