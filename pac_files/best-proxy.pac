function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 38.34.179.179:8443",
        "SOCKS 45.136.131.45:8448",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 206.123.156.177:4548",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 159.8.114.37:80",
        "SOCKS 35.180.188.216:80",
        "SOCKS 206.123.156.229:7917",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 206.123.156.221:5148",
        "SOCKS 206.123.156.212:7764",
        "SOCKS 45.136.130.166:8447",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}