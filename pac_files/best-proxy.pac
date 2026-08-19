function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 111.119.162.248:10925",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 223.111.182.16:1515",
        "SOCKS 118.145.141.251:44066",
        "SOCKS 116.48.170.221:11000",
        "SOCKS 210.87.92.207:8080",
        "SOCKS 45.38.198.127:1080",
        "SOCKS 103.52.154.151:7890",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 47.252.18.37:808",
        "SOCKS 164.52.216.51:8080",
        "SOCKS 92.204.54.29:9100",
        "SOCKS 103.197.242.95:1080",
        "SOCKS 146.235.231.249:1080",
        "SOCKS 154.91.176.171:1080",
        "SOCKS 158.46.23.102:10080",
        "SOCKS 103.96.233.58:1080",
        "SOCKS 79.137.198.159:42771",
        "SOCKS 104.154.186.48:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}