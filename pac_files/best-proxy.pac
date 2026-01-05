function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.22.198.4:8082",
        "SOCKS 20.78.213.56:80",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 174.138.167.250:8080",
        "SOCKS 124.248.190.48:1080",
        "SOCKS 125.27.24.41:8080",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 141.98.188.201:2080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 62.60.131.188:6214",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 36.255.98.160:16109",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 164.163.43.102:10000",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 66.135.227.178:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}