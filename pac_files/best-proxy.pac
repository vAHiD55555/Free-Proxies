function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.221.242.131:9999",
        "SOCKS 176.108.146.180:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 169.57.157.148:80",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 120.77.203.0:443",
        "SOCKS 37.120.162.180:57516",
        "SOCKS 62.60.131.182:8219",
        "SOCKS 13.115.193.75:9181",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 37.120.162.180:41437",
        "SOCKS 37.120.162.180:57577",
        "SOCKS 37.120.162.180:33965",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 62.60.131.178:34925",
        "SOCKS 54.90.159.174:22229",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}