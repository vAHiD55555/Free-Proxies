function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.133.82.62:44081",
        "SOCKS 92.118.234.124:1080",
        "SOCKS 88.201.248.85:1080",
        "SOCKS 216.106.179.216:49451",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 77.50.235.130:1080",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 217.144.162.41:1080",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 47.82.81.87:1011",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 109.164.35.23:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}