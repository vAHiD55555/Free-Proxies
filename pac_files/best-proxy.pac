function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.46:6005",
        "SOCKS 81.168.119.85:443",
        "SOCKS 45.61.161.70:1080",
        "SOCKS 84.200.89.140:1080",
        "SOCKS 69.174.54.143:13103",
        "SOCKS 206.188.196.40:9100",
        "SOCKS 190.60.62.51:999",
        "SOCKS 45.74.31.47:6752",
        "SOCKS 103.247.120.51:10800",
        "SOCKS 47.82.87.12:1011",
        "SOCKS 107.175.130.24:1080",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 45.74.31.41:6752",
        "SOCKS 47.252.18.37:81",
        "SOCKS 194.135.46.60:443",
        "SOCKS 103.77.51.125:1080",
        "SOCKS 45.74.31.47:6480",
        "SOCKS 85.94.21.103:1080",
        "SOCKS 35.204.249.130:1080",
        "SOCKS 140.245.62.194:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}