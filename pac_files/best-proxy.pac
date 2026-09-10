function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:5164",
        "SOCKS 109.172.55.210:1082",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 203.76.123.6:1080",
        "SOCKS 45.74.31.30:4057",
        "SOCKS 45.74.31.30:33666",
        "SOCKS 5.101.216.82:3128",
        "SOCKS 47.82.85.43:1011",
        "SOCKS 45.74.31.30:4753",
        "SOCKS 47.85.13.198:1080",
        "SOCKS 65.109.219.215:9089",
        "SOCKS 194.164.22.24:8080",
        "SOCKS 111.206.4.163:18888",
        "SOCKS 193.221.203.14:1080",
        "SOCKS 103.171.92.242:9050",
        "SOCKS 174.138.162.37:36888",
        "SOCKS 45.74.31.30:5219",
        "SOCKS 166.1.232.89:7890",
        "SOCKS 195.161.132.106:7776",
        "SOCKS 47.245.165.201:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}