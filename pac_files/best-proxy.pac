function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.207.92.87:1088",
        "SOCKS 194.164.125.208:57422",
        "SOCKS 152.32.219.123:10808",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 82.9.133.51:9150",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 109.248.11.184:1080",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 171.253.95.24:1111",
        "SOCKS 35.204.249.130:1080",
        "SOCKS 66.59.197.63:4000",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 193.30.123.61:9050",
        "SOCKS 138.2.64.185:8118",
        "SOCKS 163.5.214.119:9097",
        "SOCKS 13.215.27.14:1080",
        "SOCKS 175.27.252.26:1080",
        "SOCKS 216.106.179.216:49208",
        "SOCKS 110.235.246.62:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}