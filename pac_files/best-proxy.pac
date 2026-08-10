function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.16.192.57:1080",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 85.215.202.147:1080",
        "SOCKS 216.106.179.216:49497",
        "SOCKS 45.84.13.153:1080",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 135.225.91.78:9072",
        "SOCKS 150.129.115.253:6667",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 45.74.178.43:9098",
        "SOCKS 31.56.78.134:7777",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 35.223.220.43:9050",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 66.163.119.55:10006",
        "SOCKS 144.24.111.128:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}