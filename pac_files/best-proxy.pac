function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44021",
        "SOCKS 118.145.141.251:44092",
        "SOCKS 45.74.31.30:6120",
        "SOCKS 95.211.190.26:9100",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 85.198.82.207:1080",
        "SOCKS 45.74.31.30:9431",
        "SOCKS 45.74.31.30:8787",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 34.94.46.8:80",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 45.74.31.42:9370",
        "SOCKS 118.145.141.251:44241",
        "SOCKS 45.74.31.30:8097",
        "SOCKS 47.85.37.60:1080",
        "SOCKS 118.145.141.251:44012",
        "SOCKS 118.145.141.251:44033",
        "SOCKS 45.74.31.30:48293",
        "SOCKS 158.220.101.43:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}