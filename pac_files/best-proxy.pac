function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 185.93.89.146:4444",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 137.184.152.66:20002",
        "SOCKS 78.12.193.250:16010",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 109.196.140.199:1080",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 120.77.203.0:443",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 131.0.226.198:9898",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 47.91.29.151:80",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 103.133.26.11:8080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 120.224.234.71:7300",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}