function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.99.75:1080",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 220.135.64.124:11080",
        "SOCKS 45.74.31.30:34018",
        "SOCKS 45.74.31.30:4090",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 45.74.31.30:5599",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 43.230.192.242:1080",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 82.22.174.113:1080",
        "SOCKS 116.241.240.176:11080",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 101.2.166.73:1080",
        "SOCKS 202.95.15.6:1080",
        "SOCKS 5.130.50.118:1080",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 185.197.74.126:2080",
        "SOCKS 103.134.220.143:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}