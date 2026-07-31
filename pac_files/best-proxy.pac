function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.132.174.89:9080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 95.216.170.155:9096",
        "SOCKS 213.35.102.40:50161",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 113.160.132.26:8080",
        "SOCKS 203.25.208.163:1515",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 174.64.199.82:4145",
        "SOCKS 47.91.115.179:9080",
        "SOCKS 82.22.174.113:1080",
        "SOCKS 93.184.5.129:1080",
        "SOCKS 160.202.46.149:1080",
        "SOCKS 220.158.234.84:1080",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 103.239.201.50:58765",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}