function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.218.206.170:22",
        "SOCKS 54.46.6.234:3129",
        "SOCKS 175.27.250.85:44085",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 176.65.140.215:1081",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 27.124.43.203:1080",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 216.106.179.216:49170",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 109.238.95.167:31276",
        "SOCKS 18.170.25.193:7451",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 103.9.185.33:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}