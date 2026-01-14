function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.94.104.205:48452",
        "SOCKS 72.10.160.91:26909",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 15.160.134.84:238",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 195.35.113.29:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 113.195.224.222:9999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}