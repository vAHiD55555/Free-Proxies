function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.193.25.206:9050",
        "SOCKS 203.189.135.105:1080",
        "SOCKS 45.95.38.57:9050",
        "SOCKS 69.87.216.54:7989",
        "SOCKS 89.169.37.254:1080",
        "SOCKS 64.188.56.82:8118",
        "SOCKS 169.58.97.115:1080",
        "SOCKS 5.75.133.113:10811",
        "SOCKS 103.174.122.87:3128",
        "SOCKS 37.49.224.243:1080",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 34.65.99.32:3128",
        "SOCKS 18.138.10.216:1090",
        "SOCKS 165.16.192.205:1080",
        "SOCKS 103.174.122.201:3128",
        "SOCKS 45.179.145.12:6080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 109.199.96.116:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}