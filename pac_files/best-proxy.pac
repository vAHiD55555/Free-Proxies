function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.79.202.70:3129",
        "SOCKS 103.138.144.202:1999",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 195.19.55.74:1080",
        "SOCKS 103.39.49.101:1082",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 103.136.106.13:1081",
        "SOCKS 80.78.25.87:9050",
        "SOCKS 89.163.135.20:8236",
        "SOCKS 146.235.231.249:1080",
        "SOCKS 47.250.115.134:1080",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 176.12.65.24:443",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 138.124.10.104:443",
        "SOCKS 43.203.195.46:80",
        "SOCKS 176.65.140.216:1082",
        "SOCKS 216.106.179.216:49415",
        "SOCKS 110.235.255.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}