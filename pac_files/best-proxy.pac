function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.130.151.230:7302",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 36.255.98.151:13126",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 36.255.98.169:12000",
        "SOCKS 36.255.98.160:6115",
        "SOCKS 62.60.131.204:11829",
        "SOCKS 62.60.131.178:10065",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 36.255.98.163:4083",
        "SOCKS 36.255.98.161:5703",
        "SOCKS 47.86.41.142:1024",
        "SOCKS 36.255.98.151:15722",
        "SOCKS 36.255.98.151:9963",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 36.255.98.151:20986",
        "SOCKS 51.15.133.214:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}