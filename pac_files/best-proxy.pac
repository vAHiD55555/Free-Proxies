function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:11793",
        "SOCKS 91.202.5.45:1080",
        "SOCKS 45.74.31.30:33304",
        "SOCKS 185.225.42.91:1080",
        "SOCKS 45.74.31.42:4817",
        "SOCKS 47.91.110.148:113",
        "SOCKS 45.74.31.42:11752",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 13.143.232.18:8080",
        "SOCKS 45.74.31.30:9097",
        "SOCKS 144.31.30.102:9050",
        "SOCKS 45.74.31.42:5181",
        "SOCKS 45.74.31.30:6866",
        "SOCKS 47.91.110.148:8443",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 45.74.31.42:4815",
        "SOCKS 174.138.162.35:54262",
        "SOCKS 111.119.162.248:10940",
        "SOCKS 45.74.31.30:6641",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}