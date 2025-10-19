function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.216.224.108:8192",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 65.109.27.32:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 185.93.89.144:6906",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 43.225.148.210:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 185.93.89.183:8096",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 135.181.203.208:80",
        "SOCKS 91.219.101.244:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}