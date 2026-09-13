function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:9173",
        "SOCKS 45.74.31.42:12717",
        "SOCKS 67.207.92.87:3129",
        "SOCKS 45.74.31.42:13186",
        "SOCKS 45.74.31.40:4443",
        "SOCKS 45.74.31.42:10899",
        "SOCKS 45.74.31.40:13829",
        "SOCKS 45.74.31.30:6241",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 45.74.31.40:9220",
        "SOCKS 89.213.118.234:9050",
        "SOCKS 45.74.31.42:13582",
        "SOCKS 45.74.31.30:4556",
        "SOCKS 45.74.31.42:4122",
        "SOCKS 45.74.31.30:7463",
        "SOCKS 45.74.31.30:4845",
        "SOCKS 45.74.31.42:12350",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 45.74.31.30:7298",
        "SOCKS 223.25.110.37:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}