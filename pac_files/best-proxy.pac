function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.211.179.212:1081",
        "SOCKS 175.27.250.85:44082",
        "SOCKS 47.238.128.246:3128",
        "SOCKS 194.177.28.66:10808",
        "SOCKS 194.163.174.78:1085",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 101.2.166.73:1080",
        "SOCKS 138.199.25.13:3902",
        "SOCKS 109.164.35.23:8888",
        "SOCKS 89.169.168.25:6101",
        "SOCKS 2.56.178.88:808",
        "SOCKS 54.46.6.234:3129",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 152.228.134.176:48080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 115.127.53.114:1080",
        "SOCKS 51.178.49.241:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}