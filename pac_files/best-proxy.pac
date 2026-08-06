function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.123.251.109:1080",
        "SOCKS 216.106.179.216:49572",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 91.239.211.83:8443",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 51.250.6.232:1080",
        "SOCKS 109.199.107.68:1080",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 147.45.60.124:1082",
        "SOCKS 82.117.78.58:1080",
        "SOCKS 158.101.8.92:1080",
        "SOCKS 43.203.195.46:80",
        "SOCKS 62.109.1.115:1080",
        "SOCKS 103.142.255.33:69",
        "SOCKS 88.80.186.173:19100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}