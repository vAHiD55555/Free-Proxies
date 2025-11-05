function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.77.203.0:443",
        "SOCKS 141.11.241.17:8080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 154.201.75.82:8080",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 8.219.59.182:1111",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 41.32.39.7:3128",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 37.221.193.221:28274",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 18.163.49.218:3030",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 157.180.121.252:10091",
        "SOCKS 8.210.115.240:1011",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 152.53.36.101:28293",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}