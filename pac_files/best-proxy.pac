function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.188.196.40:9100",
        "SOCKS 193.233.218.121:1080",
        "SOCKS 45.74.31.30:39850",
        "SOCKS 77.239.106.24:1080",
        "SOCKS 45.74.31.30:40471",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 77.221.152.210:36219",
        "SOCKS 141.147.146.174:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 174.138.162.36:36290",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 174.138.165.204:34821",
        "SOCKS 45.74.31.30:33110",
        "SOCKS 158.101.8.92:1080",
        "SOCKS 45.74.31.30:35727",
        "SOCKS 143.198.205.96:1080",
        "SOCKS 5.45.119.70:1080",
        "SOCKS 47.86.235.129:9898",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 202.79.27.12:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}