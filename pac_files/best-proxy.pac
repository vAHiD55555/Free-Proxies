function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.154:4326",
        "SOCKS 213.164.100.44:80",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 193.190.253.80:80",
        "SOCKS 147.45.179.84:1082",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 85.192.56.4:48716",
        "SOCKS 161.35.70.249:80",
        "SOCKS 36.255.98.179:7880",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 62.60.131.253:9101",
        "SOCKS 62.60.131.203:6261",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 62.60.131.178:17557",
        "SOCKS 45.151.182.9:3128",
        "SOCKS 37.120.133.137:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}